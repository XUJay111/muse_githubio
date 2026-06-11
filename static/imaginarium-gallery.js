const galleryCases = [
  {
    id: "bedroom_34",
    title: "Bedroom",
    roomType: "Bedroom",
    objectCount: 27,
    thumbnail: "static/imaginarium-gallery/thumbs/bedroom_34.png",
    model: "static/imaginarium-gallery/models/bedroom_34.glb"
  },
  {
    id: "livingroom_06",
    title: "Living Room",
    roomType: "Living room",
    objectCount: 22,
    thumbnail: "static/imaginarium-gallery/thumbs/livingroom_06.png",
    model: "static/imaginarium-gallery/models/livingroom_06.glb"
  },
  {
    id: "diningroom_05",
    title: "Dining Room",
    roomType: "Dining room",
    objectCount: 28,
    thumbnail: "static/imaginarium-gallery/thumbs/diningroom_05.png",
    model: "static/imaginarium-gallery/models/diningroom_05.glb"
  },
  {
    id: "kitchen_04",
    title: "Kitchen",
    roomType: "Kitchen",
    objectCount: 28,
    thumbnail: "static/imaginarium-gallery/thumbs/kitchen_04.png",
    model: "static/imaginarium-gallery/models/kitchen_04.glb"
  },
  {
    id: "official_03",
    title: "Office",
    roomType: "Office",
    objectCount: 41,
    thumbnail: "static/imaginarium-gallery/thumbs/official_03.png",
    model: "static/imaginarium-gallery/models/official_03.glb"
  },
  {
    id: "computer_room_03",
    title: "Computer Room",
    roomType: "Computer room",
    objectCount: 28,
    thumbnail: "static/imaginarium-gallery/thumbs/computer_room_03.png",
    model: "static/imaginarium-gallery/models/computer_room_03.glb"
  }
];

const state = {
  activeIndex: 0,
  initialized: false,
  viewer: null
};

const els = {
  root: document.querySelector("[data-imaginarium-gallery]"),
  model: document.querySelector("[data-imaginarium-model]"),
  overlay: document.querySelector("[data-imaginarium-model-overlay]"),
  status: document.querySelector("[data-imaginarium-model-status]"),
  progress: document.querySelector("[data-imaginarium-model-progress]"),
  progressBar: document.querySelector("[data-imaginarium-model-progress-bar]"),
  progressText: document.querySelector("[data-imaginarium-model-progress-text]"),
  hint: document.querySelector("[data-imaginarium-model-hint]"),
  thumbs: document.querySelector("[data-imaginarium-thumbs]"),
  title: document.querySelector("[data-imaginarium-title]"),
  meta: document.querySelector("[data-imaginarium-meta]"),
  count: document.querySelector("[data-imaginarium-count]")
};

function currentCase() {
  return galleryCases[state.activeIndex] || galleryCases[0];
}

function setOverlayState(stateName, message, progress = 0, hint = "") {
  const boundedProgress = Math.max(0, Math.min(100, Math.round(progress)));
  if (els.overlay) els.overlay.dataset.state = stateName;
  if (els.status) els.status.textContent = message;
  if (els.progress) els.progress.setAttribute("aria-valuenow", String(boundedProgress));
  if (els.progressBar) els.progressBar.style.width = `${boundedProgress}%`;
  if (els.progressText) els.progressText.textContent = stateName === "loading" ? `${boundedProgress}%` : "";
  if (els.hint) els.hint.textContent = hint;
}

function renderMetadata() {
  const item = currentCase();
  if (els.title) els.title.textContent = item.title;
  if (els.meta) els.meta.textContent = `${item.id} / ${item.objectCount} objects`;
  if (els.count) els.count.textContent = `${galleryCases.length} scenes`;
}

function renderThumbs() {
  if (!els.thumbs) return;
  els.thumbs.innerHTML = "";
  galleryCases.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "imaginarium-thumb";
    button.dataset.active = String(index === state.activeIndex);
    button.setAttribute("aria-pressed", String(index === state.activeIndex));
    button.setAttribute("aria-label", `Load ${item.title} scene`);
    button.innerHTML = `
      <span class="imaginarium-thumb-image">
        <img src="${item.thumbnail}" alt="" loading="lazy">
      </span>
      <span class="imaginarium-thumb-copy">
        <strong>${item.title}</strong>
        <em>${item.id}</em>
      </span>
    `;
    button.addEventListener("click", () => activateCase(index));
    els.thumbs.appendChild(button);
  });
}

async function ensureViewer() {
  if (state.viewer) return state.viewer;
  const Viewer = window.ProjectPageThreeViewer;
  if (!Viewer) {
    throw new Error("ProjectPageThreeViewer is not available");
  }
  state.viewer = new Viewer({
    container: els.model,
    overlay: els.overlay,
    statusElement: els.status,
    progressElement: els.progress,
    progressBar: els.progressBar,
    progressText: els.progressText,
    hintElement: els.hint
  });
  await state.viewer.init();
  return state.viewer;
}

async function loadActiveModel() {
  const item = currentCase();
  try {
    const viewer = await ensureViewer();
    viewer.enableAutoOrbit();
    viewer.load(item.model, item.title);
  } catch (error) {
    setOverlayState("error", "Unable to initialize 3D gallery", 0, "Please refresh the page or try the main demo viewer.");
    console.error("Unable to initialize Imaginarium gallery", error);
  }
}

function activateCase(index) {
  state.activeIndex = Math.max(0, Math.min(galleryCases.length - 1, Number(index) || 0));
  renderMetadata();
  renderThumbs();
  if (state.initialized) loadActiveModel();
}

function initGallery() {
  if (!els.root || !els.model || !galleryCases.length) return;
  renderMetadata();
  renderThumbs();
  setOverlayState("idle", "3D scene ready to load", 0, "Scroll here to load; auto orbit starts after loading.");

  const start = () => {
    if (state.initialized) return;
    state.initialized = true;
    loadActiveModel();
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      start();
    }, { rootMargin: "220px 0px" });
    observer.observe(els.root);
  } else {
    start();
  }
}

initGallery();
