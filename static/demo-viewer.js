const demoCases = window.MUSE_DEMO_CASES || [];

const state = {
  caseIndex: 0,
  stageIndex: 2,
  view: "diag",
  viewer: null
};

const els = {
  caseList: document.querySelector("[data-demo-case-list]"),
  caseSelect: document.querySelector("[data-demo-case-select]"),
  stageTabs: document.querySelector("[data-demo-stage-tabs]"),
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
  image: document.querySelector("[data-demo-image]"),
  imageWrap: document.querySelector("[data-demo-image-wrap]"),
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
  { id: "diag", label: "Perspective" },
  { id: "merged", label: "Comparison" },
  { id: "top", label: "Top" },
  { id: "model", label: "3D View" }
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
  els.caseList.innerHTML = "";
  demoCases.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "case-card";
    button.dataset.active = String(index === state.caseIndex);
    button.setAttribute("aria-pressed", String(index === state.caseIndex));
    button.innerHTML = `
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${item.title}</strong>
      <em>${item.accent}</em>
    `;
    button.addEventListener("click", () => {
      state.caseIndex = index;
      state.stageIndex = 2;
      if (state.viewer) state.viewer.clearModel();
      render();
    });
    els.caseList.appendChild(button);
  });
}

function renderCaseSelect() {
  els.caseSelect.innerHTML = "";
  demoCases.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${String(index + 1).padStart(2, "0")} - ${item.title}`;
    els.caseSelect.appendChild(option);
  });
  els.caseSelect.value = String(state.caseIndex);
}

els.caseSelect.addEventListener("change", () => {
  state.caseIndex = Number(els.caseSelect.value);
  state.stageIndex = 2;
  if (state.viewer) state.viewer.clearModel();
  render();
});

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

function renderStageTabs() {
  els.stageTabs.innerHTML = "";
  currentCase().stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "demo-tab";
    button.dataset.active = String(index === state.stageIndex);
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(index === state.stageIndex));
    button.tabIndex = index === state.stageIndex ? 0 : -1;
    button.textContent = stage.label;
    const activate = (nextIndex) => {
      state.stageIndex = nextIndex;
      render();
    };
    button.addEventListener("click", () => {
      state.stageIndex = index;
      render();
    });
    button.addEventListener("keydown", (event) => handleTabKey(event, index, currentCase().stages.length, activate));
    els.stageTabs.appendChild(button);
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

  els.imageWrap.hidden = isModel;
  els.modelWrap.hidden = !isModel;

  if (isModel) {
    loadModel(item, state.stageIndex);
    return;
  }

  els.image.src = stage.images[state.view];
  els.image.alt = `${item.title} ${stage.label} ${state.view} render`;
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
  renderStageTabs();
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

    this.loader = new GLTFLoader();
    this.addLights();

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
        this.setState("loaded", "3D scene loaded", 100, `${displayName} loaded. Drag to orbit / scroll to zoom`);
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
    model.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = true;
      node.receiveShadow = true;
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach((material) => {
        if (material && typeof material.envMapIntensity === "number") {
          material.envMapIntensity = Math.max(material.envMapIntensity, 0.55);
          material.needsUpdate = true;
        }
      });
    });
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

if (demoCases.length > 0) {
  render();
}
