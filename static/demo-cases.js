window.MUSE_DEMO_CASES = [
  {
    id: "02_livingroom_media_add_bookshelf",
    title: "Living Room Media Wall",
    roomType: "Living room",
    editType: "Add object",
    accent: "Bookshelf insertion",
    quality: "bbox-clear",
    finalGlb: "static/demo/02_livingroom_media_add_bookshelf/final_scene.glb",
    stageGlbs: [
      "static/demo/02_livingroom_media_add_bookshelf/stage1.glb",
      "static/demo/02_livingroom_media_add_bookshelf/stage2.glb",
      "static/demo/02_livingroom_media_add_bookshelf/stage3.glb"
    ],
    stages: [
      {
        label: "Create",
        title: "Base media area",
        prompt: "Create a simple modern living room with one sofa, one coffee table, and one TV stand. Keep the circulation clear.",
        preserve: [],
        expected: ["sofa", "coffee table", "tv"],
        absent: [],
        images: {
          merged: "static/demo/02_livingroom_media_add_bookshelf/stage1-merged.png",
          diag: "static/demo/02_livingroom_media_add_bookshelf/stage1-diag.png",
          top: "static/demo/02_livingroom_media_add_bookshelf/stage1-top.png"
        }
      },
      {
        label: "Edit 1",
        title: "Add lamp and plant",
        prompt: "Starting from the current living room scene, keep the sofa, coffee table, and TV stand. Add one floor lamp and one potted plant.",
        preserve: ["sofa", "coffee table", "tv"],
        expected: ["sofa", "coffee table", "tv", "floor lamp", "plant"],
        absent: [],
        images: {
          merged: "static/demo/02_livingroom_media_add_bookshelf/stage2-merged.png",
          diag: "static/demo/02_livingroom_media_add_bookshelf/stage2-diag.png",
          top: "static/demo/02_livingroom_media_add_bookshelf/stage2-top.png"
        }
      },
      {
        label: "Edit 2",
        title: "Add bookshelf",
        prompt: "Starting from the current living room scene, keep the sofa, coffee table, TV stand, floor lamp, and plant. Add one bookshelf near the TV stand.",
        preserve: ["sofa", "coffee table", "tv", "floor lamp", "plant"],
        expected: ["sofa", "coffee table", "tv", "floor lamp", "plant", "bookshelf"],
        absent: [],
        images: {
          merged: "static/demo/02_livingroom_media_add_bookshelf/stage3-merged.png",
          diag: "static/demo/02_livingroom_media_add_bookshelf/stage3-diag.png",
          top: "static/demo/02_livingroom_media_add_bookshelf/stage3-top.png"
        }
      }
    ]
  },
  {
    id: "08_study_corner_delete_side_table",
    title: "Study Reading Corner",
    roomType: "Study room",
    editType: "Delete object",
    accent: "Side table removal",
    quality: "bbox-clear",
    finalGlb: "static/demo/08_study_corner_delete_side_table/final_scene.glb",
    stageGlbs: [
      "static/demo/08_study_corner_delete_side_table/stage1.glb",
      "static/demo/08_study_corner_delete_side_table/stage2.glb",
      "static/demo/08_study_corner_delete_side_table/stage3.glb"
    ],
    stages: [
      {
        label: "Create",
        title: "Base study",
        prompt: "Design a simple study room with one desk, one office chair, and one bookshelf.",
        preserve: [],
        expected: ["desk", "office chair", "bookshelf"],
        absent: [],
        images: {
          merged: "static/demo/08_study_corner_delete_side_table/stage1-merged.png",
          diag: "static/demo/08_study_corner_delete_side_table/stage1-diag.png",
          top: "static/demo/08_study_corner_delete_side_table/stage1-top.png"
        }
      },
      {
        label: "Edit 1",
        title: "Add armchair and side table",
        prompt: "Starting from the current study room scene, keep the desk, office chair, and bookshelf. Add one armchair and one small round side table.",
        preserve: ["desk", "office chair", "bookshelf"],
        expected: ["desk", "office chair", "bookshelf", "armchair", "side table"],
        absent: [],
        images: {
          merged: "static/demo/08_study_corner_delete_side_table/stage2-merged.png",
          diag: "static/demo/08_study_corner_delete_side_table/stage2-diag.png",
          top: "static/demo/08_study_corner_delete_side_table/stage2-top.png"
        }
      },
      {
        label: "Edit 2",
        title: "Remove side table",
        prompt: "Starting from the current study room scene, keep the desk, office chair, bookshelf, and armchair. Remove the small round side table so no side table remains in the room.",
        preserve: ["desk", "office chair", "bookshelf", "armchair"],
        expected: ["desk", "office chair", "bookshelf", "armchair"],
        absent: ["side table"],
        images: {
          merged: "static/demo/08_study_corner_delete_side_table/stage3-merged.png",
          diag: "static/demo/08_study_corner_delete_side_table/stage3-diag.png",
          top: "static/demo/08_study_corner_delete_side_table/stage3-top.png"
        }
      }
    ]
  },
  {
    id: "12_bedroom_replace_bench_with_bookshelf",
    title: "Bedroom Storage Revision",
    roomType: "Bedroom",
    editType: "Replace object",
    accent: "Bench to bookshelf",
    quality: "bbox-clear",
    finalGlb: "static/demo/12_bedroom_replace_bench_with_bookshelf/final_scene.glb",
    stageGlbs: [
      "static/demo/12_bedroom_replace_bench_with_bookshelf/stage1.glb",
      "static/demo/12_bedroom_replace_bench_with_bookshelf/stage2.glb",
      "static/demo/12_bedroom_replace_bench_with_bookshelf/stage3.glb"
    ],
    stages: [
      {
        label: "Create",
        title: "Base bedroom",
        prompt: "Create a simple bedroom with one double bed, one nightstand, and one dresser.",
        preserve: [],
        expected: ["bed", "nightstand", "dresser"],
        absent: [],
        images: {
          merged: "static/demo/12_bedroom_replace_bench_with_bookshelf/stage1-merged.png",
          diag: "static/demo/12_bedroom_replace_bench_with_bookshelf/stage1-diag.png",
          top: "static/demo/12_bedroom_replace_bench_with_bookshelf/stage1-top.png"
        }
      },
      {
        label: "Edit 1",
        title: "Add bench and mirror",
        prompt: "Starting from the current bedroom scene, keep the bed, nightstand, and dresser. Add one low upholstered bench and one standing mirror.",
        preserve: ["bed", "nightstand", "dresser"],
        expected: ["bed", "nightstand", "dresser", "bench", "mirror"],
        absent: [],
        images: {
          merged: "static/demo/12_bedroom_replace_bench_with_bookshelf/stage2-merged.png",
          diag: "static/demo/12_bedroom_replace_bench_with_bookshelf/stage2-diag.png",
          top: "static/demo/12_bedroom_replace_bench_with_bookshelf/stage2-top.png"
        }
      },
      {
        label: "Edit 2",
        title: "Replace bench with bookshelf",
        prompt: "Starting from the current bedroom scene, keep the bed, nightstand, dresser, and standing mirror. Replace the low upholstered bench with one tall narrow bookshelf about 1.8 meters high.",
        preserve: ["bed", "nightstand", "dresser", "mirror"],
        expected: ["bed", "nightstand", "dresser", "mirror", "bookshelf"],
        absent: ["bench"],
        images: {
          merged: "static/demo/12_bedroom_replace_bench_with_bookshelf/stage3-merged.png",
          diag: "static/demo/12_bedroom_replace_bench_with_bookshelf/stage3-diag.png",
          top: "static/demo/12_bedroom_replace_bench_with_bookshelf/stage3-top.png"
        }
      }
    ]
  },
  {
    id: "16_livingroom_scale_rug",
    title: "Living Room Rug Scale",
    roomType: "Living room",
    editType: "Scale object",
    accent: "Rug enlargement",
    quality: "bbox-clear",
    finalGlb: "static/demo/16_livingroom_scale_rug/final_scene.glb",
    stageGlbs: [
      "static/demo/16_livingroom_scale_rug/stage1.glb",
      "static/demo/16_livingroom_scale_rug/stage2.glb",
      "static/demo/16_livingroom_scale_rug/stage3.glb"
    ],
    stages: [
      {
        label: "Create",
        title: "Base seating area",
        prompt: "Create a simple living room with one sofa, one coffee table, and one TV stand.",
        preserve: [],
        expected: ["sofa", "coffee table", "tv"],
        absent: [],
        images: {
          merged: "static/demo/16_livingroom_scale_rug/stage1-merged.png",
          diag: "static/demo/16_livingroom_scale_rug/stage1-diag.png",
          top: "static/demo/16_livingroom_scale_rug/stage1-top.png"
        }
      },
      {
        label: "Edit 1",
        title: "Add rug and plant",
        prompt: "Starting from the current living room scene, keep the sofa, coffee table, and TV stand. Add one area rug and one potted plant.",
        preserve: ["sofa", "coffee table", "tv"],
        expected: ["sofa", "coffee table", "tv", "rug", "plant"],
        absent: [],
        images: {
          merged: "static/demo/16_livingroom_scale_rug/stage2-merged.png",
          diag: "static/demo/16_livingroom_scale_rug/stage2-diag.png",
          top: "static/demo/16_livingroom_scale_rug/stage2-top.png"
        }
      },
      {
        label: "Edit 2",
        title: "Enlarge rug",
        prompt: "Starting from the current living room scene, keep sofa, coffee table, TV stand, and plant. Make the rug about thirty percent larger overall.",
        preserve: ["sofa", "coffee table", "tv", "plant"],
        expected: ["sofa", "coffee table", "tv", "rug", "plant"],
        absent: [],
        images: {
          merged: "static/demo/16_livingroom_scale_rug/stage3-merged.png",
          diag: "static/demo/16_livingroom_scale_rug/stage3-diag.png",
          top: "static/demo/16_livingroom_scale_rug/stage3-top.png"
        }
      }
    ]
  },
  {
    id: "23_study_move_storage_cabinet",
    title: "Study Cabinet Reposition",
    roomType: "Study room",
    editType: "Move object",
    accent: "Cabinet relocation",
    quality: "bbox-clear",
    finalGlb: "static/demo/23_study_move_storage_cabinet/final_scene.glb",
    stageGlbs: [
      "static/demo/23_study_move_storage_cabinet/stage1.glb",
      "static/demo/23_study_move_storage_cabinet/stage2.glb",
      "static/demo/23_study_move_storage_cabinet/stage3.glb"
    ],
    stages: [
      {
        label: "Create",
        title: "Base study",
        prompt: "Design a functional study room with one desk, one office chair, and one bookshelf.",
        preserve: [],
        expected: ["desk", "office chair", "bookshelf"],
        absent: [],
        images: {
          merged: "static/demo/23_study_move_storage_cabinet/stage1-merged.png",
          diag: "static/demo/23_study_move_storage_cabinet/stage1-diag.png",
          top: "static/demo/23_study_move_storage_cabinet/stage1-top.png"
        }
      },
      {
        label: "Edit 1",
        title: "Add cabinet and plant",
        prompt: "Starting from the current study room scene, keep the desk, office chair, and bookshelf. Add one storage cabinet and one potted plant.",
        preserve: ["desk", "office chair", "bookshelf"],
        expected: ["desk", "office chair", "bookshelf", "storage cabinet", "plant"],
        absent: [],
        images: {
          merged: "static/demo/23_study_move_storage_cabinet/stage2-merged.png",
          diag: "static/demo/23_study_move_storage_cabinet/stage2-diag.png",
          top: "static/demo/23_study_move_storage_cabinet/stage2-top.png"
        }
      },
      {
        label: "Edit 2",
        title: "Move cabinet right of desk",
        prompt: "Starting from the current study room scene, keep desk, office chair, bookshelf, and plant. Move the storage cabinet to the right of the desk.",
        preserve: ["desk", "office chair", "bookshelf", "plant"],
        expected: ["desk", "office chair", "bookshelf", "storage cabinet", "plant"],
        absent: [],
        images: {
          merged: "static/demo/23_study_move_storage_cabinet/stage3-merged.png",
          diag: "static/demo/23_study_move_storage_cabinet/stage3-diag.png",
          top: "static/demo/23_study_move_storage_cabinet/stage3-top.png"
        }
      }
    ]
  },
  {
    id: "26_livingroom_rotate_armchair",
    title: "Living Room Armchair Turn",
    roomType: "Living room",
    editType: "Rotate object",
    accent: "Chair facing update",
    quality: "bbox-clear",
    finalGlb: "static/demo/26_livingroom_rotate_armchair/final_scene.glb",
    stageGlbs: [
      "static/demo/26_livingroom_rotate_armchair/stage1.glb",
      "static/demo/26_livingroom_rotate_armchair/stage2.glb",
      "static/demo/26_livingroom_rotate_armchair/stage3.glb"
    ],
    stages: [
      {
        label: "Create",
        title: "Base living room",
        prompt: "Create a modern living room with one sofa, one coffee table, and one TV stand.",
        preserve: [],
        expected: ["sofa", "coffee table", "tv"],
        absent: [],
        images: {
          merged: "static/demo/26_livingroom_rotate_armchair/stage1-merged.png",
          diag: "static/demo/26_livingroom_rotate_armchair/stage1-diag.png",
          top: "static/demo/26_livingroom_rotate_armchair/stage1-top.png"
        }
      },
      {
        label: "Edit 1",
        title: "Add armchair and floor lamp",
        prompt: "Starting from the current living room scene, keep the sofa, coffee table, and TV stand. Add one armchair and one floor lamp.",
        preserve: ["sofa", "coffee table", "tv"],
        expected: ["sofa", "coffee table", "tv", "armchair", "floor lamp"],
        absent: [],
        images: {
          merged: "static/demo/26_livingroom_rotate_armchair/stage2-merged.png",
          diag: "static/demo/26_livingroom_rotate_armchair/stage2-diag.png",
          top: "static/demo/26_livingroom_rotate_armchair/stage2-top.png"
        }
      },
      {
        label: "Edit 2",
        title: "Rotate armchair toward sofa",
        prompt: "Starting from the current living room scene, keep sofa, coffee table, TV stand, and floor lamp. Rotate the armchair to face the sofa.",
        preserve: ["sofa", "coffee table", "tv", "floor lamp"],
        expected: ["sofa", "coffee table", "tv", "armchair", "floor lamp"],
        absent: [],
        images: {
          merged: "static/demo/26_livingroom_rotate_armchair/stage3-merged.png",
          diag: "static/demo/26_livingroom_rotate_armchair/stage3-diag.png",
          top: "static/demo/26_livingroom_rotate_armchair/stage3-top.png"
        }
      }
    ]
  },
  {
    id: "35_livingroom_reading_add_side_table",
    title: "Living Room Reading Nook",
    roomType: "Living room",
    editType: "Add object",
    accent: "Side table insertion",
    quality: "bbox-clear",
    finalGlb: "static/demo/35_livingroom_reading_add_side_table/final_scene.glb",
    stageGlbs: [
      "static/demo/35_livingroom_reading_add_side_table/stage1.glb",
      "static/demo/35_livingroom_reading_add_side_table/stage2.glb",
      "static/demo/35_livingroom_reading_add_side_table/stage3.glb"
    ],
    stages: [
      {
        label: "Create",
        title: "Base living room",
        prompt: "Create a tidy living room with one sofa, one coffee table, and one TV stand. Keep the circulation open.",
        preserve: [],
        expected: ["sofa", "coffee table", "tv stand"],
        absent: [],
        images: {
          merged: "static/demo/35_livingroom_reading_add_side_table/stage1-merged.png",
          diag: "static/demo/35_livingroom_reading_add_side_table/stage1-diag.png",
          top: "static/demo/35_livingroom_reading_add_side_table/stage1-top.png"
        }
      },
      {
        label: "Edit 1",
        title: "Add chair and lamp",
        prompt: "Starting from the current living room scene, keep sofa, coffee table, and tv stand. Add one accent chair and one floor lamp.",
        preserve: ["sofa", "coffee table", "tv stand"],
        expected: ["sofa", "coffee table", "tv stand", "accent chair", "floor lamp"],
        absent: [],
        images: {
          merged: "static/demo/35_livingroom_reading_add_side_table/stage2-merged.png",
          diag: "static/demo/35_livingroom_reading_add_side_table/stage2-diag.png",
          top: "static/demo/35_livingroom_reading_add_side_table/stage2-top.png"
        }
      },
      {
        label: "Edit 2",
        title: "Add side table",
        prompt: "Starting from the current living room scene, keep sofa, coffee table, tv stand, accent chair, and floor lamp. Add one side table near the accent chair.",
        preserve: ["sofa", "coffee table", "tv stand", "accent chair", "floor lamp"],
        expected: ["sofa", "coffee table", "tv stand", "accent chair", "floor lamp", "side table"],
        absent: [],
        images: {
          merged: "static/demo/35_livingroom_reading_add_side_table/stage3-merged.png",
          diag: "static/demo/35_livingroom_reading_add_side_table/stage3-diag.png",
          top: "static/demo/35_livingroom_reading_add_side_table/stage3-top.png"
        }
      }
    ]
  },
  {
    id: "45_study_storage_add_desk_lamp",
    title: "Study Desk Lamp",
    roomType: "Study room",
    editType: "Add object",
    accent: "On-desk insertion",
    quality: "bbox-clear",
    finalGlb: "static/demo/45_study_storage_add_desk_lamp/final_scene.glb",
    stageGlbs: [
      "static/demo/45_study_storage_add_desk_lamp/stage1.glb",
      "static/demo/45_study_storage_add_desk_lamp/stage2.glb",
      "static/demo/45_study_storage_add_desk_lamp/stage3.glb"
    ],
    stages: [
      {
        label: "Create",
        title: "Base tidy study",
        prompt: "Create a clean study room with one desk, one office chair, and one bookshelf. Keep the room functional and tidy.",
        preserve: [],
        expected: ["desk", "office chair", "bookshelf"],
        absent: [],
        images: {
          merged: "static/demo/45_study_storage_add_desk_lamp/stage1-merged.png",
          diag: "static/demo/45_study_storage_add_desk_lamp/stage1-diag.png",
          top: "static/demo/45_study_storage_add_desk_lamp/stage1-top.png"
        }
      },
      {
        label: "Edit 1",
        title: "Add cabinet and plant",
        prompt: "Starting from the current study room scene, keep desk, office chair, and bookshelf. Add one storage cabinet and one potted plant.",
        preserve: ["desk", "office chair", "bookshelf"],
        expected: ["desk", "office chair", "bookshelf", "storage cabinet", "plant"],
        absent: [],
        images: {
          merged: "static/demo/45_study_storage_add_desk_lamp/stage2-merged.png",
          diag: "static/demo/45_study_storage_add_desk_lamp/stage2-diag.png",
          top: "static/demo/45_study_storage_add_desk_lamp/stage2-top.png"
        }
      },
      {
        label: "Edit 2",
        title: "Add desk lamp",
        prompt: "Starting from the current study room scene, keep desk, office chair, bookshelf, storage cabinet, and plant. Add one desk lamp on the desk.",
        preserve: ["desk", "office chair", "bookshelf", "storage cabinet", "plant"],
        expected: ["desk", "office chair", "bookshelf", "storage cabinet", "plant", "desk lamp"],
        absent: [],
        images: {
          merged: "static/demo/45_study_storage_add_desk_lamp/stage3-merged.png",
          diag: "static/demo/45_study_storage_add_desk_lamp/stage3-diag.png",
          top: "static/demo/45_study_storage_add_desk_lamp/stage3-top.png"
        }
      }
    ]
  }
];
