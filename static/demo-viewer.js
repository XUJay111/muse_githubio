const demoCases = window.MUSE_DEMO_CASES || [];

const state = {
  caseIndex: 0,
  stageIndex: 2,
  view: "model",
  viewer: null
};

const els = {
  caseList: document.querySelector("[data-demo-case-list]"),
  caseCount: document.querySelector("[data-demo-case-count]"),
  caseSelect: document.querySelector("[data-demo-case-select]"),
  stageFilmstrip: document.querySelector("[data-demo-stage-filmstrip]"),
  viewTabs: document.querySelector("[data-demo-view-tabs]"),
  title: document.querySelector("[data-demo-title]"),
  meta: document.querySelector("[data-demo-meta]"),
  stageLabel: document.querySelector("[data-demo-stage-label]"),
  prompt: document.querySelector("[data-demo-prompt]"),
  preserve: document.querySelector("[data-demo-preserve]"),
  expected: document.querySelector("[data-demo-expected]"),
  absent: document.querySelector("[data-demo-absent]"),
  memoryStatus: document.querySelector("[data-demo-memory-status]"),
  workingMemory: document.querySelector("[data-demo-working-memory]"),
  workingCount: document.querySelector("[data-demo-working-count]"),
  sceneMemory: document.querySelector("[data-demo-scene-memory]"),
  sceneCount: document.querySelector("[data-demo-scene-count]"),
  skillMemory: document.querySelector("[data-demo-skill-memory]"),
  skillTag: document.querySelector("[data-demo-skill-tag]"),
  skillType: document.querySelector("[data-demo-skill-type]"),
  imageWrap: document.querySelector("[data-demo-image-wrap]"),
  compareRange: document.querySelector("[data-demo-compare-range]"),
  afterClip: document.querySelector("[data-demo-after-clip]"),
  compareDivider: document.querySelector("[data-demo-compare-divider]"),
  beforeImage: document.querySelector("[data-demo-before-image]"),
  afterImage: document.querySelector("[data-demo-after-image]"),
  beforeLabel: document.querySelector("[data-demo-before-label]"),
  afterLabel: document.querySelector("[data-demo-after-label]"),
  modelWrap: document.querySelector("[data-demo-model-wrap]"),
  model: document.querySelector("[data-demo-model]"),
  modelOverlay: document.querySelector("[data-demo-model-overlay]"),
  modelStatus: document.querySelector("[data-demo-model-status]"),
  modelProgress: document.querySelector("[data-demo-model-progress]"),
  modelProgressBar: document.querySelector("[data-demo-model-progress-bar]"),
  modelProgressText: document.querySelector("[data-demo-model-progress-text]"),
  modelHint: document.querySelector("[data-demo-model-hint]")
};

const viewOptions = [
  { id: "model", label: "3D View" },
  { id: "perspectiveCompare", label: "Perspective Compare", imageKey: "diag" },
  { id: "topCompare", label: "Top Compare", imageKey: "top" }
];

function currentCase() {
  return demoCases[state.caseIndex];
}

function currentStage() {
  return currentCase().stages[state.stageIndex];
}

function roomLabel(roomType) {
  return roomType.replace(/_/g, " ");
}

function setCaseIndex(index) {
  const nextIndex = Math.max(0, Math.min(demoCases.length - 1, Number(index) || 0));
  state.caseIndex = nextIndex;
  state.stageIndex = Math.min(2, currentCase().stages.length - 1);
  if (state.viewer) state.viewer.enableAutoOrbit();
  if (state.viewer) state.viewer.clearModel();
  render();
}

function setStageIndex(index) {
  state.stageIndex = index;
  if (state.viewer) state.viewer.enableAutoOrbit();
  render();
}

function renderPills(container, values, emptyText) {
  container.innerHTML = "";
  if (!values || values.length === 0) {
    const span = document.createElement("span");
    span.className = "demo-empty";
    span.textContent = emptyText;
    container.appendChild(span);
    return;
  }

  values.forEach((value) => {
    const span = document.createElement("span");
    span.className = "demo-pill";
    span.textContent = value;
    container.appendChild(span);
  });
}

function renderCaseButtons() {
  if (els.caseList) els.caseList.innerHTML = "";
  if (els.caseCount) {
    els.caseCount.textContent = `${demoCases.length} cases`;
  }
  demoCases.forEach((item, index) => {
    const finalStage = item.stages[item.stages.length - 1];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "case-card";
    button.dataset.active = String(index === state.caseIndex);
    button.setAttribute("aria-pressed", String(index === state.caseIndex));
    button.setAttribute("aria-label", `Open case ${index + 1}: ${item.title}`);
    button.title = `${String(index + 1).padStart(2, "0")} - ${item.title}`;
    button.innerHTML = `
      <span class="case-check" aria-hidden="true"></span>
      <span class="case-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="case-copy">
        <strong>${item.title}</strong>
        <em>${roomLabel(item.roomType)} / ${item.editType}</em>
        <small>${finalStage.label}: ${finalStage.title}</small>
      </span>
    `;
    button.addEventListener("click", () => setCaseIndex(index));
    if (els.caseList) els.caseList.appendChild(button);
  });
}

function renderCaseSelect() {
  if (!els.caseSelect) return;
  els.caseSelect.innerHTML = "";
  demoCases.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${String(index + 1).padStart(2, "0")} - ${item.title}`;
    els.caseSelect.appendChild(option);
  });
  els.caseSelect.value = String(state.caseIndex);
}

if (els.caseSelect) {
  els.caseSelect.addEventListener("change", () => {
    setCaseIndex(Number(els.caseSelect.value));
  });
}

if (els.compareRange) {
  els.compareRange.addEventListener("input", () => {
    updateCompareSplit(Number(els.compareRange.value));
  });
}

function handleTabKey(event, index, count, activate) {
  const keyMap = {
    ArrowRight: 1,
    ArrowDown: 1,
    ArrowLeft: -1,
    ArrowUp: -1
  };

  if (event.key === "Home") {
    event.preventDefault();
    activate(0);
    return;
  }

  if (event.key === "End") {
    event.preventDefault();
    activate(count - 1);
    return;
  }

  if (!(event.key in keyMap)) return;
  event.preventDefault();
  activate((index + keyMap[event.key] + count) % count);
}

function renderStageFilmstrip() {
  if (!els.stageFilmstrip) return;
  els.stageFilmstrip.innerHTML = "";
  currentCase().stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stage-frame";
    button.dataset.active = String(index === state.stageIndex);
    button.setAttribute("aria-pressed", String(index === state.stageIndex));
    button.setAttribute("aria-label", `Show ${stage.label}: ${stage.title}`);
    button.innerHTML = `
      <span class="stage-frame-image"><img src="${stage.images.diag}" alt="" loading="lazy"></span>
      <span class="stage-frame-copy">
        <strong>${stage.label}</strong>
        <em>${stage.title}</em>
      </span>
    `;
    button.addEventListener("click", () => setStageIndex(index));
    els.stageFilmstrip.appendChild(button);
  });
}

function renderViewTabs() {
  els.viewTabs.innerHTML = "";
  viewOptions.forEach((view, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "demo-tab";
    button.dataset.active = String(view.id === state.view);
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(view.id === state.view));
    button.tabIndex = view.id === state.view ? 0 : -1;
    button.textContent = view.label;
    const activate = (nextIndex) => {
      state.view = viewOptions[nextIndex].id;
      renderMedia();
      renderViewTabs();
    };
    button.addEventListener("click", () => {
      state.view = view.id;
      renderMedia();
      renderViewTabs();
    });
    button.addEventListener("keydown", (event) => handleTabKey(event, index, viewOptions.length, activate));
    els.viewTabs.appendChild(button);
  });
}

function renderMedia() {
  const item = currentCase();
  const stage = currentStage();
  const isModel = state.view === "model";
  const view = viewOptions.find((option) => option.id === state.view) || viewOptions[0];

  els.imageWrap.hidden = isModel;
  els.modelWrap.hidden = !isModel;

  if (isModel) {
    loadModel(item, state.stageIndex);
    return;
  }

  const beforeStageIndex = Math.max(0, state.stageIndex - 1);
  const beforeStage = currentCase().stages[beforeStageIndex];
  const imageKey = view.imageKey || "diag";
  els.beforeImage.src = beforeStage.images[imageKey];
  els.afterImage.src = stage.images[imageKey];
  els.beforeImage.alt = `${item.title} ${beforeStage.label} ${imageKey} render`;
  els.afterImage.alt = `${item.title} ${stage.label} ${imageKey} render`;
  els.beforeLabel.textContent = beforeStageIndex === state.stageIndex ? stage.label : beforeStage.label;
  els.afterLabel.textContent = stage.label;
  updateCompareSplit(Number(els.compareRange?.value || 50));
}

function updateCompareSplit(value) {
  const split = Math.max(0, Math.min(100, Number.isFinite(value) ? value : 50));
  if (els.afterClip) els.afterClip.style.clipPath = `inset(0 0 0 ${split}%)`;
  if (els.compareDivider) els.compareDivider.style.left = `${split}%`;
  if (els.compareRange) els.compareRange.value = String(split);
}

function renderMemoryTrace(item, stage) {
  const activeGoals = stage.expected.length + stage.absent.length;
  const preserved = stage.preserve.length;
  const skillMap = {
    "Add object": "Insert + verify",
    "Delete object": "Remove + protect",
    "Replace object": "Swap target",
    "Scale object": "Resize local object",
    "Move object": "Relocate target",
    "Rotate object": "Orient target"
  };

  els.memoryStatus.textContent = item.quality === "bbox-clear" ? "BBox-clear case" : "Curated case";
  els.workingMemory.textContent = `${stage.label}: ${stage.title}`;
  els.workingCount.textContent = `${activeGoals} active checks`;
  els.sceneMemory.textContent = preserved > 0 ? "Protected scene bindings" : "Initial scene state";
  els.sceneCount.textContent = preserved > 0 ? `${preserved} preserved objects` : "new room memory";
  els.skillMemory.textContent = skillMap[item.editType] || "Authoring pattern";
  els.skillTag.textContent = item.accent;
  if (els.skillType) {
    els.skillType.textContent = item.editType;
  }
}

async function loadModel(item, stageIndex) {
  try {
    const modelUrl = item.stageGlbs?.[stageIndex] || item.finalGlb;
    if (!state.viewer) {
      state.viewer = new ProjectPageThreeViewer({
        container: els.model,
        overlay: els.modelOverlay,
        statusElement: els.modelStatus,
        progressElement: els.modelProgress,
        progressBar: els.modelProgressBar,
        progressText: els.modelProgressText,
        hintElement: els.modelHint
      });
      await state.viewer.init();
    }
    state.viewer.load(modelUrl, currentStage().label);
  } catch (error) {
    setModelOverlayState({
      stateName: "error",
      message: "Unable to initialize 3D view",
      progress: 0,
      hint: "Please try another case or refresh the page."
    });
    console.error("Unable to initialize 3D view", error);
  }
}

function render() {
  const item = currentCase();
  const stage = currentStage();

  renderCaseButtons();
  renderCaseSelect();
  renderStageFilmstrip();
  renderViewTabs();

  els.title.textContent = item.title;
  els.meta.textContent = `${roomLabel(item.roomType)} / ${item.editType}`;
  els.stageLabel.textContent = `${stage.label}: ${stage.title}`;
  els.prompt.textContent = stage.prompt;
  renderPills(els.preserve, stage.preserve, "No prior objects to preserve");
  renderPills(els.expected, stage.expected, "No expected object checks");
  renderPills(els.absent, stage.absent, "No removal target");
  renderMemoryTrace(item, stage);
  renderMedia();
}

function setModelOverlayState({ stateName, message, progress = 0, hint = "" }) {
  const boundedProgress = Math.max(0, Math.min(100, Math.round(progress)));
  if (els.modelOverlay) els.modelOverlay.dataset.state = stateName;
  if (els.modelStatus) els.modelStatus.textContent = message;
  if (els.modelProgress) els.modelProgress.setAttribute("aria-valuenow", String(boundedProgress));
  if (els.modelProgressBar) els.modelProgressBar.style.width = `${boundedProgress}%`;
  if (els.modelProgressText) els.modelProgressText.textContent = stateName === "loading" ? `${boundedProgress}%` : "";
  if (els.modelHint) els.modelHint.textContent = hint;
}

class ProjectPageThreeViewer {
  constructor({ container, overlay, statusElement, progressElement, progressBar, progressText, hintElement }) {
    this.container = container;
    this.overlay = overlay;
    this.statusElement = statusElement;
    this.progressElement = progressElement;
    this.progressBar = progressBar;
    this.progressText = progressText;
    this.hintElement = hintElement;
    this.currentModel = null;
    this.currentUrl = "";
    this.loadToken = 0;
    this.animationId = 0;
    this.resizeObserver = null;
    this.autoOrbit = true;
  }

  async init() {
    if (this.renderer) return;

    const [{ default: threeModule }, { GLTFLoader }, { OrbitControls }, { RoomEnvironment }] = await Promise.all([
      import("three").then((module) => ({ default: module })),
      import("three/addons/loaders/GLTFLoader.js"),
      import("three/addons/controls/OrbitControls.js"),
      import("three/addons/environments/RoomEnvironment.js")
    ]);

    this.THREE = threeModule;
    const THREE = this.THREE;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x101827);

    const { width, height } = this.dimensions();
    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 120);
    this.camera.position.set(5, 4, 6);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.85;
    if ("outputColorSpace" in this.renderer) {
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    this.container.appendChild(this.renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.pmrem = pmrem;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.055;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.08;
    this.controls.autoRotate = false;
    this.controls.addEventListener("start", () => this.disableAutoOrbit());

    this.loader = new GLTFLoader();
    this.addLights();
    this.bindInteractionGuards();

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.container);
    this.animate();
  }

  dimensions() {
    return {
      width: Math.max(this.container.clientWidth || 1, 320),
      height: Math.max(this.container.clientHeight || 1, 320)
    };
  }

  addLights() {
    const THREE = this.THREE;
    this.lightRig = new THREE.Group();
    this.scene.add(this.lightRig);

    this.lightRig.add(new THREE.HemisphereLight(0xffffff, 0x8da3be, 0.75));
    const key = new THREE.DirectionalLight(0xfff1dc, 2.2);
    key.position.set(4, 8, 5);
    key.castShadow = true;
    this.lightRig.add(key);

    const fill = new THREE.DirectionalLight(0x90d7ff, 0.7);
    fill.position.set(-5, 3, -4);
    this.lightRig.add(fill);
  }

  load(url, label = "") {
    if (!url || url === this.currentUrl) return;
    const token = ++this.loadToken;
    this.currentUrl = url;
    const displayName = this.displayName(url, label);
    this.setState("loading", "Loading 3D scene...", 6, `Fetching ${displayName}.`);

    this.loader.load(
      this.cacheBustedUrl(url),
      (gltf) => {
        if (token !== this.loadToken || url !== this.currentUrl) {
          this.disposeModel(gltf.scene);
          return;
        }
        this.clearModel({ keepCurrentUrl: true, keepLoadToken: true });
        this.currentUrl = url;
        this.currentModel = gltf.scene;
        this.prepareModel(this.currentModel);
        this.scene.add(this.currentModel);
        this.frameModel();
        this.enableAutoOrbit();
        this.setState("loaded", "3D scene loaded", 100, `${displayName} loaded. Auto orbit is on; drag to take control.`);
      },
      (event) => {
        if (token !== this.loadToken || url !== this.currentUrl) return;
        const progress = event.total > 0 ? (event.loaded / event.total) * 100 : 35;
        this.setState("loading", "Loading 3D scene...", progress, `Fetching ${displayName}.`);
      },
      () => {
        if (token !== this.loadToken || url !== this.currentUrl) return;
        this.currentUrl = "";
        this.setState("error", "Unable to load 3D scene", 0, "Please try another case or refresh the page.");
      }
    );
  }

  prepareModel(model) {
    const THREE = this.THREE;
    model.traverse((node) => {
      if (!node.isMesh) return;
      if (this.isAssetShadowMesh(node)) {
        node.visible = false;
        return;
      }
      const nodeName = (node.name || "").toLowerCase();
      const isWall = nodeName.startsWith("wall_");
      node.castShadow = !isWall;
      node.receiveShadow = true;
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      const preparedMaterials = materials.map((material) => {
        if (!material) return material;
        if (isWall) {
          material = material.clone();
          material.transparent = true;
          material.opacity = 0.16;
          material.depthWrite = false;
          material.side = THREE.DoubleSide;
        }
        if (typeof material.envMapIntensity === "number") {
          material.envMapIntensity = Math.max(material.envMapIntensity, 0.55);
        }
        material.needsUpdate = true;
        return material;
      });
      node.material = Array.isArray(node.material) ? preparedMaterials : preparedMaterials[0];
    });
  }

  isAssetShadowMesh(node) {
    const materialNames = (Array.isArray(node.material) ? node.material : [node.material])
      .map((material) => material?.name || "");
    const names = [
      node.name,
      node.geometry?.name,
      node.userData?.name,
      ...materialNames
    ]
      .filter(Boolean)
      .map((name) => String(name).toLowerCase());
    return names.some((name) => name === "shadow" || name.startsWith("shadow_") || name.endsWith("_shadow"));
  }

  frameModel() {
    const THREE = this.THREE;
    const box = new THREE.Box3().setFromObject(this.currentModel);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const span = Math.max(size.x, size.y, size.z, 4);

    this.controls.target.copy(center);
    this.camera.position.set(center.x + span * 0.8, center.y + span * 0.58, center.z + span * 0.8);
    this.camera.near = Math.max(span / 100, 0.05);
    this.camera.far = span * 12;
    this.camera.lookAt(center);
    this.camera.updateProjectionMatrix();
    this.controls.update();
  }

  bindInteractionGuards() {
    const stopAutoOrbit = () => this.disableAutoOrbit();
    this.container.addEventListener("pointerdown", stopAutoOrbit, { passive: true });
    this.container.addEventListener("wheel", stopAutoOrbit, { passive: true });
    this.container.addEventListener("keydown", stopAutoOrbit);
  }

  enableAutoOrbit() {
    this.autoOrbit = true;
    if (this.hintElement) this.hintElement.textContent = "Auto orbit is on; drag to take control.";
  }

  disableAutoOrbit() {
    if (!this.autoOrbit) return;
    this.autoOrbit = false;
    if (this.hintElement) this.hintElement.textContent = "Manual orbit mode. Drag to orbit / scroll to zoom.";
  }

  cacheBustedUrl(url) {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}v=${encodeURIComponent(url)}`;
  }

  displayName(url, label) {
    const parts = url.split("/");
    const fileName = parts[parts.length - 1] || url;
    return label ? `${label} ${fileName}` : fileName;
  }

  clearModel({ keepCurrentUrl = false, keepLoadToken = false } = {}) {
    if (!keepLoadToken) this.loadToken += 1;
    if (!this.currentModel || !this.scene) return;

    this.disposeModel(this.currentModel);
    this.currentModel = null;
    if (!keepCurrentUrl) this.currentUrl = "";
  }

  disposeModel(model) {
    if (!model) return;

    if (this.scene) this.scene.remove(model);
    model.traverse((node) => {
      if (!node.isMesh) return;
      if (node.geometry) node.geometry.dispose();
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach((material) => {
        if (!material) return;
        Object.keys(material).forEach((key) => {
          const value = material[key];
          if (value && typeof value.dispose === "function") value.dispose();
        });
        material.dispose();
      });
    });
  }

  resize() {
    if (!this.renderer || !this.camera) return;
    const { width, height } = this.dimensions();
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    if (this.autoOrbit && this.currentModel && this.controls) {
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 0.55;
    } else if (this.controls) {
      this.controls.autoRotate = false;
    }
    if (this.controls) this.controls.update();
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  setState(stateName, message, progress = 0, hint = "") {
    const boundedProgress = Math.max(0, Math.min(100, Math.round(progress)));
    if (this.overlay) this.overlay.dataset.state = stateName;
    if (this.statusElement) this.statusElement.textContent = message;
    if (this.progressElement) this.progressElement.setAttribute("aria-valuenow", String(boundedProgress));
    if (this.progressBar) this.progressBar.style.width = `${boundedProgress}%`;
    if (this.progressText) this.progressText.textContent = stateName === "loading" ? `${boundedProgress}%` : "";
    if (this.hintElement) this.hintElement.textContent = hint;
  }
}

window.ProjectPageThreeViewer = ProjectPageThreeViewer;

if (demoCases.length > 0) {
  render();
}
