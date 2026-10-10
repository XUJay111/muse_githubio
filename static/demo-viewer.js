const groups = [
  {label:'Replace', ids:['12','36']}, {label:'Move', ids:['22','23']},
  {label:'Rotate', ids:['26','44']}, {label:'Resize', ids:['16','48']},
  {label:'Remove', ids:['08','31']}, {label:'Add', ids:['02','35','45','03']}
];
const caseOrder = groups.flatMap(group=>group.ids);
const demoCases = [...(window.MUSE_DEMO_CASES || [])].sort((a,b)=>caseOrder.indexOf(a.id.slice(0,2))-caseOrder.indexOf(b.id.slice(0,2)));
const caseButtons = [];
const groupFor = item => groups.find(group=>group.ids.includes(item.id.slice(0,2))).label;
const $ = name => document.querySelector(`[data-demo-${name}]`);
const els = Object.fromEntries([
  'case-list','case-count','case-select','stage-filmstrip','view-tabs','title','meta',
  'step-count','stage-label','instruction','prompt','image-wrap','compare-range',
  'after-clip','compare-divider','before-image','after-image','before-label','after-label',
  'model-wrap','model','model-overlay','model-status','model-progress','model-progress-bar',
  'model-progress-text','model-hint','reset','fullscreen','surface','feedback','previous','replay','play',
  'composer','command','command-step','command-status','send'
].map(name => [name, $(name)]));
const state = { caseIndex: 0, stageIndex: 1, loading: false, sentStage: null, view: 'model', request: 0, playing: false, playToken: 0, viewer: null, ready: null };
const views = [{id:'model',label:'3D scene'}, {id:'perspectiveCompare',label:'Before / after',key:'diag'}, {id:'topCompare',label:'Top view',key:'top'}];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const currentCase = () => demoCases[state.caseIndex];
const currentStage = () => currentCase().stages[state.stageIndex];
const editCommand = stage => stage.prompt.match(/\b(?:Add|Remove|Replace|Move|Rotate|Make)\b[\s\S]*$/)?.[0] || stage.prompt;

function stopPlayback(invalidate=true) {
  state.playing = false;if(invalidate)state.playToken++;
  els.play.textContent = 'Play all';
  els.replay.textContent = 'Replay edit';
  els.replay.setAttribute('aria-pressed','false');
  if(invalidate) {
    state.sentStage = null;
    els['command-status'].textContent='';
  }
  els.play.setAttribute('aria-pressed','false');
}

function tabKeys(event, index, count, activate) {
  let next;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = count - 1;
  if (event.key === 'ArrowRight') next = (index + 1) % count;
  if (event.key === 'ArrowLeft') next = (index + count - 1) % count;
  if (next !== undefined) { event.preventDefault(); activate(next); }
}

function buildNavigation() {
  els['case-count'].textContent = `${demoCases.length} cases`;
  let lastGroup = '', optionGroup;
  demoCases.forEach((item,index) => {
    const group = groupFor(item);
    if(group!==lastGroup) {
      const heading=document.createElement('p');heading.className='case-group-label';heading.textContent=group;els['case-list'].append(heading);
      optionGroup=document.createElement('optgroup');optionGroup.label=group;els['case-select'].append(optionGroup);lastGroup=group;
    }
    const button = document.createElement('button'); button.type='button';button.className='case-card';
    const thumbnail = document.createElement('img');thumbnail.className='case-thumbnail';thumbnail.src=item.stages[2].images.diag;thumbnail.alt='';thumbnail.loading='lazy';
    const copy = document.createElement('span');copy.className='case-copy';
    const title = document.createElement('strong');title.textContent=item.stages[2].title;
    const meta = document.createElement('em');meta.textContent=item.roomType;
    copy.append(title,meta);button.append(thumbnail,copy);
    button.addEventListener('click',() => selectCase(index));els['case-list'].append(button);caseButtons.push(button);
    const option=document.createElement('option');option.value=index;option.textContent=`${item.stages[2].title} · ${item.roomType}`;optionGroup.append(option);
  });
  views.forEach((view,index) => {
    const button=document.createElement('button');button.type='button';button.className='demo-tab';button.textContent=view.label;button.setAttribute('role','tab');
    button.addEventListener('click',()=>selectView(index));
    button.addEventListener('keydown',event=>tabKeys(event,index,views.length,next=>{selectView(next);els['view-tabs'].children[next].focus();}));
    els['view-tabs'].append(button);
  });
  for(let i=0;i<3;i++) {
    const button=document.createElement('button');button.type='button';button.className='stage-frame';button.textContent=['Initial','Edit 1','Edit 2'][i];
    button.addEventListener('click',()=>selectStage(i));
    button.addEventListener('keydown',event=>tabKeys(event,i,3,next=>{selectStage(next);els['stage-filmstrip'].children[next].focus();}));
    els['stage-filmstrip'].append(button);
  }
}

async function selectCase(index) {
  stopPlayback();state.caseIndex=index;state.stageIndex=1;els['compare-range'].value='50';els['command-status'].textContent='';
  state.viewer?.cache.retain(currentCase().stageGlbs);
  await render();
}
async function selectStage(index, fromPlayback=false) {
  if (!fromPlayback) {stopPlayback();els['command-status'].textContent='';}
  state.stageIndex=Math.max(0,Math.min(currentCase().stages.length-1,index));els['compare-range'].value='50';
  return render();
}
function selectView(index) {
  stopPlayback();els['command-status'].textContent='';state.view=views[index].id;render();
}

function renderControls() {
  const item=currentCase(),stage=currentStage();
  els.title.textContent=item.title;els.meta.textContent=item.roomType;
  els['step-count'].textContent=state.stageIndex===0?'Initial scene':`Edit ${state.stageIndex} / ${item.stages.length-1}`;
  els['stage-label'].textContent=state.stageIndex===0?'STARTING SCENE':`EDIT ${state.stageIndex}`;
  els.instruction.textContent=stage.title;
  els.previous.disabled=state.stageIndex===0;
  els.replay.disabled=!state.playing && (state.stageIndex===0 || state.loading);
  const nextIndex=state.sentStage ?? Math.min(state.stageIndex+1,item.stages.length-1);
  els.command.value=editCommand(item.stages[nextIndex]);
  els.prompt.textContent=item.stages[nextIndex].prompt;
  els['command-step'].textContent=`Edit ${nextIndex} of ${item.stages.length-1}`;
  els.send.disabled=state.loading || state.playing || state.stageIndex===item.stages.length-1;
  els.send.textContent=state.sentStage!==null?'Loading edit…':state.stageIndex===item.stages.length-1?'Edit complete':'Send instruction ↑';
  els.composer.setAttribute('aria-busy',String(state.sentStage!==null));
  els['case-select'].value=state.caseIndex;
  caseButtons.forEach((b,i)=>{b.dataset.active=String(i===state.caseIndex);b.setAttribute('aria-pressed',String(i===state.caseIndex));});
  [...els['stage-filmstrip'].children].forEach((b,i)=>{b.dataset.active=String(i===state.stageIndex);b.setAttribute('aria-pressed',String(i===state.stageIndex));b.setAttribute('aria-label',`${i+1}. ${item.stages[i].title}`);});
  [...els['view-tabs'].children].forEach((b,i)=>{const active=views[i].id===state.view;b.dataset.active=String(active);b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
  els.reset.hidden=state.view!=='model';
}

function updateSplit() {
  const initial=state.stageIndex===0;
  const split=initial?0:Number(els['compare-range'].value);
  els['after-clip'].style.clipPath=`inset(0 0 0 ${split}%)`;
  els['compare-divider'].style.left=`${split}%`;
  els['compare-range'].hidden=initial;els['compare-divider'].hidden=initial;els['before-label'].hidden=initial;
}
function loadImage(src) {
  return new Promise((resolve,reject)=>{
    const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>reject(new Error('Comparison image could not be loaded.'));
    image.src=src;
    if(image.complete && image.naturalWidth)resolve(image);
  });
}
function preloadNext(item,index) {
  if(window.navigator?.connection?.saveData || index>=item.stages.length-1)return;
  const next=item.stages[index+1];
  for(const src of Object.values(next.images))loadImage(src).catch(()=>{});
  if(state.view==='model')state.viewer?.cache.prefetch(item.stageGlbs[index+1]);
}
function objectChanges(before,after) {
  return {
    changed:Object.keys(after).filter(id=>!before[id] || JSON.stringify(before[id])!==JSON.stringify(after[id])),
    removed:Object.keys(before).filter(id=>!after[id])
  };
}

// Keep at most one case's three compressed GLBs, not multiple parsed GPU scenes.
class SceneAssetCache {
  constructor(){this.entries=new Map();}
  retain(urls) {
    for(const [url,entry] of this.entries)if(!urls.includes(url)){entry.controller.abort();this.entries.delete(url);}
  }
  get(url) {
    if(this.entries.has(url))return this.entries.get(url).promise;
    const controller=new AbortController(),entry={controller};
    entry.promise=fetch(url,{signal:controller.signal}).then(response=>{
      if(!response.ok)throw new Error(`Scene request failed: ${response.status}`);
      return response.arrayBuffer();
    }).catch(error=>{if(this.entries.get(url)===entry)this.entries.delete(url);throw error;});
    this.entries.set(url,entry);return entry.promise;
  }
  prefetch(url){this.get(url).catch(()=>{});}
}

async function render() {
  state.loading=true;renderControls();const request=++state.request;const item=currentCase(),stage=currentStage(),index=state.stageIndex;
  els.feedback.textContent='';const is3D=state.view==='model';
  els['image-wrap'].hidden=is3D;els['model-wrap'].hidden=!is3D;
  try {
    if (is3D) {
      if (!state.viewer) {
        state.viewer=new SceneViewer(els.model);
        state.ready=state.viewer.init().catch(error=>{state.viewer?.dispose();state.viewer=null;state.ready=null;throw error;});
      }
      await state.ready;
      if(request!==state.request)return false;
      state.viewer.cache.retain(item.stageGlbs);
      const loaded=await state.viewer.load(item.stageGlbs[index],item.id,stage,()=>request===state.request);
      if(loaded && request===state.request)preloadNext(item,index);
      return loaded;
    }
    const key=views.find(v=>v.id===state.view).key;const before=item.stages[Math.max(0,index-1)];
    els['before-label'].textContent=`Before · ${before.label}`;els['after-label'].textContent=index===0?'Starting scene':`After · ${stage.label}`;
    updateSplit();
    await Promise.all([loadImage(before.images[key]),loadImage(stage.images[key])]);
    if(request!==state.request)return false;
    els['before-image'].src=before.images[key];els['before-image'].alt=`${item.title}, ${before.label}`;
    els['after-image'].src=stage.images[key];els['after-image'].alt=`${item.title}, ${stage.label}`;
    preloadNext(item,index);return true;
  } catch(error) {
    if(request!==state.request)return false;
    stopPlayback(false);els.feedback.textContent=is3D?'3D could not load. Try Before / after, or select this stage again.':'Comparison could not load. Select this stage to retry.';
    setModelStatus('error','Unable to load scene',0,'Try another view or retry this stage.');
    console.error(error);return false;
  } finally {
    if(request===state.request){state.loading=false;renderControls();}
  }
}

async function sendInstruction(event) {
  event?.preventDefault();
  if(state.loading || state.playing || state.stageIndex>=currentCase().stages.length-1)return;
  stopPlayback();const from=state.stageIndex,target=from+1;
  state.sentStage=target;els['command-status'].textContent='Loading the edited scene…';
  const pending=selectStage(target,true),request=state.request;
  const loaded=await pending;
  if(request!==state.request)return;
  state.sentStage=null;
  if(!loaded){state.stageIndex=from;els['command-status'].textContent='The edit could not load. Send the instruction to retry.';}
  else els['command-status'].textContent=`Edit ${target} shown. Replay it or compare before and after.`;
  renderControls();
}
async function replayEdit() {
  if(state.playing){stopPlayback();renderControls();return;}
  if(state.loading || state.stageIndex===0)return;
  const target=state.stageIndex;state.playing=true;const token=++state.playToken;
  els.replay.textContent='Stop replay';els.replay.setAttribute('aria-pressed','true');
  els['command-status'].textContent=`Before edit ${target}`;
  if(!await selectStage(target-1,true)){if(token===state.playToken){stopPlayback();renderControls();}return;}
  await new Promise(resolve=>setTimeout(resolve,reducedMotion.matches?0:1300));
  if(!state.playing || token!==state.playToken)return;
  const loaded=await selectStage(target,true);
  if(token===state.playToken){
    stopPlayback();
    if(loaded)els['command-status'].textContent=`After edit ${target} · ${currentStage().title}`;
    renderControls();
  }
}

async function playSequence() {
  if(state.playing){stopPlayback();renderControls();return;}
  state.playing=true;const token=++state.playToken;
  els.play.textContent='Pause';els.play.setAttribute('aria-pressed','true');
  if(!await selectStage(0,true)) {if(token===state.playToken)stopPlayback();return;}
  while(state.playing && token===state.playToken) {
    await new Promise(resolve=>setTimeout(resolve,2400));
    if(!state.playing || token!==state.playToken)return;
    if(state.stageIndex===currentCase().stages.length-1){stopPlayback();renderControls();return;}
    if(!await selectStage(state.stageIndex+1,true)){if(token===state.playToken)stopPlayback();return;}
  }
}
function setModelStatus(status,message,progress,hint) {
  els['model-overlay'].dataset.state=status;els['model-status'].textContent=message;els['model-hint'].textContent=hint;
  els['model-progress'].setAttribute('aria-valuenow',String(Math.round(progress)));els['model-progress-bar'].style.width=`${progress}%`;
  els['model-progress-text'].textContent=status==='loading'?`${Math.round(progress)}%`:'';
}

class SceneViewer {
  constructor(container) {this.container=container;this.currentModel=null;this.currentUrl='';this.caseId=null;this.helpers=[];this.highlightUntil=0;this.objectStates={};this.cache=new SceneAssetCache();}
  async init() {
    const [THREE,{GLTFLoader},{OrbitControls},{RoomEnvironment}]=await Promise.all([
      import('three'),import('three/addons/loaders/GLTFLoader.js'),import('three/addons/controls/OrbitControls.js'),import('three/addons/environments/RoomEnvironment.js')]);
    this.THREE=THREE;this.scene=new THREE.Scene();this.scene.background=new THREE.Color(0xe8eef5);
    this.camera=new THREE.OrthographicCamera(-6,6,6,-6,.1,150);
    this.renderer=new THREE.WebGLRenderer({antialias:true});this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.0;
    this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.container.append(this.renderer.domElement);
    this.pmrem=new THREE.PMREMGenerator(this.renderer);this.environment=this.pmrem.fromScene(new RoomEnvironment(),.04);this.scene.environment=this.environment.texture;
    this.scene.add(new THREE.HemisphereLight(0xffffff,0xb0bfd1,1.1));
    const key=new THREE.DirectionalLight(0xffffff,2);key.position.set(5,10,5);key.castShadow=true;
    key.shadow.mapSize.set(1024,1024);key.shadow.normalBias=.025;key.shadow.bias=-.0001;
    this.keyLight=key;this.scene.add(key,key.target);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.enableDamping=true;this.controls.dampingFactor=.08;
    this.controls.autoRotate=false;this.controls.maxPolarAngle=Math.PI/2-.02;
    this.controls.addEventListener('start',()=>{stopPlayback();renderControls();});
    this.loader=new GLTFLoader();this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(this.container);this.resize();this.animate();
  }
  async load(url,caseId,stage,isCurrent) {
    if(url===this.currentUrl) {
      this.resize();
      setModelStatus('loaded','Scene ready',100,'Drag to orbit · scroll to zoom');
      return true;
    }
    setModelStatus('loading','Loading scene…',8,'You can switch examples while this loads.');
    const bytes=await this.cache.get(url);
    if(!isCurrent())return false;
    setModelStatus('loading','Preparing scene…',70,'Loading textures');
    const gltf=await new Promise((resolve,reject)=>this.loader.parse(bytes,'',resolve,reject));
    if(!isCurrent()){this.disposeModel(gltf.scene);return false;}
    const sameCase=this.caseId===caseId;
    this.clearHighlights();
    const changes=objectChanges(this.objectStates,stage.objectStates);
    const removed=[];
    if(sameCase && this.currentModel && !reducedMotion.matches) {
      this.currentModel.updateMatrixWorld(true);
      for(const id of changes.removed) {
        const object=this.findObject(this.currentModel,id);
        if(object)removed.push(new this.THREE.Box3().setFromObject(object));
      }
    }
    if(this.currentModel){this.scene.remove(this.currentModel);this.disposeModel(this.currentModel);}
    this.currentModel=gltf.scene;this.caseId=caseId;this.currentUrl=url;this.objectStates=stage.objectStates;
    this.currentModel.traverse(node=>{
      if(!node.isMesh)return;
      node.castShadow=!['Floor','wall_back','wall_left'].includes(node.name);node.receiveShadow=true;
      const mats=Array.isArray(node.material)?node.material:[node.material];
      mats.forEach(m=>{if(m){m.side=this.THREE.DoubleSide;m.envMapIntensity=.7;}});
    });
    this.scene.add(this.currentModel);this.currentModel.updateMatrixWorld(true);
    if(!sameCase){this.configureFrame();this.resetView();} else this.resize();
    if(sameCase && !reducedMotion.matches) {
      for(const id of changes.changed) {
        const object=this.findObject(this.currentModel,id);
        if(object)this.addHighlight(new this.THREE.Box3().setFromObject(object),0x2563eb);
      }
      for(const box of removed)this.addHighlight(box,0xc77b47,true);
      this.highlightUntil=performance.now()+3400;
    }
    setModelStatus('loaded','Scene ready',100,'Drag to orbit · scroll to zoom');
    return true;
  }
  findObject(model,id) {let result=null;model.traverse(node=>{if(node.name===id || node.userData.objectId===id)result=node;});return result;}
  configureFrame() {
    const T=this.THREE;const floor=this.currentModel.getObjectByName('Floor');
    const box=new T.Box3().setFromObject(floor||this.currentModel);const center=box.getCenter(new T.Vector3());center.y=1.15;
    this.frame={center,width:box.max.x-box.min.x,depth:box.max.z-box.min.z};
    const reach=Math.max(this.frame.width,this.frame.depth);
    this.keyLight.position.copy(center).add(new T.Vector3(5,10,5));this.keyLight.target.position.copy(center);
    Object.assign(this.keyLight.shadow.camera,{left:-reach,right:reach,top:reach,bottom:-reach,near:.1,far:40});
    this.keyLight.shadow.camera.updateProjectionMatrix();
  }
  resetView() {
    if(!this.frame)return;
    const T=this.THREE,center=this.frame.center;
    this.controls.target.copy(center);this.camera.position.copy(center).add(new T.Vector3(12/Math.sqrt(2),12*Math.tan(38*Math.PI/180),12/Math.sqrt(2)));
    this.camera.lookAt(center);this.camera.zoom=1;this.controls.update();this.resize();
  }
  resize() {
    if(!this.renderer)return;
    const width=Math.max(1,this.container.clientWidth),height=Math.max(1,this.container.clientHeight),aspect=width/height;
    if(this.frame) {
      // Match the offline framing using only room width/depth and fixed wall height.
      const projectedWidth=(this.frame.width+this.frame.depth)/Math.sqrt(2);
      const projectedHeight=projectedWidth*Math.sin(38*Math.PI/180)+2.3*Math.cos(38*Math.PI/180);
      const vertical=Math.max(projectedHeight,projectedWidth)*1.06*Math.max(1,1/aspect);
      this.camera.left=-vertical*aspect/2;this.camera.right=vertical*aspect/2;this.camera.top=vertical/2;this.camera.bottom=-vertical/2;
    }
    this.camera.updateProjectionMatrix();this.renderer.setSize(width,height,false);
  }
  addHighlight(box,color,dashed=false) {
    const T=this.THREE,size=box.getSize(new T.Vector3()),center=box.getCenter(new T.Vector3());
    const shape=new T.BoxGeometry(size.x+.035,size.y+.035,size.z+.035);
    const geometry=new T.EdgesGeometry(shape);shape.dispose();
    const material=dashed?new T.LineDashedMaterial({color,dashSize:.08,gapSize:.055}):new T.LineBasicMaterial({color});
    material.depthTest=false;material.transparent=true;material.opacity=.55;
    const helper=new T.LineSegments(geometry,material);helper.position.copy(center);helper.renderOrder=10;
    if(dashed)helper.computeLineDistances();
    this.scene.add(helper);this.helpers.push(helper);
  }
  clearHighlights(){for(const h of this.helpers){this.scene.remove(h);h.geometry.dispose();h.material.dispose();}this.helpers=[];}
  disposeModel(model) {
    const geometries=new Set(),materials=new Set(),textures=new Set(),images=new Set();model.traverse(node=>{if(node.geometry)geometries.add(node.geometry);for(const m of (Array.isArray(node.material)?node.material:[node.material]))if(m)materials.add(m);});
    for(const m of materials)for(const value of Object.values(m))if(value?.isTexture)textures.add(value);
    geometries.forEach(g=>g.dispose());textures.forEach(t=>{if(t.source?.data)images.add(t.source.data);t.dispose();});images.forEach(image=>image.close?.());materials.forEach(m=>m.dispose());
  }
  animate(){this.animation=requestAnimationFrame(()=>this.animate());if(document.hidden || els['model-wrap'].hidden)return;if(this.helpers.length){const left=this.highlightUntil-performance.now();if(left<=0)this.clearHighlights();else for(const h of this.helpers)h.material.opacity=.55*Math.min(1,left/900);}this.controls.update();this.renderer.render(this.scene,this.camera);}
  dispose(){this.cache.retain([]);this.clearHighlights();if(this.currentModel)this.disposeModel(this.currentModel);cancelAnimationFrame(this.animation);this.resizeObserver?.disconnect();this.controls?.dispose();this.environment?.dispose();this.pmrem?.dispose();this.renderer?.dispose();this.renderer?.domElement.remove();}
}

els['case-select'].addEventListener('change',event=>selectCase(Number(event.target.value)));
els['compare-range'].addEventListener('input',()=>{stopPlayback();renderControls();updateSplit();});
els.previous.addEventListener('click',()=>selectStage(state.stageIndex-1));
els.composer.addEventListener('submit',sendInstruction);
els.command.addEventListener('keydown',event=>{if(event.key==='Enter' && (event.ctrlKey || event.metaKey)){event.preventDefault();sendInstruction();}});
els.replay.addEventListener('click',replayEdit);
els.play.addEventListener('click',playSequence);
els.reset.addEventListener('click',()=>{stopPlayback();renderControls();state.viewer?.resetView();});
if(!document.fullscreenEnabled)els.fullscreen.hidden=true;
els.fullscreen.addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await els.surface.requestFullscreen();}catch{els.feedback.textContent='Fullscreen is unavailable in this browser.';}});
document.addEventListener('fullscreenchange',()=>{els.fullscreen.textContent=document.fullscreenElement?'Exit fullscreen':'Fullscreen';state.viewer?.resize();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopPlayback();renderControls();}});
if(demoCases.length){buildNavigation();render();}
