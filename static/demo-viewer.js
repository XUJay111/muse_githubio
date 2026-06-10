const demoCases = window.MUSE_DEMO_CASES || [];

const state = {
  caseIndex: 0,
  stageIndex: 2,
  view: "merged",
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
  modelStatus: document.querySelector("[data-demo-model-status]")
};

const viewOptions = [
  { id: "merged", label: "Split" },
  { id: "diag", label: "Perspective" },
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
  viewOptions.forEach((view) => {
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
    if (!state.viewer) {
      state.viewer = new ProjectPageThreeViewer(els.model, els.modelStatus);
      await state.viewer.init();
    }
    state.viewer.load(item.stageGlbs?.[stageIndex] || item.finalGlb);
  } catch (error) {
    els.modelStatus.textContent = "Unable to initialize 3D view";
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

class ProjectPageThreeViewer {
  constructor(container, statusElement) {
    this.container = container;
    this.statusElement = statusElement;
    this.currentModel = null;
    this.currentUrl = "";
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

  load(url) {
    if (!url || url === this.currentUrl) return;
    this.currentUrl = url;
    this.setStatus("Loading 3D scene...");

    this.loader.load(
      url,
      (gltf) => {
        this.clearModel();
        this.currentUrl = url;
        this.currentModel = gltf.scene;
        this.prepareModel(this.currentModel);
        this.scene.add(this.currentModel);
        this.frameModel();
        this.setStatus("Drag to orbit / scroll to zoom");
      },
      undefined,
      () => {
        this.currentUrl = "";
        this.setStatus("Unable to load 3D scene");
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

  clearModel() {
    if (!this.currentModel || !this.scene) return;

    this.scene.remove(this.currentModel);
    this.currentModel.traverse((node) => {
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
    this.currentModel = null;
    this.currentUrl = "";
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

  setStatus(message) {
    if (this.statusElement) this.statusElement.textContent = message;
  }
}

if (demoCases.length > 0) {
  render();
}
