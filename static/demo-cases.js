window.MUSE_DEMO_CASES = [
  {
    "id": "02_livingroom_media_add_bookshelf",
    "title": "Living Room Media Wall",
    "roomType": "Living room",
    "editType": "Add object",
    "accent": "Bookshelf insertion",
    "stageGlbs": [
      "static/demo/02_livingroom_media_add_bookshelf/stage1.glb",
      "static/demo/02_livingroom_media_add_bookshelf/stage2.glb",
      "static/demo/02_livingroom_media_add_bookshelf/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base media area",
        "prompt": "Create a simple modern living room with one sofa, one coffee table, and one TV stand. Keep the circulation clear.",
        "preserve": [],
        "expected": [
          "sofa",
          "coffee table",
          "tv"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/02_livingroom_media_add_bookshelf/stage1-diag.png",
          "top": "static/demo/02_livingroom_media_add_bookshelf/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "9506fdca-4311-4cd4-aff2-2ae7f32235c1",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.4,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "c628c0ee-a5ae-4706-8802-90368fb49d3f",
            "pos": [
              1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.4,
              0.6
            ]
          },
          "object-3": {
            "jid": "e29480dc-51b0-4548-965b-705c70ce9c66",
            "pos": [
              1.4,
              0,
              1.6
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.6,
              0.6,
              0.4
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add lamp and plant",
        "prompt": "Starting from the current living room scene, keep the sofa, coffee table, and TV stand. Add one floor lamp and one potted plant.",
        "preserve": [
          "sofa",
          "coffee table",
          "tv"
        ],
        "expected": [
          "sofa",
          "coffee table",
          "tv",
          "floor lamp",
          "plant"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/02_livingroom_media_add_bookshelf/stage2-diag.png",
          "top": "static/demo/02_livingroom_media_add_bookshelf/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "9506fdca-4311-4cd4-aff2-2ae7f32235c1",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.4,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "c628c0ee-a5ae-4706-8802-90368fb49d3f",
            "pos": [
              1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.4,
              0.6
            ]
          },
          "object-3": {
            "jid": "e29480dc-51b0-4548-965b-705c70ce9c66",
            "pos": [
              1.4,
              0,
              1.6
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.6,
              0.6,
              0.4
            ]
          },
          "object-4": {
            "jid": "8592ea44-60a0-426b-822e-efe2f1d776aa",
            "pos": [
              -2,
              0,
              -1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          },
          "object-5": {
            "jid": "f740f2a4-bd12-469e-811a-ccf11cf95999",
            "pos": [
              -2.6,
              0,
              1.6
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Add bookshelf",
        "prompt": "Starting from the current living room scene, keep the sofa, coffee table, TV stand, floor lamp, and plant. Add one bookshelf near the TV stand.",
        "preserve": [
          "sofa",
          "coffee table",
          "tv",
          "floor lamp",
          "plant"
        ],
        "expected": [
          "sofa",
          "coffee table",
          "tv",
          "floor lamp",
          "plant",
          "bookshelf"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/02_livingroom_media_add_bookshelf/stage3-diag.png",
          "top": "static/demo/02_livingroom_media_add_bookshelf/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "9506fdca-4311-4cd4-aff2-2ae7f32235c1",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.4,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "c628c0ee-a5ae-4706-8802-90368fb49d3f",
            "pos": [
              1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.4,
              0.6
            ]
          },
          "object-3": {
            "jid": "e29480dc-51b0-4548-965b-705c70ce9c66",
            "pos": [
              1.4,
              0,
              1.6
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.6,
              0.6,
              0.4
            ]
          },
          "object-4": {
            "jid": "8592ea44-60a0-426b-822e-efe2f1d776aa",
            "pos": [
              -2,
              0,
              -1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          },
          "object-5": {
            "jid": "f740f2a4-bd12-469e-811a-ccf11cf95999",
            "pos": [
              -2.6,
              0,
              1.6
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          },
          "object-6": {
            "jid": "c97bf2e1-1fa0-4267-9795-b53b19655601",
            "pos": [
              2.8,
              0,
              1.6
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              1.8,
              0.3
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "08_study_corner_delete_side_table",
    "title": "Study Reading Corner",
    "roomType": "Study room",
    "editType": "Delete object",
    "accent": "Side table removal",
    "stageGlbs": [
      "static/demo/08_study_corner_delete_side_table/stage1.glb",
      "static/demo/08_study_corner_delete_side_table/stage2.glb",
      "static/demo/08_study_corner_delete_side_table/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base study",
        "prompt": "Design a simple study room with one desk, one office chair, and one bookshelf.",
        "preserve": [],
        "expected": [
          "desk",
          "office chair",
          "bookshelf"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/08_study_corner_delete_side_table/stage1-diag.png",
          "top": "static/demo/08_study_corner_delete_side_table/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "cb8ef374-1462-4eb5-ae5e-689da0abec7d",
            "pos": [
              0,
              0,
              0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              -0.9,
              0,
              0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c5615588-3f6c-4941-bed9-3adaef8827fb",
            "pos": [
              2.4,
              0,
              -1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.9,
              1.8,
              0.25
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add armchair and side table",
        "prompt": "Starting from the current study room scene, keep the desk, office chair, and bookshelf. Add one armchair and one small side table.",
        "preserve": [
          "desk",
          "office chair",
          "bookshelf"
        ],
        "expected": [
          "desk",
          "office chair",
          "bookshelf",
          "armchair",
          "side table"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/08_study_corner_delete_side_table/stage2-diag.png",
          "top": "static/demo/08_study_corner_delete_side_table/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "cb8ef374-1462-4eb5-ae5e-689da0abec7d",
            "pos": [
              0,
              0,
              0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              -0.9,
              0,
              0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c5615588-3f6c-4941-bed9-3adaef8827fb",
            "pos": [
              2.4,
              0,
              -1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.9,
              1.8,
              0.25
            ]
          },
          "object-5": {
            "jid": "f19829e2-601b-4118-a179-4e65ccca8279",
            "pos": [
              -1.7,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              0.9,
              0.8
            ]
          },
          "object-6": {
            "jid": "0c7c35ff-8fda-44f7-9e5a-cf75ed3e50fa",
            "pos": [
              -0.75,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              0.45,
              0.45
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Remove side table",
        "prompt": "Starting from the current study room scene, keep the desk, office chair, bookshelf, and armchair. Remove the small side table so no side table remains in the room.",
        "preserve": [
          "desk",
          "office chair",
          "bookshelf",
          "armchair"
        ],
        "expected": [
          "desk",
          "office chair",
          "bookshelf",
          "armchair"
        ],
        "absent": [
          "side table"
        ],
        "images": {
          "diag": "static/demo/08_study_corner_delete_side_table/stage3-diag.png",
          "top": "static/demo/08_study_corner_delete_side_table/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "cb8ef374-1462-4eb5-ae5e-689da0abec7d",
            "pos": [
              0,
              0,
              0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              -0.9,
              0,
              0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c5615588-3f6c-4941-bed9-3adaef8827fb",
            "pos": [
              2.4,
              0,
              -1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.9,
              1.8,
              0.25
            ]
          },
          "object-5": {
            "jid": "f19829e2-601b-4118-a179-4e65ccca8279",
            "pos": [
              -1.7,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              0.9,
              0.8
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "12_bedroom_replace_bench_with_bookshelf",
    "title": "Bedroom Storage Revision",
    "roomType": "Bedroom",
    "editType": "Replace object",
    "accent": "Bench to bookshelf",
    "stageGlbs": [
      "static/demo/12_bedroom_replace_bench_with_bookshelf/stage1.glb",
      "static/demo/12_bedroom_replace_bench_with_bookshelf/stage2.glb",
      "static/demo/12_bedroom_replace_bench_with_bookshelf/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base bedroom",
        "prompt": "Create a simple bedroom with one double bed, one nightstand, and one dresser.",
        "preserve": [],
        "expected": [
          "bed",
          "nightstand",
          "dresser"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/12_bedroom_replace_bench_with_bookshelf/stage1-diag.png",
          "top": "static/demo/12_bedroom_replace_bench_with_bookshelf/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "f1fb6ca6-98b3-4e96-9387-51f0f98c1dcc",
            "pos": [
              0.0,
              0.0,
              -0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.8,
              0.45,
              2.0
            ]
          },
          "object-2": {
            "jid": "d99b51e1-c0a3-471c-b754-469efdfebb01",
            "pos": [
              2.0,
              0.0,
              -0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.5,
              0.7,
              0.4
            ]
          },
          "object-3": {
            "jid": "4e904746-cb1c-422b-b150-72732c1481ed",
            "pos": [
              -2.0,
              0.0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              1.2,
              0.5
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add bench and mirror",
        "prompt": "Starting from the current bedroom scene, keep the bed, nightstand, and dresser. Add one low upholstered bench and one standing mirror.",
        "preserve": [
          "bed",
          "nightstand",
          "dresser"
        ],
        "expected": [
          "bed",
          "nightstand",
          "dresser",
          "bench",
          "mirror"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/12_bedroom_replace_bench_with_bookshelf/stage2-diag.png",
          "top": "static/demo/12_bedroom_replace_bench_with_bookshelf/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "f1fb6ca6-98b3-4e96-9387-51f0f98c1dcc",
            "pos": [
              0.0,
              0.0,
              -0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.8,
              0.45,
              2.0
            ]
          },
          "object-2": {
            "jid": "d99b51e1-c0a3-471c-b754-469efdfebb01",
            "pos": [
              2.0,
              0.0,
              -0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.5,
              0.7,
              0.4
            ]
          },
          "object-3": {
            "jid": "4e904746-cb1c-422b-b150-72732c1481ed",
            "pos": [
              -2.0,
              0.0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              1.2,
              0.5
            ]
          },
          "object-4": {
            "jid": "4deb8513-ee9c-4bf3-a20c-c32d21cd2ea1",
            "pos": [
              0,
              0,
              1.35
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.4,
              0.4
            ]
          },
          "object-5": {
            "jid": "e6130c8c-1d6b-464d-9a8b-690d4039f224",
            "pos": [
              2.3,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.5,
              1.7,
              0.1
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Replace bench with bookshelf",
        "prompt": "Starting from the current bedroom scene, keep the bed, nightstand, dresser, and standing mirror. Replace the low upholstered bench with one tall narrow bookshelf about 1.8 meters high.",
        "preserve": [
          "bed",
          "nightstand",
          "dresser",
          "mirror"
        ],
        "expected": [
          "bed",
          "nightstand",
          "dresser",
          "mirror",
          "bookshelf"
        ],
        "absent": [
          "bench"
        ],
        "images": {
          "diag": "static/demo/12_bedroom_replace_bench_with_bookshelf/stage3-diag.png",
          "top": "static/demo/12_bedroom_replace_bench_with_bookshelf/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "f1fb6ca6-98b3-4e96-9387-51f0f98c1dcc",
            "pos": [
              0.0,
              0.0,
              -0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.8,
              0.45,
              2.0
            ]
          },
          "object-2": {
            "jid": "d99b51e1-c0a3-471c-b754-469efdfebb01",
            "pos": [
              2.0,
              0.0,
              -0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.5,
              0.7,
              0.4
            ]
          },
          "object-3": {
            "jid": "4e904746-cb1c-422b-b150-72732c1481ed",
            "pos": [
              -2.0,
              0.0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              1.2,
              0.5
            ]
          },
          "object-4": {
            "jid": "c97bf2e1-1fa0-4267-9795-b53b19655601",
            "pos": [
              0,
              0,
              1.35
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.65,
              1.8,
              0.3
            ]
          },
          "object-5": {
            "jid": "e6130c8c-1d6b-464d-9a8b-690d4039f224",
            "pos": [
              2.3,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.5,
              1.7,
              0.1
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "16_livingroom_scale_rug",
    "title": "Living Room Rug Scale",
    "roomType": "Living room",
    "editType": "Scale object",
    "accent": "Rug enlargement",
    "stageGlbs": [
      "static/demo/16_livingroom_scale_rug/stage1.glb",
      "static/demo/16_livingroom_scale_rug/stage2.glb",
      "static/demo/16_livingroom_scale_rug/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base seating area",
        "prompt": "Create a simple living room with one sofa, one coffee table, and one TV stand.",
        "preserve": [],
        "expected": [
          "sofa",
          "coffee table",
          "tv"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/16_livingroom_scale_rug/stage1-diag.png",
          "top": "static/demo/16_livingroom_scale_rug/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "bcbf90f5-7616-433f-8aff-741080850852",
            "pos": [
              -1.0,
              0.0,
              1.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.0,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "b7d1f388-5f43-462e-b4ad-8bf6489e368f",
            "pos": [
              0.2,
              0,
              0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.4,
              0.7
            ]
          },
          "object-3": {
            "jid": "dd5f5e5a-c20c-4214-b16d-749940738759",
            "pos": [
              1.5,
              0.0,
              -1.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.5,
              0.5,
              0.4
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add rug and plant",
        "prompt": "Starting from the current living room scene, keep the sofa, coffee table, and TV stand. Add one area rug and one potted plant.",
        "preserve": [
          "sofa",
          "coffee table",
          "tv"
        ],
        "expected": [
          "sofa",
          "coffee table",
          "tv",
          "rug",
          "plant"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/16_livingroom_scale_rug/stage2-diag.png",
          "top": "static/demo/16_livingroom_scale_rug/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "bcbf90f5-7616-433f-8aff-741080850852",
            "pos": [
              -1.0,
              0.0,
              1.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.0,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "b7d1f388-5f43-462e-b4ad-8bf6489e368f",
            "pos": [
              0.2,
              0,
              0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.4,
              0.7
            ]
          },
          "object-3": {
            "jid": "dd5f5e5a-c20c-4214-b16d-749940738759",
            "pos": [
              1.5,
              0.0,
              -1.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.5,
              0.5,
              0.4
            ]
          },
          "object-4": {
            "jid": "749e447b-24fa-43a3-8a9d-c6b808c98b2d",
            "pos": [
              0,
              0,
              -1.3
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              2.0,
              0.05,
              2.0
            ]
          },
          "object-5": {
            "jid": "0e8b3cca-fa9d-456e-9737-1a919ec1f976",
            "pos": [
              -2.25,
              0,
              -1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Enlarge rug",
        "prompt": "Starting from the current living room scene, keep sofa, coffee table, TV stand, and plant. Make the rug about thirty percent larger overall.",
        "preserve": [
          "sofa",
          "coffee table",
          "tv",
          "plant"
        ],
        "expected": [
          "sofa",
          "coffee table",
          "tv",
          "rug",
          "plant"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/16_livingroom_scale_rug/stage3-diag.png",
          "top": "static/demo/16_livingroom_scale_rug/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "bcbf90f5-7616-433f-8aff-741080850852",
            "pos": [
              -1.0,
              0.0,
              1.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.0,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "b7d1f388-5f43-462e-b4ad-8bf6489e368f",
            "pos": [
              0.2,
              0,
              0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.4,
              0.7
            ]
          },
          "object-3": {
            "jid": "dd5f5e5a-c20c-4214-b16d-749940738759",
            "pos": [
              1.5,
              0.0,
              -1.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.5,
              0.5,
              0.4
            ]
          },
          "object-4": {
            "jid": "749e447b-24fa-43a3-8a9d-c6b808c98b2d",
            "pos": [
              0,
              0,
              -1.3
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              2.6,
              0.065,
              2.6
            ]
          },
          "object-5": {
            "jid": "0e8b3cca-fa9d-456e-9737-1a919ec1f976",
            "pos": [
              -2.25,
              0,
              -1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "23_study_move_storage_cabinet",
    "title": "Study Cabinet Reposition",
    "roomType": "Study room",
    "editType": "Move object",
    "accent": "Cabinet relocation",
    "stageGlbs": [
      "static/demo/23_study_move_storage_cabinet/stage1.glb",
      "static/demo/23_study_move_storage_cabinet/stage2.glb",
      "static/demo/23_study_move_storage_cabinet/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base study",
        "prompt": "Design a functional study room with one desk, one office chair, and one bookshelf.",
        "preserve": [],
        "expected": [
          "desk",
          "office chair",
          "bookshelf"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/23_study_move_storage_cabinet/stage1-diag.png",
          "top": "static/demo/23_study_move_storage_cabinet/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "cb8ef374-1462-4eb5-ae5e-689da0abec7d",
            "pos": [
              1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              1,
              0,
              0.9
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c06e4978-df84-49de-aaa5-407d24d37090",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              0.8,
              1.8,
              0.25
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add cabinet and plant",
        "prompt": "Starting from the current study room scene, keep the desk, office chair, and bookshelf. Add one storage cabinet and one potted plant.",
        "preserve": [
          "desk",
          "office chair",
          "bookshelf"
        ],
        "expected": [
          "desk",
          "office chair",
          "bookshelf",
          "storage cabinet",
          "plant"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/23_study_move_storage_cabinet/stage2-diag.png",
          "top": "static/demo/23_study_move_storage_cabinet/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "cb8ef374-1462-4eb5-ae5e-689da0abec7d",
            "pos": [
              1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              1,
              0,
              0.9
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c06e4978-df84-49de-aaa5-407d24d37090",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              0.8,
              1.8,
              0.25
            ]
          },
          "object-4": {
            "jid": "f8f99068-b1a1-42b0-bf7b-468ae3b7cfaf",
            "pos": [
              0,
              0,
              -1.65
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.0,
              1.5,
              0.4
            ]
          },
          "object-5": {
            "jid": "9900d16d-bc24-44eb-acb4-48f816e7c9ae",
            "pos": [
              -2,
              0,
              1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Move cabinet right of desk",
        "prompt": "Starting from the current study room scene, keep desk, office chair, bookshelf, and plant. Move the storage cabinet to the right of the desk.",
        "preserve": [
          "desk",
          "office chair",
          "bookshelf",
          "plant"
        ],
        "expected": [
          "desk",
          "office chair",
          "bookshelf",
          "storage cabinet",
          "plant"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/23_study_move_storage_cabinet/stage3-diag.png",
          "top": "static/demo/23_study_move_storage_cabinet/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "cb8ef374-1462-4eb5-ae5e-689da0abec7d",
            "pos": [
              1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              1,
              0,
              0.9
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c06e4978-df84-49de-aaa5-407d24d37090",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              0.8,
              1.8,
              0.25
            ]
          },
          "object-4": {
            "jid": "f8f99068-b1a1-42b0-bf7b-468ae3b7cfaf",
            "pos": [
              2.15,
              0,
              0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.0,
              1.5,
              0.4
            ]
          },
          "object-5": {
            "jid": "9900d16d-bc24-44eb-acb4-48f816e7c9ae",
            "pos": [
              -2,
              0,
              1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "26_livingroom_rotate_armchair",
    "title": "Living Room Armchair Turn",
    "roomType": "Living room",
    "editType": "Rotate object",
    "accent": "Chair facing update",
    "stageGlbs": [
      "static/demo/26_livingroom_rotate_armchair/stage1.glb",
      "static/demo/26_livingroom_rotate_armchair/stage2.glb",
      "static/demo/26_livingroom_rotate_armchair/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base living room",
        "prompt": "Create a modern living room with one sofa, one coffee table, and one TV stand.",
        "preserve": [],
        "expected": [
          "sofa",
          "coffee table",
          "tv"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/26_livingroom_rotate_armchair/stage1-diag.png",
          "top": "static/demo/26_livingroom_rotate_armchair/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "f08a44ff-5840-4d58-ae07-f21e80e1194c",
            "pos": [
              -1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.5,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "5c6a1cd0-5f6b-42b3-96ef-fc1e4ef7d067",
            "pos": [
              1.0,
              0.0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.5,
              0.8
            ]
          },
          "object-3": {
            "jid": "e29480dc-51b0-4548-965b-705c70ce9c66",
            "pos": [
              2.5,
              0.0,
              -1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.5,
              0.6,
              0.4
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add armchair and floor lamp",
        "prompt": "Starting from the current living room scene, keep the sofa, coffee table, and TV stand. Add one armchair and one floor lamp.",
        "preserve": [
          "sofa",
          "coffee table",
          "tv"
        ],
        "expected": [
          "sofa",
          "coffee table",
          "tv",
          "armchair",
          "floor lamp"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/26_livingroom_rotate_armchair/stage2-diag.png",
          "top": "static/demo/26_livingroom_rotate_armchair/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "f08a44ff-5840-4d58-ae07-f21e80e1194c",
            "pos": [
              -1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.5,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "5c6a1cd0-5f6b-42b3-96ef-fc1e4ef7d067",
            "pos": [
              1.0,
              0.0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.5,
              0.8
            ]
          },
          "object-3": {
            "jid": "e29480dc-51b0-4548-965b-705c70ce9c66",
            "pos": [
              2.5,
              0.0,
              -1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.5,
              0.6,
              0.4
            ]
          },
          "object-4": {
            "jid": "f19829e2-601b-4118-a179-4e65ccca8279",
            "pos": [
              -1.5,
              0,
              -2.15
            ],
            "rot": [
              0,
              0.70710678,
              0,
              0.70710678
            ],
            "size": [
              0.8,
              0.9,
              0.8
            ]
          },
          "object-5": {
            "jid": "0128706c-a595-405b-a9ce-47d89847bf28",
            "pos": [
              -2.8,
              0,
              1.7
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Rotate armchair toward sofa",
        "prompt": "Starting from the current living room scene, keep sofa, coffee table, TV stand, and floor lamp. Rotate the armchair to face the sofa.",
        "preserve": [
          "sofa",
          "coffee table",
          "tv",
          "floor lamp"
        ],
        "expected": [
          "sofa",
          "coffee table",
          "tv",
          "armchair",
          "floor lamp"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/26_livingroom_rotate_armchair/stage3-diag.png",
          "top": "static/demo/26_livingroom_rotate_armchair/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "f08a44ff-5840-4d58-ae07-f21e80e1194c",
            "pos": [
              -1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.5,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "5c6a1cd0-5f6b-42b3-96ef-fc1e4ef7d067",
            "pos": [
              1.0,
              0.0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.5,
              0.8
            ]
          },
          "object-3": {
            "jid": "e29480dc-51b0-4548-965b-705c70ce9c66",
            "pos": [
              2.5,
              0.0,
              -1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.5,
              0.6,
              0.4
            ]
          },
          "object-4": {
            "jid": "f19829e2-601b-4118-a179-4e65ccca8279",
            "pos": [
              -1.5,
              0,
              -2.15
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.8,
              0.9,
              0.8
            ]
          },
          "object-5": {
            "jid": "0128706c-a595-405b-a9ce-47d89847bf28",
            "pos": [
              -2.8,
              0,
              1.7
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "35_livingroom_reading_add_side_table",
    "title": "Living Room Reading Nook",
    "roomType": "Living room",
    "editType": "Add object",
    "accent": "Side table insertion",
    "stageGlbs": [
      "static/demo/35_livingroom_reading_add_side_table/stage1.glb",
      "static/demo/35_livingroom_reading_add_side_table/stage2.glb",
      "static/demo/35_livingroom_reading_add_side_table/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base living room",
        "prompt": "Create a tidy living room with one sofa, one coffee table, and one TV stand. Keep the circulation open.",
        "preserve": [],
        "expected": [
          "sofa",
          "coffee table",
          "tv stand"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/35_livingroom_reading_add_side_table/stage1-diag.png",
          "top": "static/demo/35_livingroom_reading_add_side_table/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "f08a44ff-5840-4d58-ae07-f21e80e1194c",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.5,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "597a845a-5754-4abb-955f-2e292c89b2c5",
            "pos": [
              0.2,
              0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.45,
              1.2
            ]
          },
          "object-3": {
            "jid": "2c0792d2-d775-4b6b-b941-731fb4c295db",
            "pos": [
              2.0,
              0.0,
              -1.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.6,
              0.5,
              0.4
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add chair and lamp",
        "prompt": "Starting from the current living room scene, keep sofa, coffee table, and tv stand. Add one accent chair and one floor lamp.",
        "preserve": [
          "sofa",
          "coffee table",
          "tv stand"
        ],
        "expected": [
          "sofa",
          "coffee table",
          "tv stand",
          "accent chair",
          "floor lamp"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/35_livingroom_reading_add_side_table/stage2-diag.png",
          "top": "static/demo/35_livingroom_reading_add_side_table/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "f08a44ff-5840-4d58-ae07-f21e80e1194c",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.5,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "597a845a-5754-4abb-955f-2e292c89b2c5",
            "pos": [
              0.2,
              0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.45,
              1.2
            ]
          },
          "object-3": {
            "jid": "2c0792d2-d775-4b6b-b941-731fb4c295db",
            "pos": [
              2.0,
              0.0,
              -1.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.6,
              0.5,
              0.4
            ]
          },
          "object-4": {
            "jid": "f19829e2-601b-4118-a179-4e65ccca8279",
            "pos": [
              -1,
              0,
              -1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              0.9,
              0.8
            ]
          },
          "object-5": {
            "jid": "8592ea44-60a0-426b-822e-efe2f1d776aa",
            "pos": [
              -2.7,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Add side table",
        "prompt": "Starting from the current living room scene, keep sofa, coffee table, tv stand, accent chair, and floor lamp. Add one side table near the accent chair.",
        "preserve": [
          "sofa",
          "coffee table",
          "tv stand",
          "accent chair",
          "floor lamp"
        ],
        "expected": [
          "sofa",
          "coffee table",
          "tv stand",
          "accent chair",
          "floor lamp",
          "side table"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/35_livingroom_reading_add_side_table/stage3-diag.png",
          "top": "static/demo/35_livingroom_reading_add_side_table/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "f08a44ff-5840-4d58-ae07-f21e80e1194c",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.5,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "597a845a-5754-4abb-955f-2e292c89b2c5",
            "pos": [
              0.2,
              0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.45,
              1.2
            ]
          },
          "object-3": {
            "jid": "2c0792d2-d775-4b6b-b941-731fb4c295db",
            "pos": [
              2.0,
              0.0,
              -1.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.6,
              0.5,
              0.4
            ]
          },
          "object-4": {
            "jid": "f19829e2-601b-4118-a179-4e65ccca8279",
            "pos": [
              -1,
              0,
              -1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              0.9,
              0.8
            ]
          },
          "object-5": {
            "jid": "8592ea44-60a0-426b-822e-efe2f1d776aa",
            "pos": [
              -2.7,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          },
          "object-6": {
            "jid": "0c7c35ff-8fda-44f7-9e5a-cf75ed3e50fa",
            "pos": [
              0.1,
              0,
              -1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.5,
              0.5,
              0.5
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "45_study_storage_add_desk_lamp",
    "title": "Study Desk Lamp",
    "roomType": "Study room",
    "editType": "Add object",
    "accent": "On-desk insertion",
    "stageGlbs": [
      "static/demo/45_study_storage_add_desk_lamp/stage1.glb",
      "static/demo/45_study_storage_add_desk_lamp/stage2.glb",
      "static/demo/45_study_storage_add_desk_lamp/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base tidy study",
        "prompt": "Create a clean study room with one desk, one office chair, and one bookshelf. Keep the room functional and tidy.",
        "preserve": [],
        "expected": [
          "desk",
          "office chair",
          "bookshelf"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/45_study_storage_add_desk_lamp/stage1-diag.png",
          "top": "static/demo/45_study_storage_add_desk_lamp/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "0c64b5e0-2f99-4c17-bd22-345131e20f72",
            "pos": [
              -1.0,
              0.0,
              -0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              -1,
              0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c06e4978-df84-49de-aaa5-407d24d37090",
            "pos": [
              1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              1.8,
              0.25
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add cabinet and plant",
        "prompt": "Starting from the current study room scene, keep desk, office chair, and bookshelf. Add one storage cabinet and one potted plant.",
        "preserve": [
          "desk",
          "office chair",
          "bookshelf"
        ],
        "expected": [
          "desk",
          "office chair",
          "bookshelf",
          "storage cabinet",
          "plant"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/45_study_storage_add_desk_lamp/stage2-diag.png",
          "top": "static/demo/45_study_storage_add_desk_lamp/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "0c64b5e0-2f99-4c17-bd22-345131e20f72",
            "pos": [
              -1.0,
              0.0,
              -0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              -1,
              0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c06e4978-df84-49de-aaa5-407d24d37090",
            "pos": [
              1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              1.8,
              0.25
            ]
          },
          "object-4": {
            "jid": "8f4f873e-6974-4126-8c16-ab7d85204903",
            "pos": [
              0.8,
              0,
              -1.65
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              1.2,
              0.4
            ]
          },
          "object-5": {
            "jid": "f740f2a4-bd12-469e-811a-ccf11cf95999",
            "pos": [
              1.6,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Add desk lamp",
        "prompt": "Starting from the current study room scene, keep desk, office chair, bookshelf, storage cabinet, and plant. Add one desk lamp on the desk.",
        "preserve": [
          "desk",
          "office chair",
          "bookshelf",
          "storage cabinet",
          "plant"
        ],
        "expected": [
          "desk",
          "office chair",
          "bookshelf",
          "storage cabinet",
          "plant",
          "desk lamp"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/45_study_storage_add_desk_lamp/stage3-diag.png",
          "top": "static/demo/45_study_storage_add_desk_lamp/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "0c64b5e0-2f99-4c17-bd22-345131e20f72",
            "pos": [
              -1.0,
              0.0,
              -0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              -1,
              0,
              0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c06e4978-df84-49de-aaa5-407d24d37090",
            "pos": [
              1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              1.8,
              0.25
            ]
          },
          "object-4": {
            "jid": "8f4f873e-6974-4126-8c16-ab7d85204903",
            "pos": [
              0.8,
              0,
              -1.65
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              1.2,
              0.4
            ]
          },
          "object-5": {
            "jid": "f740f2a4-bd12-469e-811a-ccf11cf95999",
            "pos": [
              1.6,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          },
          "object-6": {
            "jid": "f5d74060-ae91-44d2-8435-f587692b6b4d",
            "pos": [
              -1.35,
              0.75,
              -0.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.32,
              0.42,
              0.25
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "03_diningroom_hosting_add_rug",
    "title": "Dining Room Rug Addition",
    "roomType": "Dining room",
    "editType": "Add object",
    "accent": "Rug under table",
    "stageGlbs": [
      "static/demo/03_diningroom_hosting_add_rug/stage1.glb",
      "static/demo/03_diningroom_hosting_add_rug/stage2.glb",
      "static/demo/03_diningroom_hosting_add_rug/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base dining room",
        "prompt": "Create a clean dining room with one rectangular dining table, four chairs, and one sideboard. Keep it open and tidy.",
        "preserve": [],
        "expected": [
          "dining table",
          "chair",
          "sideboard"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/03_diningroom_hosting_add_rug/stage1-diag.png",
          "top": "static/demo/03_diningroom_hosting_add_rug/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "df67f0bf-1b5d-4413-96d3-b90ec572ba26",
            "pos": [
              0.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.8,
              0.75,
              0.9
            ]
          },
          "object-2": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-3": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              -0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-4": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-5": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              -0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-6": {
            "jid": "c1ccb323-7964-45b4-92bf-3ace0a40865c",
            "pos": [
              -3.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.5,
              0.9,
              0.45
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add bar cart and lamp",
        "prompt": "Starting from the current dining room scene, keep the dining table, chair, and sideboard. Add one bar cart and one floor lamp.",
        "preserve": [
          "dining table",
          "chair",
          "sideboard"
        ],
        "expected": [
          "dining table",
          "chair",
          "sideboard",
          "bar cart",
          "floor lamp"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/03_diningroom_hosting_add_rug/stage2-diag.png",
          "top": "static/demo/03_diningroom_hosting_add_rug/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "df67f0bf-1b5d-4413-96d3-b90ec572ba26",
            "pos": [
              0.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.8,
              0.75,
              0.9
            ]
          },
          "object-2": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-3": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              -0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-4": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-5": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              -0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-6": {
            "jid": "c1ccb323-7964-45b4-92bf-3ace0a40865c",
            "pos": [
              -3.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.5,
              0.9,
              0.45
            ]
          },
          "object-7": {
            "jid": "a3f0179c-7fca-4e15-bcc5-d586d3306d54",
            "pos": [
              2.7,
              0,
              1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              0.9,
              0.4
            ]
          },
          "object-8": {
            "jid": "8592ea44-60a0-426b-822e-efe2f1d776aa",
            "pos": [
              -2.5,
              0,
              -1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Add rug",
        "prompt": "Starting from the current dining room scene, keep the dining table, chair, sideboard, bar cart, and floor lamp. Add one rug under the dining table.",
        "preserve": [
          "dining table",
          "chair",
          "sideboard",
          "bar cart",
          "floor lamp"
        ],
        "expected": [
          "dining table",
          "chair",
          "sideboard",
          "bar cart",
          "floor lamp",
          "rug"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/03_diningroom_hosting_add_rug/stage3-diag.png",
          "top": "static/demo/03_diningroom_hosting_add_rug/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "df67f0bf-1b5d-4413-96d3-b90ec572ba26",
            "pos": [
              0.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.8,
              0.75,
              0.9
            ]
          },
          "object-2": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-3": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              -0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-4": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-5": {
            "jid": "252c2950-6bad-4bf7-a557-76b1a08f7394",
            "pos": [
              -0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.5
            ]
          },
          "object-6": {
            "jid": "c1ccb323-7964-45b4-92bf-3ace0a40865c",
            "pos": [
              -3.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.5,
              0.9,
              0.45
            ]
          },
          "object-7": {
            "jid": "a3f0179c-7fca-4e15-bcc5-d586d3306d54",
            "pos": [
              2.7,
              0,
              1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              0.9,
              0.4
            ]
          },
          "object-8": {
            "jid": "8592ea44-60a0-426b-822e-efe2f1d776aa",
            "pos": [
              -2.5,
              0,
              -1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          },
          "object-9": {
            "jid": "749e447b-24fa-43a3-8a9d-c6b808c98b2d",
            "pos": [
              0.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              2.0,
              0.05,
              2.0
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "22_diningroom_move_bar_cart",
    "title": "Dining Room Bar Cart Move",
    "roomType": "Dining room",
    "editType": "Move object",
    "accent": "Bar cart relocation",
    "stageGlbs": [
      "static/demo/22_diningroom_move_bar_cart/stage1.glb",
      "static/demo/22_diningroom_move_bar_cart/stage2.glb",
      "static/demo/22_diningroom_move_bar_cart/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base dining room",
        "prompt": "Create a tidy dining room with one dining table, four chairs, and one sideboard.",
        "preserve": [],
        "expected": [
          "dining table",
          "chair",
          "sideboard"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/22_diningroom_move_bar_cart/stage1-diag.png",
          "top": "static/demo/22_diningroom_move_bar_cart/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "a251ff66-c63b-4685-a8cb-1a1cb38442a1",
            "pos": [
              0.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.5,
              0.75,
              0.9
            ]
          },
          "object-2": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-3": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              -0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-4": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-5": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              -0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-6": {
            "jid": "a5c3bb2a-b632-4fa6-af1b-bf03eefb12de",
            "pos": [
              0.3,
              0,
              -2.8
            ],
            "rot": [
              0.0,
              1.0,
              0.0,
              0.0
            ],
            "size": [
              1.2,
              0.9,
              0.4
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add cart and plant",
        "prompt": "Starting from the current dining room scene, keep the dining table, chair, and sideboard. Add one bar cart and one potted plant.",
        "preserve": [
          "dining table",
          "chair",
          "sideboard"
        ],
        "expected": [
          "dining table",
          "chair",
          "sideboard",
          "bar cart",
          "plant"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/22_diningroom_move_bar_cart/stage2-diag.png",
          "top": "static/demo/22_diningroom_move_bar_cart/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "a251ff66-c63b-4685-a8cb-1a1cb38442a1",
            "pos": [
              0.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.5,
              0.75,
              0.9
            ]
          },
          "object-2": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-3": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              -0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-4": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-5": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              -0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-6": {
            "jid": "a5c3bb2a-b632-4fa6-af1b-bf03eefb12de",
            "pos": [
              0.3,
              0,
              -2.8
            ],
            "rot": [
              0.0,
              1.0,
              0.0,
              0.0
            ],
            "size": [
              1.2,
              0.9,
              0.4
            ]
          },
          "object-7": {
            "jid": "a3f0179c-7fca-4e15-bcc5-d586d3306d54",
            "pos": [
              -2,
              0,
              -2.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              0.9,
              0.4
            ]
          },
          "object-8": {
            "jid": "622824d9-83a1-4b15-a75b-0f4c708a7e3c",
            "pos": [
              2.2,
              0,
              1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Move bar cart",
        "prompt": "Starting from the current dining room scene, keep dining table, chair, sideboard, and plant. Move the bar cart to the right of the sideboard.",
        "preserve": [
          "dining table",
          "chair",
          "sideboard",
          "plant"
        ],
        "expected": [
          "dining table",
          "chair",
          "sideboard",
          "bar cart",
          "plant"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/22_diningroom_move_bar_cart/stage3-diag.png",
          "top": "static/demo/22_diningroom_move_bar_cart/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "a251ff66-c63b-4685-a8cb-1a1cb38442a1",
            "pos": [
              0.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.5,
              0.75,
              0.9
            ]
          },
          "object-2": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-3": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              -0.6,
              0,
              0.95
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-4": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-5": {
            "jid": "2c3f7110-59e6-4915-86f2-7b7e89cce084",
            "pos": [
              -0.6,
              0,
              -0.95
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              1.0,
              0.6
            ]
          },
          "object-6": {
            "jid": "a5c3bb2a-b632-4fa6-af1b-bf03eefb12de",
            "pos": [
              0.3,
              0,
              -2.8
            ],
            "rot": [
              0.0,
              1.0,
              0.0,
              0.0
            ],
            "size": [
              1.2,
              0.9,
              0.4
            ]
          },
          "object-7": {
            "jid": "a3f0179c-7fca-4e15-bcc5-d586d3306d54",
            "pos": [
              2,
              0,
              -2.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              0.9,
              0.4
            ]
          },
          "object-8": {
            "jid": "622824d9-83a1-4b15-a75b-0f4c708a7e3c",
            "pos": [
              2.2,
              0,
              1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "31_bedroom_gallery_delete_wall_mirror",
    "title": "Bedroom Mirror Removal",
    "roomType": "Bedroom",
    "editType": "Delete object",
    "accent": "Wall mirror removal",
    "stageGlbs": [
      "static/demo/31_bedroom_gallery_delete_wall_mirror/stage1.glb",
      "static/demo/31_bedroom_gallery_delete_wall_mirror/stage2.glb",
      "static/demo/31_bedroom_gallery_delete_wall_mirror/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base bedroom",
        "prompt": "Create a calm bedroom with one double bed, one nightstand, and one dresser. Keep the layout clean and open.",
        "preserve": [],
        "expected": [
          "bed",
          "nightstand",
          "dresser"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/31_bedroom_gallery_delete_wall_mirror/stage1-diag.png",
          "top": "static/demo/31_bedroom_gallery_delete_wall_mirror/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "0a5ad243-5246-4ee4-ac11-4db44797e97e",
            "pos": [
              0.0,
              0.0,
              1.5
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.8,
              0.5,
              2.0
            ]
          },
          "object-2": {
            "jid": "d99b51e1-c0a3-471c-b754-469efdfebb01",
            "pos": [
              1.4,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.5,
              0.7,
              0.4
            ]
          },
          "object-3": {
            "jid": "46ff8f18-6ccd-4712-acd5-58d00ddb0807",
            "pos": [
              -1.5,
              0,
              -2.65
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              1.2,
              0.4
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add bench and mirror",
        "prompt": "Starting from the current bedroom scene, keep bed, nightstand, and dresser. Add one upholstered bench and one wall mirror above the dresser.",
        "preserve": [
          "bed",
          "nightstand",
          "dresser"
        ],
        "expected": [
          "bed",
          "nightstand",
          "dresser",
          "bench",
          "wall mirror"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/31_bedroom_gallery_delete_wall_mirror/stage2-diag.png",
          "top": "static/demo/31_bedroom_gallery_delete_wall_mirror/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "0a5ad243-5246-4ee4-ac11-4db44797e97e",
            "pos": [
              0.0,
              0.0,
              1.5
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.8,
              0.5,
              2.0
            ]
          },
          "object-2": {
            "jid": "d99b51e1-c0a3-471c-b754-469efdfebb01",
            "pos": [
              1.4,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.5,
              0.7,
              0.4
            ]
          },
          "object-3": {
            "jid": "46ff8f18-6ccd-4712-acd5-58d00ddb0807",
            "pos": [
              -1.5,
              0,
              -2.65
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              1.2,
              0.4
            ]
          },
          "object-4": {
            "jid": "4deb8513-ee9c-4bf3-a20c-c32d21cd2ea1",
            "pos": [
              0,
              0,
              2.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.5,
              0.4
            ]
          },
          "object-5": {
            "jid": "f77a5a30-1ca8-49fa-bc15-6e5c03572070",
            "pos": [
              -1.5,
              1.6,
              -2.96
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.8,
              0.8,
              0.03
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Remove mirror",
        "prompt": "Starting from the current bedroom scene, keep bed, nightstand, dresser, and bench. Remove the wall mirror.",
        "preserve": [
          "bed",
          "nightstand",
          "dresser",
          "bench"
        ],
        "expected": [
          "bed",
          "nightstand",
          "dresser",
          "bench"
        ],
        "absent": [
          "wall mirror"
        ],
        "images": {
          "diag": "static/demo/31_bedroom_gallery_delete_wall_mirror/stage3-diag.png",
          "top": "static/demo/31_bedroom_gallery_delete_wall_mirror/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "0a5ad243-5246-4ee4-ac11-4db44797e97e",
            "pos": [
              0.0,
              0.0,
              1.5
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.8,
              0.5,
              2.0
            ]
          },
          "object-2": {
            "jid": "d99b51e1-c0a3-471c-b754-469efdfebb01",
            "pos": [
              1.4,
              0,
              1.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.5,
              0.7,
              0.4
            ]
          },
          "object-3": {
            "jid": "46ff8f18-6ccd-4712-acd5-58d00ddb0807",
            "pos": [
              -1.5,
              0,
              -2.65
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              1.2,
              0.4
            ]
          },
          "object-4": {
            "jid": "4deb8513-ee9c-4bf3-a20c-c32d21cd2ea1",
            "pos": [
              0,
              0,
              2.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.5,
              0.4
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "36_livingroom_corner_replace_plant_with_side_table",
    "title": "Living Room Plant Replacement",
    "roomType": "Living room",
    "editType": "Replace object",
    "accent": "Plant to side table",
    "stageGlbs": [
      "static/demo/36_livingroom_corner_replace_plant_with_side_table/stage1.glb",
      "static/demo/36_livingroom_corner_replace_plant_with_side_table/stage2.glb",
      "static/demo/36_livingroom_corner_replace_plant_with_side_table/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base living room",
        "prompt": "Create a simple living room with one sofa, one coffee table, and one TV stand. Keep the layout open and practical.",
        "preserve": [],
        "expected": [
          "sofa",
          "coffee table",
          "tv stand"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/36_livingroom_corner_replace_plant_with_side_table/stage1-diag.png",
          "top": "static/demo/36_livingroom_corner_replace_plant_with_side_table/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "bcbf90f5-7616-433f-8aff-741080850852",
            "pos": [
              -1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.0,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "03c5b770-04d1-421c-960e-ff46a9f3a8cd",
            "pos": [
              0.0,
              0.0,
              -1.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.0,
              0.4,
              0.6
            ]
          },
          "object-3": {
            "jid": "e29480dc-51b0-4548-965b-705c70ce9c66",
            "pos": [
              1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              -0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.2,
              0.5,
              0.4
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add plant and lamp",
        "prompt": "Starting from the current living room scene, keep sofa, coffee table, and tv stand. Add one potted plant and one floor lamp.",
        "preserve": [
          "sofa",
          "coffee table",
          "tv stand"
        ],
        "expected": [
          "sofa",
          "coffee table",
          "tv stand",
          "plant",
          "floor lamp"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/36_livingroom_corner_replace_plant_with_side_table/stage2-diag.png",
          "top": "static/demo/36_livingroom_corner_replace_plant_with_side_table/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "bcbf90f5-7616-433f-8aff-741080850852",
            "pos": [
              -1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.0,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "03c5b770-04d1-421c-960e-ff46a9f3a8cd",
            "pos": [
              0.0,
              0.0,
              -1.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.0,
              0.4,
              0.6
            ]
          },
          "object-3": {
            "jid": "e29480dc-51b0-4548-965b-705c70ce9c66",
            "pos": [
              1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              -0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.2,
              0.5,
              0.4
            ]
          },
          "object-4": {
            "jid": "f740f2a4-bd12-469e-811a-ccf11cf95999",
            "pos": [
              -2.7,
              0,
              -1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          },
          "object-5": {
            "jid": "8592ea44-60a0-426b-822e-efe2f1d776aa",
            "pos": [
              -2.7,
              0,
              1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Replace plant",
        "prompt": "Starting from the current living room scene, keep sofa, coffee table, tv stand, and floor lamp. Replace the potted plant with a side table.",
        "preserve": [
          "sofa",
          "coffee table",
          "tv stand",
          "floor lamp"
        ],
        "expected": [
          "sofa",
          "coffee table",
          "tv stand",
          "side table",
          "floor lamp"
        ],
        "absent": [
          "plant"
        ],
        "images": {
          "diag": "static/demo/36_livingroom_corner_replace_plant_with_side_table/stage3-diag.png",
          "top": "static/demo/36_livingroom_corner_replace_plant_with_side_table/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "bcbf90f5-7616-433f-8aff-741080850852",
            "pos": [
              -1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              2.0,
              0.8,
              0.9
            ]
          },
          "object-2": {
            "jid": "03c5b770-04d1-421c-960e-ff46a9f3a8cd",
            "pos": [
              0.0,
              0.0,
              -1.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.0,
              0.4,
              0.6
            ]
          },
          "object-3": {
            "jid": "e29480dc-51b0-4548-965b-705c70ce9c66",
            "pos": [
              1.5,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              -0.70711,
              0.0,
              0.70711
            ],
            "size": [
              1.2,
              0.5,
              0.4
            ]
          },
          "object-4": {
            "jid": "0c7c35ff-8fda-44f7-9e5a-cf75ed3e50fa",
            "pos": [
              -2.7,
              0,
              -1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.5,
              0.5,
              0.5
            ]
          },
          "object-5": {
            "jid": "8592ea44-60a0-426b-822e-efe2f1d776aa",
            "pos": [
              -2.7,
              0,
              1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "44_diningroom_rotate_accent_chair",
    "title": "Dining Room Chair Turn",
    "roomType": "Dining room",
    "editType": "Rotate object",
    "accent": "Chair facing update",
    "stageGlbs": [
      "static/demo/44_diningroom_rotate_accent_chair/stage1.glb",
      "static/demo/44_diningroom_rotate_accent_chair/stage2.glb",
      "static/demo/44_diningroom_rotate_accent_chair/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base dining room",
        "prompt": "Create a tidy dining room with one dining table, four chairs, and one sideboard. Keep the room open and practical.",
        "preserve": [],
        "expected": [
          "dining table",
          "chair",
          "sideboard"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/44_diningroom_rotate_accent_chair/stage1-diag.png",
          "top": "static/demo/44_diningroom_rotate_accent_chair/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "5af7dda1-dd1b-3318-a3f9-6a4f70190ad6",
            "pos": [
              0.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              2.0,
              0.75,
              1.2
            ]
          },
          "object-2": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              0.6,
              0,
              1.05
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-3": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              -0.6,
              0,
              1.05
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-4": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              0.6,
              0,
              -1.05
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-5": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              -0.6,
              0,
              -1.05
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-6": {
            "jid": "ca9d967b-0cec-4090-83e8-295203afe190",
            "pos": [
              2.9,
              0,
              -2.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.8,
              0.9,
              0.45
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add chair and lamp",
        "prompt": "Starting from the current dining room scene, keep dining table, chair, and sideboard. Add one accent chair and one floor lamp.",
        "preserve": [
          "dining table",
          "chair",
          "sideboard"
        ],
        "expected": [
          "dining table",
          "chair",
          "sideboard",
          "accent chair",
          "floor lamp"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/44_diningroom_rotate_accent_chair/stage2-diag.png",
          "top": "static/demo/44_diningroom_rotate_accent_chair/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "5af7dda1-dd1b-3318-a3f9-6a4f70190ad6",
            "pos": [
              0.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              2.0,
              0.75,
              1.2
            ]
          },
          "object-2": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              0.6,
              0,
              1.05
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-3": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              -0.6,
              0,
              1.05
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-4": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              0.6,
              0,
              -1.05
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-5": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              -0.6,
              0,
              -1.05
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-6": {
            "jid": "ca9d967b-0cec-4090-83e8-295203afe190",
            "pos": [
              2.9,
              0,
              -2.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.8,
              0.9,
              0.45
            ]
          },
          "object-7": {
            "jid": "f19829e2-601b-4118-a179-4e65ccca8279",
            "pos": [
              2.25,
              0,
              0
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.8,
              0.9,
              0.8
            ]
          },
          "object-8": {
            "jid": "0128706c-a595-405b-a9ce-47d89847bf28",
            "pos": [
              -2.5,
              0,
              1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Rotate chair",
        "prompt": "Starting from the current dining room scene, keep dining table, chair, sideboard, and floor lamp. Rotate the accent chair to face the dining table.",
        "preserve": [
          "dining table",
          "chair",
          "sideboard",
          "floor lamp"
        ],
        "expected": [
          "dining table",
          "chair",
          "sideboard",
          "accent chair",
          "floor lamp"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/44_diningroom_rotate_accent_chair/stage3-diag.png",
          "top": "static/demo/44_diningroom_rotate_accent_chair/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "5af7dda1-dd1b-3318-a3f9-6a4f70190ad6",
            "pos": [
              0.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              2.0,
              0.75,
              1.2
            ]
          },
          "object-2": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              0.6,
              0,
              1.05
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-3": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              -0.6,
              0,
              1.05
            ],
            "rot": [
              0,
              1.0,
              0,
              0.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-4": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              0.6,
              0,
              -1.05
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-5": {
            "jid": "11743de3-3c46-4d31-801a-2573bff963dd",
            "pos": [
              -0.6,
              0,
              -1.05
            ],
            "rot": [
              0,
              0.0,
              0,
              1.0
            ],
            "size": [
              0.5,
              0.9,
              0.55
            ]
          },
          "object-6": {
            "jid": "ca9d967b-0cec-4090-83e8-295203afe190",
            "pos": [
              2.9,
              0,
              -2.5
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.8,
              0.9,
              0.45
            ]
          },
          "object-7": {
            "jid": "f19829e2-601b-4118-a179-4e65ccca8279",
            "pos": [
              2.25,
              0,
              0
            ],
            "rot": [
              0,
              -0.70710678,
              0,
              0.70710678
            ],
            "size": [
              0.8,
              0.9,
              0.8
            ]
          },
          "object-8": {
            "jid": "0128706c-a595-405b-a9ce-47d89847bf28",
            "pos": [
              -2.5,
              0,
              1.8
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.36,
              1.6,
              0.38
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  },
  {
    "id": "48_study_scale_storage_cabinet",
    "title": "Study Cabinet Scale",
    "roomType": "Study room",
    "editType": "Scale object",
    "accent": "Cabinet enlargement",
    "stageGlbs": [
      "static/demo/48_study_scale_storage_cabinet/stage1.glb",
      "static/demo/48_study_scale_storage_cabinet/stage2.glb",
      "static/demo/48_study_scale_storage_cabinet/stage3.glb"
    ],
    "stages": [
      {
        "label": "Create",
        "title": "Base study",
        "prompt": "Create a modern study room with one desk, one office chair, and one bookshelf. Keep the room open and organized.",
        "preserve": [],
        "expected": [
          "desk",
          "office chair",
          "bookshelf"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/48_study_scale_storage_cabinet/stage1-diag.png",
          "top": "static/demo/48_study_scale_storage_cabinet/stage1-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "cb8ef374-1462-4eb5-ae5e-689da0abec7d",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              -1,
              0,
              1
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c06e4978-df84-49de-aaa5-407d24d37090",
            "pos": [
              2.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              1.8,
              0.25
            ]
          }
        }
      },
      {
        "label": "Edit 1",
        "title": "Add cabinet and plant",
        "prompt": "Starting from the current study room scene, keep desk, office chair, and bookshelf. Add one storage cabinet and one potted plant.",
        "preserve": [
          "desk",
          "office chair",
          "bookshelf"
        ],
        "expected": [
          "desk",
          "office chair",
          "bookshelf",
          "storage cabinet",
          "plant"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/48_study_scale_storage_cabinet/stage2-diag.png",
          "top": "static/demo/48_study_scale_storage_cabinet/stage2-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "cb8ef374-1462-4eb5-ae5e-689da0abec7d",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              -1,
              0,
              1
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c06e4978-df84-49de-aaa5-407d24d37090",
            "pos": [
              2.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              1.8,
              0.25
            ]
          },
          "object-4": {
            "jid": "f8f99068-b1a1-42b0-bf7b-468ae3b7cfaf",
            "pos": [
              0.6,
              0,
              0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1,
              1.5,
              0.4
            ]
          },
          "object-5": {
            "jid": "f740f2a4-bd12-469e-811a-ccf11cf95999",
            "pos": [
              -2,
              0,
              -1.6
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          }
        }
      },
      {
        "label": "Edit 2",
        "title": "Enlarge cabinet",
        "prompt": "Starting from the current study room scene, keep desk, office chair, bookshelf, and plant. Make the storage cabinet about twenty percent larger overall.",
        "preserve": [
          "desk",
          "office chair",
          "bookshelf",
          "plant"
        ],
        "expected": [
          "desk",
          "office chair",
          "bookshelf",
          "storage cabinet",
          "plant"
        ],
        "absent": [],
        "images": {
          "diag": "static/demo/48_study_scale_storage_cabinet/stage3-diag.png",
          "top": "static/demo/48_study_scale_storage_cabinet/stage3-top.png"
        },
        "objectStates": {
          "object-1": {
            "jid": "cb8ef374-1462-4eb5-ae5e-689da0abec7d",
            "pos": [
              -1.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              0.75,
              0.6
            ]
          },
          "object-2": {
            "jid": "ec05137c-d110-4a20-9a45-f78f3c1d0eb4",
            "pos": [
              -1,
              0,
              1
            ],
            "rot": [
              0.0,
              0.70711,
              0.0,
              0.70711
            ],
            "size": [
              0.6,
              1,
              0.6
            ]
          },
          "object-3": {
            "jid": "c06e4978-df84-49de-aaa5-407d24d37090",
            "pos": [
              2.0,
              0.0,
              0.0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.8,
              1.8,
              0.25
            ]
          },
          "object-4": {
            "jid": "f8f99068-b1a1-42b0-bf7b-468ae3b7cfaf",
            "pos": [
              0.6,
              0,
              0
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              1.2,
              1.7999999999999998,
              0.48
            ]
          },
          "object-5": {
            "jid": "f740f2a4-bd12-469e-811a-ccf11cf95999",
            "pos": [
              -2,
              0,
              -1.6
            ],
            "rot": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "size": [
              0.45,
              1.15,
              0.45
            ]
          }
        }
      }
    ],
    "provenance": "Curated example: assets and scene edits corrected for this interactive demonstration.",
    "camera": {
      "azimuth": 45,
      "elevation": 38,
      "projection": "orthographic"
    }
  }
];
