(function(){
    var script = { "definitions": [
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3D26C469_2C57_DFD9_41C0_377E7A474F10",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.97,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3E40D523_2C57_D949_41AB_D91D27C82311",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.7,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": {
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideColor": "#000000",
     "class": "Map",
     "label": "Zona Franca",
     "id": "map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
     "width": 500,
     "fieldOfViewOverlayRadiusScale": 0.24,
     "maximumZoomFactor": 1.2,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6.png",
        "width": 500,
        "height": 485
       }
      ]
     },
     "scaleMode": "fit_inside",
     "overlays": [
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 240.58,
        "height": 80,
        "y": 382.04,
        "class": "HotspotMapOverlayImage",
        "width": 80,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0.png",
           "width": 80,
           "height": 80
          }
         ]
        }
       },
       "map": {
        "width": 80,
        "x": 241.15,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_0_map.gif",
           "width": 40,
           "height": 40
          }
         ]
        },
        "y": 382.75,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 80,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_C85F514D_DD1A_7E64_41E9_30CB45494AAF",
       "data": {
        "label": "Entrada"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C258158_2C57_D9C7_4187_365A41FC0BF2.set('selectedIndex', -1); }, this); this.playList_3C258158_2C57_D9C7_4187_365A41FC0BF2.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 262.2,
        "height": 40,
        "y": 286.25,
        "class": "HotspotMapOverlayImage",
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1.png",
           "width": 40,
           "height": 40
          }
         ]
        }
       },
       "map": {
        "width": 40,
        "x": 262.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_1_map.gif",
           "width": 20,
           "height": 20
          }
         ]
        },
        "y": 286.8,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 40,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_CA4EA4DE_DD1B_A664_41E0_AE0B0C78521C",
       "data": {
        "label": "Rotonda"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C37B146_2C57_D9CB_41B4_C527762E3BBD.set('selectedIndex', -1); }, this); this.playList_3C37B146_2C57_D9CB_41B4_C527762E3BBD.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 286.31,
        "height": 20,
        "y": 323.39,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 286.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_2_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 323.85,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_CB611BF8_DD1A_A22C_41D9_CBADF82A7516",
       "data": {
        "label": "CC"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C24F15E_2C57_D9FB_41C3_86AAC736B557.set('selectedIndex', -1); }, this); this.playList_3C24F15E_2C57_D9FB_41C3_86AAC736B557.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 69.35,
        "height": 40,
        "y": 287.31,
        "class": "HotspotMapOverlayImage",
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3.png",
           "width": 40,
           "height": 40
          }
         ]
        }
       },
       "map": {
        "width": 40,
        "x": 69.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_3_map.gif",
           "width": 20,
           "height": 20
          }
         ]
        },
        "y": 287.7,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 40,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_CB150A1A_DD16_ADEC_41E0_7B7C63D3E43F",
       "data": {
        "label": "Esquina Izquierda"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C27515E_2C57_D9FB_4166_BBAC26A565BA.set('selectedIndex', -1); }, this); this.playList_3C27515E_2C57_D9FB_4166_BBAC26A565BA.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 76.55,
        "height": 40,
        "y": 414.63,
        "class": "HotspotMapOverlayImage",
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5.png",
           "width": 40,
           "height": 40
          }
         ]
        }
       },
       "map": {
        "width": 40,
        "x": 76.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_5_map.gif",
           "width": 20,
           "height": 20
          }
         ]
        },
        "y": 415.15,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 40,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_C5D00BE4_DD09_E224_4193_1E7B3F21AC96",
       "data": {
        "label": "Izquierda 3"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C27C15E_2C57_D9FB_41A9_F4451A0D6802.set('selectedIndex', -1); }, this); this.playList_3C27C15E_2C57_D9FB_41A9_F4451A0D6802.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 71.9,
        "height": 20,
        "y": 207.59,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 72.45,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_6_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 208.05,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_CAE100A4_DD0B_BE24_41EB_507D59E649BA",
       "data": {
        "label": "Edwards-Hareus"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 57.82,
        "height": 40,
        "y": 118.02,
        "class": "HotspotMapOverlayImage",
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7.png",
           "width": 40,
           "height": 40
          }
         ]
        }
       },
       "map": {
        "width": 40,
        "x": 58.4,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_7_map.gif",
           "width": 20,
           "height": 20
          }
         ]
        },
        "y": 118.6,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 40,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_CB9F085C_DD0A_AE64_41AF_81B501144D5C",
       "data": {
        "label": "Esquina Atras"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C26815F_2C57_D9F9_41B1_10B10587C07B.set('selectedIndex', -1); }, this); this.playList_3C26815F_2C57_D9F9_41B1_10B10587C07B.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 177.66,
        "height": 20,
        "y": 127.49,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 178.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_8_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 127.95,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_CABD30AB_DD0E_9E23_41E5_2606484DA696",
       "data": {
        "label": "Atras1"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C29115F_2C57_D9F9_41A9_C6A7444F6505.set('selectedIndex', -1); }, this); this.playList_3C29115F_2C57_D9F9_41A9_C6A7444F6505.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 283.37,
        "height": 20,
        "y": 206.43,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 283.95,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_10_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 206.9,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_C53D65EB_DD09_A62C_41B4_A4FE1383C9E0",
       "data": {
        "label": "Plantas de tratamiento"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C29C160_2C57_D9C7_41BE_85A9943B5936.set('selectedIndex', -1); }, this); this.playList_3C29C160_2C57_D9C7_41BE_85A9943B5936.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 347.34,
        "height": 20,
        "y": 254.38,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 347.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_11_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 254.95,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_CA1A2975_DD0B_AE24_41D6_FDACEA0678CB",
       "data": {
        "label": "Derecha 1"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C287160_2C57_D9C7_41A2_CE01EC2D82E1.set('selectedIndex', -1); }, this); this.playList_3C287160_2C57_D9C7_41A2_CE01EC2D82E1.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 262.42,
        "height": 40,
        "y": 120.4,
        "class": "HotspotMapOverlayImage",
        "width": 40,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_14.png",
           "width": 40,
           "height": 40
          }
         ]
        }
       },
       "map": {
        "width": 40,
        "x": 263,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_14_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "y": 121,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 40,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_31036381_2420_B4E9_41BB_D2ED760E3DE7",
       "data": {
        "label": "centro atras"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C326144_2C57_D9CF_4176_0E2B2B44A454.set('selectedIndex', -1); }, this); this.playList_3C326144_2C57_D9CF_4176_0E2B2B44A454.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 260.64,
        "height": 20,
        "y": 352.11,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_15.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 260.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_15_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 352.31,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_9D65FE65_90AC_9E5D_41D0_7134F2F93304",
       "data": {
        "label": "frente a acceso"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C2B7160_2C57_D9C7_419E_4BE1096A1FA4.set('selectedIndex', -1); }, this); this.playList_3C2B7160_2C57_D9C7_419E_4BE1096A1FA4.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 283.37,
        "height": 20,
        "y": 351.39,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_16.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 283.6,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_16_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 351.57,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_9E45B37A_90AC_8634_41C3_901C626859AE",
       "data": {
        "label": "parque oficinas"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C37B146_2C57_D9CB_41B4_C527762E3BBD.set('selectedIndex', -1); }, this); this.playList_3C37B146_2C57_D9CB_41B4_C527762E3BBD.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 281.49,
        "height": 20,
        "y": 337.14,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_17.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 281.76,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_17_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 337.42,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_9FD0A508_90AD_83D3_41DE_4DD6F047754B",
       "data": {
        "label": "detalle cc"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C2A4161_2C57_D9C9_41B3_50868F22D021.set('selectedIndex', -1); }, this); this.playList_3C2A4161_2C57_D9C9_41B3_50868F22D021.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 270.95,
        "height": 20,
        "y": 282.1,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_18.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 271.45,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_18_map.gif",
           "width": 16,
           "height": 16
          }
         ]
        },
        "y": 282.58,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_8087FF73_90AC_7E35_41DE_F40AD88C5D34",
       "data": {
        "label": "arte rotonda"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C258158_2C57_D9C7_4187_365A41FC0BF2.set('selectedIndex', -1); }, this); this.playList_3C258158_2C57_D9C7_4187_365A41FC0BF2.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 260.42,
        "height": 20,
        "y": 326,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_19.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 260.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_19_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 326.2,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_803C6FF5_90AB_9E3D_41D2_147E90128D2B",
       "data": {
        "label": "Frente Rotonda"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C2D6167_2C57_D9C9_417D_093AB2D1E86A.set('selectedIndex', -1); }, this); this.playList_3C2D6167_2C57_D9C9_417D_093AB2D1E86A.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 147.28,
        "height": 20,
        "y": 301.22,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_20.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 147.55,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_20_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 301.5,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_818014B0_90A4_8233_41C6_6EF6742A3260",
       "data": {
        "label": "Entre coloplast y multitenant"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C352145_2C57_D9C9_41B2_A81A867C134C.set('selectedIndex', -1); }, this); this.playList_3C352145_2C57_D9C9_41B2_A81A867C134C.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 266.69,
        "height": 20,
        "y": 457.93,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_21.png",
           "width": 20,
           "height": 19
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 266.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_21_map.gif",
           "width": 10,
           "height": 9
          }
         ]
        },
        "y": 457.93,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_84D6233B_90A4_8634_41C8_B292BA97F3CE",
       "data": {
        "label": "drone entrada"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C2D7168_2C57_D9C7_41B7_0863265BB03C.set('selectedIndex', -1); }, this); this.playList_3C2D7168_2C57_D9C7_41B7_0863265BB03C.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 85.59,
        "height": 20,
        "y": 443.51,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_22.png",
           "width": 20,
           "height": 20
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 85.59,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_22_map.gif",
           "width": 10,
           "height": 10
          }
         ]
        },
        "y": 443.51,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_840C64A7_90A5_82DC_415A_278F7AD48B40",
       "data": {
        "label": "drone helipuerto"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C2DF168_2C57_D9C7_41B8_E2C0979610D8.set('selectedIndex', -1); }, this); this.playList_3C2DF168_2C57_D9C7_41B8_E2C0979610D8.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 4.6,
        "height": 20,
        "y": 93.96,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_23.png",
           "width": 20,
           "height": 19
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 4.6,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_23_map.gif",
           "width": 10,
           "height": 9
          }
         ]
        },
        "y": 93.96,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_86A9F52D_90AB_822D_41D8_5A00E817DC70",
       "data": {
        "label": "drone canchas"
       }
      },
      {
       "useHandCursor": true,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.MainViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E.set('selectedIndex', -1); }, this); this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 272.62,
        "height": 20,
        "y": 117.13,
        "class": "HotspotMapOverlayImage",
        "width": 20,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_24.png",
           "width": 20,
           "height": 19
          }
         ]
        }
       },
       "map": {
        "width": 20,
        "x": 272.62,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_HS_24_map.gif",
           "width": 10,
           "height": 9
          }
         ]
        },
        "y": 117.13,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "height": 20,
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "id": "overlay_855D83AB_90AC_86D5_41C0_E9739CB69761",
       "data": {
        "label": "drone centro"
       }
      }
     ],
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.31,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "height": 485,
     "thumbnailUrl": "media/map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6_t.png"
    },
    "player": {
     "class": "MapPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": 12,
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "MapViewer",
      "playbackBarHeadBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "width": "99.417%",
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "playbackBarOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipFontFamily": "Arial",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarBorderColor": "#FFFFFF",
      "paddingRight": 0,
      "height": "70.806%",
      "minWidth": 1,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "transitionDuration": 500,
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipDisplayTime": 600,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "MapViewer"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "MapViewerMapPlayer",
     "movementMode": "constrained"
    },
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_3CF65180_2C57_D947_41C1_252C64C46FE3"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_EF6DE039_F622_38BD_41E2_3149DB234972",
  "easing": "cubic_in_out",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E3586214_ED68_4574_41E5_D2720D677B2E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3E6CB55F_2C57_D9F9_41C4_6F8732B671ED",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.95,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA1561D_2C57_DB79_41BB_E12F5122CC96",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE4D187_2C57_D949_41C1_800094FEB7AB, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345ECD8F_20DF_6B94_41AE_2D20B974323E, 'hideEffect', false)",
    "media": {
     "class": "Panorama",
     "label": "3-Detail CC",
     "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "Main Entrance",
        "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "1.2-Main Entrance",
           "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
             "yaw": 150.13,
             "distance": 1,
             "backwardYaw": -19.33
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "IMG_20180114_184740_00_077-edit",
              "id": "panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "IMG_20180114_164030_00_037(Opci\u00f3n2)-edit",
                 "id": "panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "label": "IMG_20180114_162347_00_013-edit",
                    "id": "panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
                      "yaw": -157.61,
                      "distance": 1,
                      "backwardYaw": 164.85
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
                      "yaw": -104.82,
                      "distance": 1,
                      "backwardYaw": 36.44
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "IMG_20180114_182756_00_062-edit",
                       "id": "panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
                         "yaw": -121.06,
                         "distance": 1,
                         "backwardYaw": 125.87
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
                         "yaw": -73.9,
                         "distance": 1,
                         "backwardYaw": 76.9
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "label": "helipuerto",
                          "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "label": "12-Entre Zollner y Coloplast",
                             "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "label": "11-Entre Edwards y Coloplast",
                                "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                  "yaw": -94.64,
                                  "distance": 1,
                                  "backwardYaw": 179.05
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "class": "Panorama",
                                   "label": "4-Frente Rotonda",
                                   "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "class": "Panorama",
                                      "label": "17-Construcci\u00f3n Coloplast",
                                      "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391",
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "class": "Panorama",
                                         "label": "5-Arte Rotonda",
                                         "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
                                           "yaw": 69.33,
                                           "distance": 1,
                                           "backwardYaw": -155.58
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "class": "Panorama",
                                            "label": "6-Lagunas de Retencion",
                                            "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "class": "Panorama",
                                               "label": "7-Centro Atr\u00e1s",
                                               "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
                                                 "yaw": 23.32,
                                                 "distance": 1,
                                                 "backwardYaw": 139.43
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": {
                                                  "class": "Panorama",
                                                  "label": "8-Pastizal Atr\u00e1s",
                                                  "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                                                  "adjacentPanoramas": [
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
                                                    "yaw": -112.38,
                                                    "distance": 1,
                                                    "backwardYaw": 107.65
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": {
                                                     "class": "Panorama",
                                                     "label": "15-Esquina Heraus",
                                                     "id": "panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
                                                     "adjacentPanoramas": [
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
                                                      },
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": {
                                                        "class": "Panorama",
                                                        "label": "14-Entre Zollner y Heraus",
                                                        "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                                                        "adjacentPanoramas": [
                                                         {
                                                          "class": "AdjacentPanorama",
                                                          "panorama": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F"
                                                         },
                                                         {
                                                          "class": "AdjacentPanorama",
                                                          "panorama": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
                                                          "yaw": -95.46,
                                                          "distance": 1,
                                                          "backwardYaw": 79.43
                                                         },
                                                         {
                                                          "class": "AdjacentPanorama",
                                                          "panorama": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
                                                          "yaw": 99.68,
                                                          "distance": 1,
                                                          "backwardYaw": 109.75
                                                         }
                                                        ],
                                                        "pitch": 0,
                                                        "partial": false,
                                                        "vfov": 180,
                                                        "hfovMax": 130,
                                                        "hfov": 360,
                                                        "hfovMin": 80,
                                                        "frames": [
                                                         {
                                                          "class": "SphericPanoramaFrame",
                                                          "sphere": {
                                                           "class": "ImageResource",
                                                           "levels": [
                                                            {
                                                             "class": "ImageResourceLevel",
                                                             "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_hq.jpeg",
                                                             "width": 6434,
                                                             "height": 3217,
                                                             "tags": [
                                                              "oculusgo",
                                                              "ipadpro"
                                                             ]
                                                            },
                                                            {
                                                             "class": "ImageResourceLevel",
                                                             "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525.jpeg",
                                                             "width": 4002,
                                                             "height": 2001
                                                            }
                                                           ]
                                                          },
                                                          "overlays": [
                                                           {
                                                            "useHandCursor": true,
                                                            "areas": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_3CF2E39D_2C57_D979_41A4_72004B0C241B); this.setMediaBehaviour(this.playList_3C24F15E_2C57_D9FB_41C3_86AAC736B557, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                                              "mapColor": "#FF0000"
                                                             }
                                                            ],
                                                            "rollOverDisplay": false,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "maps": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "yaw": -95.46,
                                                              "hfov": 5.92,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_0_0_0_map.gif",
                                                                 "width": 16,
                                                                 "height": 16
                                                                }
                                                               ]
                                                              },
                                                              "pitch": -1.9
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "hfov": 5.92,
                                                              "distance": 50,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_0_0.png",
                                                                 "width": 105,
                                                                 "height": 105
                                                                }
                                                               ]
                                                              },
                                                              "pitch": -1.9,
                                                              "yaw": -95.46
                                                             }
                                                            ],
                                                            "id": "overlay_0FB017A6_1FE8_BC27_41AF_F1D0B02F7726",
                                                            "data": {
                                                             "label": "Image"
                                                            },
                                                            "enabledInCardboard": true
                                                           },
                                                           {
                                                            "useHandCursor": true,
                                                            "areas": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "click": "this.startPanoramaWithCamera(this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5, this.camera_3CFE83A9_2C57_D959_41B3_4E186A4BB3BD); this.setMediaBehaviour(this.playList_3CC1E174_2C57_D9CF_41A0_B5F2992828A2, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                                              "mapColor": "#FF0000"
                                                             }
                                                            ],
                                                            "rollOverDisplay": false,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "maps": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "yaw": 99.68,
                                                              "hfov": 5.92,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_1_0_0_map.gif",
                                                                 "width": 16,
                                                                 "height": 16
                                                                }
                                                               ]
                                                              },
                                                              "pitch": -2.52
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "hfov": 5.92,
                                                              "distance": 50,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_1_0.png",
                                                                 "width": 105,
                                                                 "height": 105
                                                                }
                                                               ]
                                                              },
                                                              "pitch": -2.52,
                                                              "yaw": 99.68
                                                             }
                                                            ],
                                                            "id": "overlay_0EAE3862_1FEF_B45E_41AE_199087399F1A",
                                                            "data": {
                                                             "label": "Image"
                                                            },
                                                            "enabledInCardboard": true
                                                           },
                                                           {
                                                            "useHandCursor": true,
                                                            "areas": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "click": "this.setMediaBehaviour(this.playList_3C2DF168_2C57_D9C7_41B8_E2C0979610D8, 0, this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525)",
                                                              "mapColor": "#FF0000"
                                                             }
                                                            ],
                                                            "rollOverDisplay": false,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "maps": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "yaw": 92,
                                                              "hfov": 4.48,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_2_0_0_map.gif",
                                                                 "width": 16,
                                                                 "height": 16
                                                                }
                                                               ]
                                                              },
                                                              "pitch": 40.89
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "hfov": 4.48,
                                                              "distance": 50,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_0_HS_2_0.png",
                                                                 "width": 105,
                                                                 "height": 105
                                                                }
                                                               ]
                                                              },
                                                              "pitch": 40.89,
                                                              "yaw": 92
                                                             }
                                                            ],
                                                            "id": "overlay_0468197D_2059_7425_41B5_13CA67FE1091",
                                                            "data": {
                                                             "label": "Image"
                                                            },
                                                            "enabledInCardboard": true
                                                           }
                                                          ],
                                                          "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg"
                                                         }
                                                        ],
                                                        "mapLocations": [
                                                         {
                                                          "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                                          "x": 81.9,
                                                          "angle": -78.76,
                                                          "y": 217.59,
                                                          "class": "PanoramaMapLocation"
                                                         }
                                                        ],
                                                        "thumbnailUrl": "media/panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_t.jpg"
                                                       },
                                                       "yaw": 109.75,
                                                       "distance": 1,
                                                       "backwardYaw": 99.68
                                                      },
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
                                                       "yaw": 21.18,
                                                       "distance": 1,
                                                       "backwardYaw": 72.35
                                                      }
                                                     ],
                                                     "pitch": 0,
                                                     "partial": false,
                                                     "vfov": 180,
                                                     "hfovMax": 120,
                                                     "hfov": 360,
                                                     "hfovMin": 80,
                                                     "frames": [
                                                      {
                                                       "class": "SphericPanoramaFrame",
                                                       "sphere": {
                                                        "class": "ImageResource",
                                                        "levels": [
                                                         {
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_hq.jpeg",
                                                          "width": 6434,
                                                          "height": 3217,
                                                          "tags": [
                                                           "oculusgo",
                                                           "ipadpro"
                                                          ]
                                                         },
                                                         {
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5.jpeg",
                                                          "width": 4002,
                                                          "height": 2001
                                                         }
                                                        ]
                                                       },
                                                       "overlays": [
                                                        {
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_3D1E2444_2C57_DFCF_41A3_E869BABA30E4); this.setMediaBehaviour(this.playList_3C27C15E_2C57_D9FB_41A9_F4451A0D6802, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                                           "mapColor": "#FF0000"
                                                          }
                                                         ],
                                                         "rollOverDisplay": false,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": 109.75,
                                                           "hfov": 5.92,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_0_0_0_map.gif",
                                                              "width": 16,
                                                              "height": 16
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -2.42
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "hfov": 5.92,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_0_0.png",
                                                              "width": 105,
                                                              "height": 105
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -2.42,
                                                           "yaw": 109.75
                                                          }
                                                         ],
                                                         "id": "overlay_6B6299CB_64A7_866E_41B2_B25C63FF2DAB",
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_3D0C1450_2C57_DFC7_41C4_6ACBE0AC4C4B); this.setMediaBehaviour(this.playList_3C26815F_2C57_D9F9_41B1_10B10587C07B, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                                           "mapColor": "#FF0000"
                                                          }
                                                         ],
                                                         "rollOverDisplay": false,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": 21.18,
                                                           "hfov": 5.92,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_1_0_0_map.gif",
                                                              "width": 16,
                                                              "height": 16
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -1.96
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "hfov": 5.92,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_1_0.png",
                                                              "width": 105,
                                                              "height": 105
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -1.96,
                                                           "yaw": 21.18
                                                          }
                                                         ],
                                                         "id": "overlay_746F0EE4_64A4_FA5A_41C6_4B55C78675E3",
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "click": "this.showPopupPanoramaOverlay(this.popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_72699DCF_64A4_9E66_417A_2D9BA948AEB2, null, null, null, null, false)",
                                                           "mapColor": "#FF0000"
                                                          }
                                                         ],
                                                         "rollOverDisplay": false,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": 95.76,
                                                           "hfov": 5.9,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_2_0_0_map.gif",
                                                              "width": 16,
                                                              "height": 16
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -4.32
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "hfov": 5.9,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_2_0.png",
                                                              "width": 105,
                                                              "height": 105
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -4.32,
                                                           "yaw": 95.76
                                                          }
                                                         ],
                                                         "id": "overlay_76C3634B_64AC_8A6E_41D8_69DA9A55BC14",
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "rotationY": 0,
                                                         "showDuration": 500,
                                                         "yaw": 95.76,
                                                         "rotationZ": 0,
                                                         "hideDuration": 500,
                                                         "class": "PopupPanoramaOverlay",
                                                         "id": "popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8",
                                                         "popupMaxHeight": "95%",
                                                         "rotationX": 0,
                                                         "hideEasing": "cubic_out",
                                                         "hfov": 5.9,
                                                         "image": {
                                                          "class": "ImageResource",
                                                          "levels": [
                                                           {
                                                            "class": "ImageResourceLevel",
                                                            "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_1.jpg",
                                                            "width": 1024,
                                                            "height": 682
                                                           }
                                                          ]
                                                         },
                                                         "pitch": -4.32,
                                                         "popupMaxWidth": "95%",
                                                         "popupDistance": 100,
                                                         "showEasing": "cubic_in"
                                                        },
                                                        {
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "click": "this.setMediaBehaviour(this.playList_3C2DF168_2C57_D9C7_41B8_E2C0979610D8, 0, this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5)",
                                                           "mapColor": "#FF0000"
                                                          }
                                                         ],
                                                         "rollOverDisplay": false,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": -116.66,
                                                           "hfov": 6.52,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_3_0_0_map.gif",
                                                              "width": 16,
                                                              "height": 16
                                                             }
                                                            ]
                                                           },
                                                           "pitch": 42.73
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "hfov": 6.52,
                                                           "distance": 50,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_0_HS_3_0.png",
                                                              "width": 158,
                                                              "height": 158
                                                             }
                                                            ]
                                                           },
                                                           "pitch": 42.73,
                                                           "yaw": -116.66
                                                          }
                                                         ],
                                                         "id": "overlay_7081F47D_64AC_8E2A_41B0_7F938951B55C",
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "enabledInCardboard": true
                                                        }
                                                       ],
                                                       "thumbnailUrl": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_t.jpg"
                                                      }
                                                     ],
                                                     "thumbnailUrl": "media/panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_t.jpg"
                                                    },
                                                    "yaw": 72.35,
                                                    "distance": 1,
                                                    "backwardYaw": 21.18
                                                   }
                                                  ],
                                                  "pitch": 0,
                                                  "partial": false,
                                                  "vfov": 180,
                                                  "hfovMax": 130,
                                                  "hfov": 360,
                                                  "hfovMin": 80,
                                                  "frames": [
                                                   {
                                                    "class": "SphericPanoramaFrame",
                                                    "sphere": {
                                                     "class": "ImageResource",
                                                     "levels": [
                                                      {
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_hq.jpeg",
                                                       "width": 6434,
                                                       "height": 3217,
                                                       "tags": [
                                                        "oculusgo",
                                                        "ipadpro"
                                                       ]
                                                      },
                                                      {
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368.jpeg",
                                                       "width": 4002,
                                                       "height": 2001
                                                      }
                                                     ]
                                                    },
                                                    "overlays": [
                                                     {
                                                      "useHandCursor": true,
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5, this.camera_3D62C42B_2C57_DF59_4186_19D43A95248B); this.setMediaBehaviour(this.playList_3CC1E174_2C57_D9CF_41A0_B5F2992828A2, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                                        "mapColor": "#FF0000"
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": 72.35,
                                                        "hfov": 5.92,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_0_0_0_map.gif",
                                                           "width": 16,
                                                           "height": 16
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -0.2
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "hfov": 5.92,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_0_0.png",
                                                           "width": 105,
                                                           "height": 105
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -0.2,
                                                        "yaw": 72.35
                                                       }
                                                      ],
                                                      "id": "overlay_0C999A3C_1FF8_B42A_41B2_78A976AB4804",
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "useHandCursor": true,
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_3D76B41F_2C57_DF79_41B7_FD03AAE2475A); this.setMediaBehaviour(this.playList_3C287160_2C57_D9C7_41A2_CE01EC2D82E1, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                                        "mapColor": "#FF0000"
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": -112.38,
                                                        "hfov": 5.9,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_1_0_0_map.gif",
                                                           "width": 16,
                                                           "height": 16
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -4.59
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "hfov": 5.9,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_1_0.png",
                                                           "width": 105,
                                                           "height": 105
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -4.59,
                                                        "yaw": -112.38
                                                       }
                                                      ],
                                                      "id": "overlay_0B0D3357_1FF9_B465_41A7_A52733D8BBA6",
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "useHandCursor": true,
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "click": "this.setMediaBehaviour(this.playList_3C2DF168_2C57_D9C7_41B8_E2C0979610D8, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                                        "mapColor": "#FF0000"
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": 82.3,
                                                        "hfov": 4.28,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_2_0_0_map.gif",
                                                           "width": 16,
                                                           "height": 16
                                                          }
                                                         ]
                                                        },
                                                        "pitch": 43.73
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "hfov": 4.28,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_2_0.png",
                                                           "width": 105,
                                                           "height": 105
                                                          }
                                                         ]
                                                        },
                                                        "pitch": 43.73,
                                                        "yaw": 82.3
                                                       }
                                                      ],
                                                      "id": "overlay_0563FED1_2058_AC7D_41B4_554C5D71DDD6",
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "useHandCursor": true,
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "click": "this.setMediaBehaviour(this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E, 0, this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368)",
                                                        "mapColor": "#FF0000"
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": -106.31,
                                                        "hfov": 4.46,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_3_0_0_map.gif",
                                                           "width": 16,
                                                           "height": 16
                                                          }
                                                         ]
                                                        },
                                                        "pitch": 41.06
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "hfov": 4.46,
                                                        "distance": 50,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_0_HS_3_0.png",
                                                           "width": 105,
                                                           "height": 105
                                                          }
                                                         ]
                                                        },
                                                        "pitch": 41.06,
                                                        "yaw": -106.31
                                                       }
                                                      ],
                                                      "id": "overlay_075305AF_2059_9C26_4154_35D04C13FEEA",
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "enabledInCardboard": true
                                                     }
                                                    ],
                                                    "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg"
                                                   }
                                                  ],
                                                  "mapLocations": [
                                                   {
                                                    "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                                    "x": 187.66,
                                                    "angle": 178.51,
                                                    "y": 137.49,
                                                    "class": "PanoramaMapLocation"
                                                   }
                                                  ],
                                                  "thumbnailUrl": "media/panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_t.jpg"
                                                 },
                                                 "yaw": 107.65,
                                                 "distance": 1,
                                                 "backwardYaw": -112.38
                                                }
                                               ],
                                               "pitch": 0,
                                               "partial": false,
                                               "vfov": 180,
                                               "hfovMax": 130,
                                               "hfov": 360,
                                               "hfovMin": 80,
                                               "frames": [
                                                {
                                                 "class": "SphericPanoramaFrame",
                                                 "sphere": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_hq.jpeg",
                                                    "width": 6434,
                                                    "height": 3217,
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ]
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9.jpeg",
                                                    "width": 4002,
                                                    "height": 2001
                                                   }
                                                  ]
                                                 },
                                                 "overlays": [
                                                  {
                                                   "useHandCursor": true,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_3CB603E4_2C57_D8CF_41BB_D305B8B54AD9); this.setMediaBehaviour(this.playList_3C29115F_2C57_D9F9_41A9_C6A7444F6505, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 23.32,
                                                     "hfov": 5.91,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_0_0_0_map.gif",
                                                        "width": 16,
                                                        "height": 16
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -2.78
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "hfov": 5.91,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_0_0.png",
                                                        "width": 105,
                                                        "height": 105
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -2.78,
                                                     "yaw": 23.32
                                                    }
                                                   ],
                                                   "id": "overlay_0E28870F_1AA3_FCB7_419D_633D3C55FE98",
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "useHandCursor": true,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368, this.camera_3CA3B3F1_2C57_D8C9_41C4_E9906E33BD41); this.setMediaBehaviour(this.playList_3C26815F_2C57_D9F9_41B1_10B10587C07B, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 107.65,
                                                     "hfov": 5.92,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_1_0_0_map.gif",
                                                        "width": 16,
                                                        "height": 16
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -2.02
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "hfov": 5.92,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_1_0.png",
                                                        "width": 105,
                                                        "height": 105
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -2.02,
                                                     "yaw": 107.65
                                                    }
                                                   ],
                                                   "id": "overlay_0C1F6F55_1FE8_EC65_41B8_E66540C53853",
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "useHandCursor": true,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.setMediaBehaviour(this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E, 0, this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9)",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 102.37,
                                                     "hfov": 1.81,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_2_0_0_map.gif",
                                                        "width": 16,
                                                        "height": 16
                                                       }
                                                      ]
                                                     },
                                                     "pitch": 72.16
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "hfov": 1.81,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_0_HS_2_0.png",
                                                        "width": 105,
                                                        "height": 105
                                                       }
                                                      ]
                                                     },
                                                     "pitch": 72.16,
                                                     "yaw": 102.37
                                                    }
                                                   ],
                                                   "id": "overlay_0317EC11_202B_B3FA_4176_A41CD4A39466",
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "enabledInCardboard": true
                                                  }
                                                 ],
                                                 "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg"
                                                }
                                               ],
                                               "mapLocations": [
                                                {
                                                 "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                                 "x": 282.42,
                                                 "angle": 176.01,
                                                 "y": 140.4,
                                                 "class": "PanoramaMapLocation"
                                                }
                                               ],
                                               "thumbnailUrl": "media/panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_t.jpg"
                                              },
                                              "yaw": 139.43,
                                              "distance": 1,
                                              "backwardYaw": 23.32
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                                              "yaw": -30.03,
                                              "distance": 1,
                                              "backwardYaw": -5.23
                                             }
                                            ],
                                            "pitch": 0,
                                            "partial": false,
                                            "vfov": 180,
                                            "hfovMax": 130,
                                            "hfov": 360,
                                            "hfovMin": 80,
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_hq.jpeg",
                                                 "width": 6434,
                                                 "height": 3217,
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ]
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E.jpeg",
                                                 "width": 4002,
                                                 "height": 2001
                                                }
                                               ]
                                              },
                                              "overlays": [
                                               {
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_3C666323_2C57_D949_41AA_DC3A98D01491); this.setMediaBehaviour(this.playList_3C2A4161_2C57_D9C9_41B3_50868F22D021, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -30.03,
                                                  "hfov": 5.92,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_0_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -1.5
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 5.92,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_0_0.png",
                                                     "width": 105,
                                                     "height": 105
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -1.5,
                                                  "yaw": -30.03
                                                 }
                                                ],
                                                "id": "overlay_09EEE157_1AA0_9757_41AD_5F9390667B4A",
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9, this.camera_3C7DF316_2C57_D94B_41B8_66DA7C8398D9); this.setMediaBehaviour(this.playList_3C287160_2C57_D9C7_41A2_CE01EC2D82E1, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 139.43,
                                                  "hfov": 5.91,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_1_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -2.97
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 5.91,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_1_0.png",
                                                     "width": 105,
                                                     "height": 105
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -2.97,
                                                  "yaw": 139.43
                                                 }
                                                ],
                                                "id": "overlay_093185C8_1AA1_9FB9_41B3_EF254AE2BC40",
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.setMediaBehaviour(this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E, 0, this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E)",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 146.16,
                                                  "hfov": 6.12,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_2_0_0_map.gif",
                                                     "width": 16,
                                                     "height": 16
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 65.57
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 6.12,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_0_HS_2_0.png",
                                                     "width": 264,
                                                     "height": 264
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 65.57,
                                                  "yaw": 146.16
                                                 }
                                                ],
                                                "id": "overlay_037A2FFE_2029_6C26_41B6_1BF59A245E5D",
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "enabledInCardboard": true
                                               }
                                              ],
                                              "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg"
                                             }
                                            ],
                                            "mapLocations": [
                                             {
                                              "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                              "x": 293.37,
                                              "angle": 202.87,
                                              "y": 216.43,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "thumbnailUrl": "media/panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_t.jpg"
                                           },
                                           "yaw": -5.23,
                                           "distance": 1,
                                           "backwardYaw": -30.03
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                                           "yaw": -164.09,
                                           "distance": 1,
                                           "backwardYaw": 6.44
                                          }
                                         ],
                                         "pitch": 0,
                                         "partial": false,
                                         "vfov": 180,
                                         "hfovMax": 130,
                                         "hfov": 360,
                                         "hfovMin": 80,
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_hq.jpeg",
                                              "width": 6434,
                                              "height": 3217,
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ]
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC.jpeg",
                                              "width": 4002,
                                              "height": 2001
                                             }
                                            ]
                                           },
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_3DD4E475_2C57_DFC9_41AD_896614967EF5); this.setMediaBehaviour(this.playList_3C258158_2C57_D9C7_4187_365A41FC0BF2, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -164.09,
                                               "hfov": 5.91,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_0_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "pitch": -3.15
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.91,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_0_0.png",
                                                  "width": 105,
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -3.15,
                                               "yaw": -164.09
                                              }
                                             ],
                                             "id": "overlay_0A67E474_1AA0_BD6A_41B7_BED35C5683B5",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E, this.camera_3D26C469_2C57_DFD9_41C0_377E7A474F10); this.setMediaBehaviour(this.playList_3C29115F_2C57_D9F9_41A9_C6A7444F6505, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -5.23,
                                               "hfov": 5.89,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_1_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "pitch": -5.49
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.89,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_1_0.png",
                                                  "width": 105,
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -5.49,
                                               "yaw": -5.23
                                              }
                                             ],
                                             "id": "overlay_0A062D73_1AA1_EF6F_41B3_28BC82B7EFA3",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_3D3A145D_2C57_DFF9_41C3_30A1E6596BA8); this.setMediaBehaviour(this.playList_3C29C160_2C57_D9C7_41BE_85A9943B5936, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 69.33,
                                               "hfov": 5.92,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_2_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "pitch": -2.4
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.92,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_2_0.png",
                                                  "width": 105,
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": -2.4,
                                               "yaw": 69.33
                                              }
                                             ],
                                             "id": "overlay_0B9BBAA4_1FE8_94DA_41A4_80FF2E6D9882",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.setMediaBehaviour(this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E, 0, this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC)",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -1.18,
                                               "hfov": 4.95,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_3_0_0_map.gif",
                                                  "width": 16,
                                                  "height": 16
                                                 }
                                                ]
                                               },
                                               "pitch": 33.3
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 4.95,
                                               "distance": 50,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_0_HS_3_0.png",
                                                  "width": 105,
                                                  "height": 105
                                                 }
                                                ]
                                               },
                                               "pitch": 33.3,
                                               "yaw": -1.18
                                              }
                                             ],
                                             "id": "overlay_02E95182_2028_B4DE_41B1_F1922BBD0381",
                                             "data": {
                                              "label": "Image"
                                             },
                                             "enabledInCardboard": true
                                            }
                                           ],
                                           "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg"
                                          }
                                         ],
                                         "mapLocations": [
                                          {
                                           "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                           "x": 280.95,
                                           "angle": 0,
                                           "y": 292.1,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "thumbnailUrl": "media/panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_t.jpg"
                                        },
                                        "yaw": -155.58,
                                        "distance": 1,
                                        "backwardYaw": 69.33
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
                                        "yaw": -174.5,
                                        "distance": 1,
                                        "backwardYaw": 66.08
                                       }
                                      ],
                                      "pitch": 0,
                                      "partial": false,
                                      "vfov": 180,
                                      "hfovMax": 130,
                                      "hfov": 360,
                                      "hfovMin": 80,
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_hq.jpeg",
                                           "width": 6434,
                                           "height": 3217,
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ]
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391.jpeg",
                                           "width": 4002,
                                           "height": 2001
                                          }
                                         ]
                                        },
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_2320F21A_2C57_DB7B_41C2_E48E35AACDCF); this.setMediaBehaviour(this.playList_3C2A4161_2C57_D9C9_41B3_50868F22D021, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -155.58,
                                            "hfov": 5.91,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_0_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": -3.74
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.91,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_0_0.png",
                                               "width": 105,
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -3.74,
                                            "yaw": -155.58
                                           }
                                          ],
                                          "id": "overlay_0AB7C55F_1FE8_FC66_41AA_FC4B185C3724",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_23293226_2C57_DB4B_41A6_CD708CA1176B); this.setMediaBehaviour(this.playList_3C258158_2C57_D9C7_4187_365A41FC0BF2, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -174.5,
                                            "hfov": 5.92,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_1_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": -1.39
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.92,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_1_0.png",
                                               "width": 105,
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": -1.39,
                                            "yaw": -174.5
                                           }
                                          ],
                                          "id": "overlay_0902A392_1FD9_94FE_41B7_54ABDCF246F7",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.setMediaBehaviour(this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E, 0, this.panorama_0B7B5A27_1FEB_7426_4195_945554348391)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -90.59,
                                            "hfov": 5.28,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_2_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": 27.01
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.28,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_2_0.png",
                                               "width": 105,
                                               "height": 105
                                              }
                                             ]
                                            },
                                            "pitch": 27.01,
                                            "yaw": -90.59
                                           }
                                          ],
                                          "id": "overlay_065D4D65_2058_EC5A_41A3_9655B97D1F55",
                                          "data": {
                                           "label": "Image"
                                          },
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.media_0BA5C089_2079_B4ED_41A8_D2AC2349E041, this.camera_57ED2843_5884_EE2E_41C5_05C9E202BB3A); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, false, 0, null, null, false)",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 172.46,
                                            "hfov": 7.09,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_5_0_0_map.gif",
                                               "width": 16,
                                               "height": 16
                                              }
                                             ]
                                            },
                                            "pitch": -16.71
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 7.09,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_0_HS_5_0.png",
                                               "width": 132,
                                               "height": 132
                                              }
                                             ]
                                            },
                                            "pitch": -16.71,
                                            "yaw": 172.46
                                           }
                                          ],
                                          "id": "overlay_A5180004_8679_2D5B_41D1_CA276DC13AEC",
                                          "data": {
                                           "label": "Image"
                                          }
                                         }
                                        ],
                                        "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg"
                                       }
                                      ],
                                      "mapLocations": [
                                       {
                                        "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                        "x": 357.34,
                                        "angle": 48.7,
                                        "y": 264.38,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "thumbnailUrl": "media/panorama_0B7B5A27_1FEB_7426_4195_945554348391_t.jpg"
                                     },
                                     "yaw": 66.08,
                                     "distance": 1,
                                     "backwardYaw": -174.5
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94"
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
                                     "yaw": 6.44,
                                     "distance": 1,
                                     "backwardYaw": -164.09
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
                                     "yaw": 174.57,
                                     "distance": 1,
                                     "backwardYaw": -25.53
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
                                     "yaw": -78.27,
                                     "distance": 1,
                                     "backwardYaw": 88.55
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
                                     "yaw": 137.01,
                                     "distance": 1,
                                     "backwardYaw": -157.73
                                    }
                                   ],
                                   "pitch": 0,
                                   "partial": false,
                                   "vfov": 180,
                                   "hfovMax": 130,
                                   "hfov": 360,
                                   "hfovMin": 80,
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_hq.jpeg",
                                        "width": 6434,
                                        "height": 3217,
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ]
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B.jpeg",
                                        "width": 4002,
                                        "height": 2001
                                       }
                                      ]
                                     },
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_3C5AE2F0_2C57_D8C7_41A2_5E650B4F0658); this.setMediaBehaviour(this.playList_3C326144_2C57_D9CF_4176_0E2B2B44A454, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 174.57,
                                         "hfov": 5.88,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_0_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -7.02
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.88,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_0_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -7.02,
                                         "yaw": 174.57
                                        }
                                       ],
                                       "id": "overlay_0BB92A75_1AA1_956B_41AC_0351AD6A37FC",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC, this.camera_3C51B2E4_2C57_D8CF_41C2_35B0A51174AB); this.setMediaBehaviour(this.playList_3C2A4161_2C57_D9C9_41B3_50868F22D021, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 6.44,
                                         "hfov": 5.91,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_1_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -3.74
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.91,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_1_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -3.74,
                                         "yaw": 6.44
                                        }
                                       ],
                                       "id": "overlay_0B49D73A_1AA1_BCD9_41B4_8D43FC88B793",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_3C4452FC_2C57_D8BF_41BE_3A9B94DAB53D); this.setMediaBehaviour(this.playList_3C2D6167_2C57_D9C9_417D_093AB2D1E86A, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -78.27,
                                         "hfov": 5.91,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_2_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -3.14
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.91,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_2_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -3.14,
                                         "yaw": -78.27
                                        }
                                       ],
                                       "id": "overlay_0CC2B1E1_1AE1_4D00_41B1_ACF7784104D5",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0B7B5A27_1FEB_7426_4195_945554348391, this.camera_23A612D8_2C57_D8C7_41B9_015422795603); this.setMediaBehaviour(this.playList_3C29C160_2C57_D9C7_41BE_85A9943B5936, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 66.08,
                                         "hfov": 5.92,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_3_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": 0.87
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.92,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_3_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": 0.87,
                                         "yaw": 66.08
                                        }
                                       ],
                                       "id": "overlay_0AAAE042_1FD7_745F_419C_D12F60591797",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_3C703309_2C57_D959_41AF_FAC6C740F5FD); this.setMediaBehaviour(this.playList_3C37B146_2C57_D9CB_41B4_C527762E3BBD, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 137.01,
                                         "hfov": 5.91,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_4_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -2.79
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.91,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_4_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -2.79,
                                         "yaw": 137.01
                                        }
                                       ],
                                       "id": "overlay_07A64819_1FD9_93EA_41BA_D3C6BE78DFAB",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.showPopupPanoramaOverlay(this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, null, null, null, null, null, false)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -45.57,
                                         "hfov": 5.85,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_5_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": 8.64
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.85,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_5_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": 8.64,
                                         "yaw": -45.57
                                        }
                                       ],
                                       "id": "overlay_3AF637F8_20F8_9C2A_419C_75BB4D5E26FF",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "rotationY": 0,
                                       "showDuration": 500,
                                       "yaw": -45.57,
                                       "rotationZ": 0,
                                       "hideDuration": 500,
                                       "class": "PopupPanoramaOverlay",
                                       "id": "popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
                                       "popupMaxHeight": "95%",
                                       "rotationX": 0,
                                       "hideEasing": "cubic_out",
                                       "hfov": 5.85,
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "class": "ImageResourceLevel",
                                          "url": "media/popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7_0_0.jpg",
                                          "width": 850,
                                          "height": 625
                                         },
                                         {
                                          "class": "ImageResourceLevel",
                                          "url": "media/popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7_0_1.jpg",
                                          "width": 511,
                                          "height": 376
                                         }
                                        ]
                                       },
                                       "pitch": 8.64,
                                       "popupMaxWidth": "95%",
                                       "popupDistance": 100,
                                       "showEasing": "cubic_in"
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.setMediaBehaviour(this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E, 0, this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 21.44,
                                         "hfov": 4.82,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_6_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": 35.54
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 4.82,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_6_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": 35.54,
                                         "yaw": 21.44
                                        }
                                       ],
                                       "id": "overlay_02A28332_202F_943F_41B9_DA9F604BA994",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.showPopupPanoramaOverlay(this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3, null, null, null, null, false)",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -13.2,
                                         "hfov": 5.92,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_7_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -1.15
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.92,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_7_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -1.15,
                                         "yaw": -13.2
                                        }
                                       ],
                                       "id": "overlay_36D502D1_249E_F02C_41C1_D3ABB6A0C079",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "rotationY": 0,
                                       "showDuration": 500,
                                       "yaw": -13.2,
                                       "rotationZ": 0,
                                       "hideDuration": 500,
                                       "class": "PopupPanoramaOverlay",
                                       "id": "popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
                                       "popupMaxHeight": "95%",
                                       "rotationX": 0,
                                       "hideEasing": "cubic_out",
                                       "hfov": 5.92,
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "class": "ImageResourceLevel",
                                          "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_1.jpg",
                                          "width": 1024,
                                          "height": 682
                                         }
                                        ]
                                       },
                                       "pitch": -1.15,
                                       "popupMaxWidth": "95%",
                                       "popupDistance": 100,
                                       "showEasing": "cubic_in"
                                      },
                                      {
                                       "rotationY": 0,
                                       "showDuration": 500,
                                       "yaw": 34.02,
                                       "rotationZ": 0,
                                       "showEasing": "cubic_in",
                                       "class": "PopupPanoramaOverlay",
                                       "id": "popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
                                       "popupMaxHeight": "95%",
                                       "rotationX": 0,
                                       "autoplay": true,
                                       "loop": false,
                                       "hfov": 5.92,
                                       "pitch": -1.52,
                                       "popupMaxWidth": "95%",
                                       "hideEasing": "cubic_out",
                                       "popupDistance": 100,
                                       "hideDuration": 500,
                                       "video": {
                                        "class": "VideoResource",
                                        "width": 1280,
                                        "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4",
                                        "height": 720
                                       }
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, true) } else { this.showPopupMedia(this.window_27F355CB_2C4A_78D9_41AE_86261A432272, this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB, this.PlayList_3D439FF8_2C56_28C7_41B5_722DF5A62253, '95%', '95%', true, true) }",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 34.02,
                                         "hfov": 5.92,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_9_0_0_map.gif",
                                            "width": 16,
                                            "height": 16
                                           }
                                          ]
                                         },
                                         "pitch": -1.52
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.92,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_0_HS_9_0.png",
                                            "width": 105,
                                            "height": 105
                                           }
                                          ]
                                         },
                                         "pitch": -1.52,
                                         "yaw": 34.02
                                        }
                                       ],
                                       "id": "overlay_88A2D7C6_861C_6ECC_41C6_474A95487C7A",
                                       "data": {
                                        "label": "Image"
                                       },
                                       "enabledInCardboard": true
                                      }
                                     ],
                                     "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg"
                                    }
                                   ],
                                   "mapLocations": [
                                    {
                                     "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                     "x": 282.2,
                                     "angle": 0,
                                     "y": 306.25,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "thumbnailUrl": "media/panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_t.jpg"
                                  },
                                  "yaw": 88.55,
                                  "distance": 1,
                                  "backwardYaw": -78.27
                                 }
                                ],
                                "pitch": 0,
                                "partial": false,
                                "vfov": 180,
                                "hfovMax": 130,
                                "hfov": 360,
                                "hfovMin": 80,
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_hq.jpeg",
                                     "width": 6434,
                                     "height": 3217,
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ]
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246.jpeg",
                                     "width": 4002,
                                     "height": 2001
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_3C1C733C_2C57_D9BF_41A8_63841F0B0B16); this.setMediaBehaviour(this.playList_3C258158_2C57_D9C7_4187_365A41FC0BF2, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 88.55,
                                      "hfov": 5.92,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_0_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": -2.03
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.92,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_0_0.png",
                                         "width": 105,
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": -2.03,
                                      "yaw": 88.55
                                     }
                                    ],
                                    "id": "overlay_0F87F0EF_1AE3_4B00_41B1_E78788DE1BFA",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_3C13D32F_2C57_D959_4192_30B4B6B22B75); this.setMediaBehaviour(this.playList_3C24F15E_2C57_D9FB_41C3_86AAC736B557, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -94.64,
                                      "hfov": 5.9,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_1_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": -5.21
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.9,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_1_0.png",
                                         "width": 105,
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": -5.21,
                                      "yaw": -94.64
                                     }
                                    ],
                                    "id": "overlay_0FBACA90_1AE1_7F00_41A2_DEDEB5A439B2",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.showPopupPanoramaOverlay(this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, null, null, null, null, null, false)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -56.26,
                                      "hfov": 5.84,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_2_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": 9.36
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.84,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_2_0.png",
                                         "width": 105,
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": 9.36,
                                      "yaw": -56.26
                                     }
                                    ],
                                    "id": "overlay_3AE1C5BB_20F8_BC2E_41B5_14023BA58135",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "rotationY": 0,
                                    "showDuration": 500,
                                    "yaw": -56.26,
                                    "rotationZ": 0,
                                    "hideDuration": 500,
                                    "class": "PopupPanoramaOverlay",
                                    "id": "popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
                                    "popupMaxHeight": "95%",
                                    "rotationX": 0,
                                    "hideEasing": "cubic_out",
                                    "hfov": 5.84,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "class": "ImageResourceLevel",
                                       "url": "media/popup_3A305B90_20FB_94FB_4193_FEB3450979FC_0_0.jpg",
                                       "width": 807,
                                       "height": 752
                                      },
                                      {
                                       "class": "ImageResourceLevel",
                                       "url": "media/popup_3A305B90_20FB_94FB_4193_FEB3450979FC_0_1.jpg",
                                       "width": 512,
                                       "height": 477
                                      }
                                     ]
                                    },
                                    "pitch": 9.36,
                                    "popupMaxWidth": "95%",
                                    "popupDistance": 100,
                                    "showEasing": "cubic_in"
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.setMediaBehaviour(this.playList_3C2D7168_2C57_D9C7_41B7_0863265BB03C, 0, this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -148.61,
                                      "hfov": 5.27,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_3_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": 27.18
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.27,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_3_0.png",
                                         "width": 105,
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": 27.18,
                                      "yaw": -148.61
                                     }
                                    ],
                                    "id": "overlay_034C27D3_205F_BC7D_4190_BF1D51573EA7",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.showPopupPanoramaOverlay(this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0, null, null, null, null, false)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -50.51,
                                      "hfov": 5.88,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_4_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": -6.52
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.88,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_4_0.png",
                                         "width": 105,
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": -6.52,
                                      "yaw": -50.51
                                     }
                                    ],
                                    "id": "overlay_3690AC61_249D_B0EC_41C1_867DE64A0008",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "rotationY": 0,
                                    "showDuration": 500,
                                    "yaw": -50.51,
                                    "rotationZ": 0,
                                    "hideDuration": 500,
                                    "class": "PopupPanoramaOverlay",
                                    "id": "popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
                                    "popupMaxHeight": "95%",
                                    "rotationX": 0,
                                    "hideEasing": "cubic_out",
                                    "hfov": 5.88,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "class": "ImageResourceLevel",
                                       "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_1.jpg",
                                       "width": 1024,
                                       "height": 682
                                      }
                                     ]
                                    },
                                    "pitch": -6.52,
                                    "popupMaxWidth": "95%",
                                    "popupDistance": 100,
                                    "showEasing": "cubic_in"
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.showPopupPanoramaOverlay(this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC, null, null, null, null, false)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -76.59,
                                      "hfov": 5.92,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_5_0_0_map.gif",
                                         "width": 16,
                                         "height": 16
                                        }
                                       ]
                                      },
                                      "pitch": 1.45
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.92,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_0_HS_5_0.png",
                                         "width": 105,
                                         "height": 105
                                        }
                                       ]
                                      },
                                      "pitch": 1.45,
                                      "yaw": -76.59
                                     }
                                    ],
                                    "id": "overlay_3562069C_24AD_B054_41A5_FF17B3BEF357",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "rotationY": 0,
                                    "showDuration": 500,
                                    "yaw": -76.59,
                                    "rotationZ": 0,
                                    "hideDuration": 500,
                                    "class": "PopupPanoramaOverlay",
                                    "id": "popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
                                    "popupMaxHeight": "95%",
                                    "rotationX": 0,
                                    "hideEasing": "cubic_out",
                                    "hfov": 5.92,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "class": "ImageResourceLevel",
                                       "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_1.jpg",
                                       "width": 1024,
                                       "height": 682
                                      }
                                     ]
                                    },
                                    "pitch": 1.45,
                                    "popupMaxWidth": "95%",
                                    "popupDistance": 100,
                                    "showEasing": "cubic_in"
                                   }
                                  ],
                                  "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg"
                                 }
                                ],
                                "mapLocations": [
                                 {
                                  "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                                  "x": 157.28,
                                  "angle": 0,
                                  "y": 311.22,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_t.jpg"
                               },
                               "yaw": 179.05,
                               "distance": 1,
                               "backwardYaw": -94.64
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90"
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
                               "yaw": -90.48,
                               "distance": 1,
                               "backwardYaw": -117.3
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
                               "yaw": 79.43,
                               "distance": 1,
                               "backwardYaw": -95.46
                              }
                             ],
                             "pitch": 0,
                             "partial": false,
                             "vfov": 180,
                             "hfovMax": 130,
                             "hfov": 360,
                             "hfovMin": 80,
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_hq.jpeg",
                                  "width": 6434,
                                  "height": 3217,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ]
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7.jpeg",
                                  "width": 4002,
                                  "height": 2001
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246, this.camera_3E52F50C_2C57_D95F_41C5_DD0287D03425); this.setMediaBehaviour(this.playList_3C2D6167_2C57_D9C9_417D_093AB2D1E86A, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 179.05,
                                   "hfov": 5.9,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_0_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": -4.4
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.9,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_0_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": -4.4,
                                   "yaw": 179.05
                                  }
                                 ],
                                 "id": "overlay_0CCF7EED_1AE7_F700_4193_75795E2C9EA0",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525, this.camera_3E703536_2C57_D94B_41C1_3F0508CB0853); this.setMediaBehaviour(this.playList_3C27C15E_2C57_D9FB_41A9_F4451A0D6802, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 79.43,
                                   "hfov": 5.92,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_1_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": -0.99
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.92,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_1_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": -0.99,
                                   "yaw": 79.43
                                  }
                                 ],
                                 "id": "overlay_0C21DAC6_1AA3_5F03_4176_5DA7616EB4A4",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E, this.camera_3E40D523_2C57_D949_41AB_D91D27C82311); this.setMediaBehaviour(this.playList_3C27515E_2C57_D9FB_4166_BBAC26A565BA, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -90.48,
                                   "hfov": 5.92,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_2_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": -1.59
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.92,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_2_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": -1.59,
                                   "yaw": -90.48
                                  }
                                 ],
                                 "id": "overlay_38B9BC59_2028_AC6A_41AE_2C7905BA9A19",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B, null, null, null, null, false)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 32.81,
                                   "hfov": 5.82,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_3_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 10.53
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.82,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_3_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 10.53,
                                   "yaw": 32.81
                                  }
                                 ],
                                 "id": "overlay_3AE247CE_20F8_FC66_41BD_400C31C50BE9",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "rotationY": 0,
                                 "showDuration": 500,
                                 "yaw": 32.81,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "id": "popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
                                 "popupMaxHeight": "95%",
                                 "rotationX": 0,
                                 "hideEasing": "cubic_out",
                                 "hfov": 5.82,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "class": "ImageResourceLevel",
                                    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_1.jpg",
                                    "width": 1024,
                                    "height": 682
                                   }
                                  ]
                                 },
                                 "pitch": 10.53,
                                 "popupMaxWidth": "95%",
                                 "popupDistance": 100,
                                 "showEasing": "cubic_in"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.setMediaBehaviour(this.playList_3C2D7168_2C57_D9C7_41B7_0863265BB03C, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -84.07,
                                   "hfov": 5.34,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_4_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 25.67
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.34,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_4_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 25.67,
                                   "yaw": -84.07
                                  }
                                 ],
                                 "id": "overlay_04A14CB0_2058_AC3A_41B5_4627074CA778",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.setMediaBehaviour(this.playList_3C2DF168_2C57_D9C7_41B8_E2C0979610D8, 0, this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 76.78,
                                   "hfov": 5.1,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_5_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 30.52
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.1,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_5_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 30.52,
                                   "yaw": 76.78
                                  }
                                 ],
                                 "id": "overlay_04CC30D3_2059_947D_41A8_BC5DCD223313",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32CC759C_24AE_9054_419F_511B2D533327, null, null, null, null, false)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -32.7,
                                   "hfov": 5.66,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_6_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 17.08
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.66,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_6_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 17.08,
                                   "yaw": -32.7
                                  }
                                 ],
                                 "id": "overlay_369A2505_249A_9034_41B6_15BA718D5598",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "rotationY": 0,
                                 "showDuration": 500,
                                 "yaw": -32.7,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "id": "popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
                                 "popupMaxHeight": "95%",
                                 "rotationX": 0,
                                 "hideEasing": "cubic_out",
                                 "hfov": 5.66,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "class": "ImageResourceLevel",
                                    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_1.jpg",
                                    "width": 1024,
                                    "height": 580
                                   }
                                  ]
                                 },
                                 "pitch": 17.08,
                                 "popupMaxWidth": "95%",
                                 "popupDistance": 100,
                                 "showEasing": "cubic_in"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760, null, null, null, null, false)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 101.53,
                                   "hfov": 5.91,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_7_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": -4.09
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.91,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_7_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": -4.09,
                                   "yaw": 101.53
                                  }
                                 ],
                                 "id": "overlay_36DB0F2E_249A_9074_41B4_8E4380CB0F7A",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "rotationY": 0,
                                 "showDuration": 500,
                                 "yaw": 101.53,
                                 "rotationZ": 0,
                                 "hideDuration": 500,
                                 "class": "PopupPanoramaOverlay",
                                 "id": "popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
                                 "popupMaxHeight": "95%",
                                 "rotationX": 0,
                                 "hideEasing": "cubic_out",
                                 "hfov": 5.91,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "class": "ImageResourceLevel",
                                    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_1.jpg",
                                    "width": 1024,
                                    "height": 682
                                   }
                                  ]
                                 },
                                 "pitch": -4.09,
                                 "popupMaxWidth": "95%",
                                 "popupDistance": 100,
                                 "showEasing": "cubic_in"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -58.3,
                                   "hfov": 5.89,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_10_0_0_map.gif",
                                      "width": 16,
                                      "height": 16
                                     }
                                    ]
                                   },
                                   "pitch": 5.67
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.89,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_0_HS_10_0.png",
                                      "width": 105,
                                      "height": 105
                                     }
                                    ]
                                   },
                                   "pitch": 5.67,
                                   "yaw": -58.3
                                  }
                                 ],
                                 "id": "overlay_A50C052B_8679_77AC_41C1_447A80B2F13D",
                                 "data": {
                                  "label": "Image"
                                 }
                                }
                               ],
                               "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg"
                              }
                             ],
                             "mapLocations": [
                              {
                               "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                               "x": 89.35,
                               "angle": 266.01,
                               "y": 307.31,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_t.jpg"
                            },
                            "yaw": -117.3,
                            "distance": 1,
                            "backwardYaw": -90.48
                           }
                          ],
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "hfovMax": 130,
                          "hfov": 360,
                          "hfovMin": 80,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_hq.jpeg",
                               "width": 6434,
                               "height": 3217,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ]
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E.jpeg",
                               "width": 4002,
                               "height": 2001
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7, this.camera_3EE195EA_2C57_D8DB_41C5_75242F6C5276); this.setMediaBehaviour(this.playList_3C24F15E_2C57_D9FB_41C3_86AAC736B557, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -117.3,
                                "hfov": 5.9,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_0_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": -4.38
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.9,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_0_0.png",
                                   "width": 105,
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -4.38,
                                "yaw": -117.3
                               }
                              ],
                              "id": "overlay_398BC00D_2028_B3E5_41A1_4D2435BCEAF9",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.setMediaBehaviour(this.playList_3C2D7168_2C57_D9C7_41B7_0863265BB03C, 0, this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 62.4,
                                "hfov": 3.6,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_1_0_0_map.gif",
                                   "width": 16,
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": 52.59
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 3.6,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_1_0.png",
                                   "width": 105,
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": 52.59,
                                "yaw": 62.4
                               }
                              ],
                              "id": "overlay_07984367_2057_9426_41B6_282E6C99CB32",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.media_0B011E64_2079_6C5B_41B4_7BE6EA1F9FB7, this.camera_5564A635_5884_E26A_41CD_F65940AE1D0F); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.92,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_0_HS_2_0.png",
                                   "width": 105,
                                   "height": 105
                                  }
                                 ]
                                },
                                "pitch": -2.4,
                                "yaw": -144.51
                               }
                              ],
                              "id": "overlay_0B2ACEE1_2079_EC5D_41A5_63855793A591",
                              "data": {
                               "label": "Image"
                              }
                             }
                            ],
                            "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg"
                           }
                          ],
                          "mapLocations": [
                           {
                            "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                            "x": 96.55,
                            "angle": 122.43,
                            "y": 434.63,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_t.jpg"
                         }
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
                         "yaw": -23.17,
                         "distance": 1,
                         "backwardYaw": 154.31
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "hfovMax": 130,
                       "hfov": 360,
                       "hfovMin": 80,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_hq.jpeg",
                            "width": 6434,
                            "height": 3217,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90.jpeg",
                            "width": 4002,
                            "height": 2001
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8, this.camera_3DFF849B_2C57_DF79_41BF_259ED9D4D7C0); this.setMediaBehaviour(this.playList_3C352145_2C57_D9C9_41B2_A81A867C134C, 0, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -23.17,
                             "hfov": 5.81,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_0_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": 11.26
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.81,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_0_0.png",
                                "width": 105,
                                "height": 105
                               }
                              ]
                             },
                             "pitch": 11.26,
                             "yaw": -23.17
                            }
                           ],
                           "id": "overlay_8D2BE4DA_820A_3852_41C4_953F6BBC31A7",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F, this.camera_3DC36481_2C57_DF49_41B6_52370D7848A4); this.setMediaBehaviour(this.playList_3C2DF168_2C57_D9C7_41B8_E2C0979610D8, 0, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -121.06,
                             "hfov": 5.83,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_1_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": 9.97
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.83,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_1_0.png",
                                "width": 105,
                                "height": 105
                               }
                              ]
                             },
                             "pitch": 9.97,
                             "yaw": -121.06
                            }
                           ],
                           "id": "overlay_8D2BF4DA_820A_3852_41D1_6DA1F4580975",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94, this.camera_3DF1848E_2C57_DF5B_41AD_C91AC7B856D1); this.setMediaBehaviour(this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E, 0, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -73.9,
                             "hfov": 5.82,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_2_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": 10.77
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.82,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_2_0.png",
                                "width": 105,
                                "height": 105
                               }
                              ]
                             },
                             "pitch": 10.77,
                             "yaw": -73.9
                            }
                           ],
                           "id": "overlay_8D2BD4DA_820A_3852_41BB_98EAF3E35F8D",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.setMediaBehaviour(this.playList_3C27515E_2C57_D9FB_4166_BBAC26A565BA, 0, this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -91.23,
                             "hfov": 8.7,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_5_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": -72.9
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.7,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_5_0.png",
                                "width": 529,
                                "height": 529
                               }
                              ]
                             },
                             "pitch": -72.9,
                             "yaw": -91.23
                            }
                           ],
                           "id": "overlay_8D2B14DF_820A_3852_41BE_9EA51FD889E9",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, false, 0, null, null, false)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -125.38,
                             "hfov": 4.83,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_7_0_0_map.gif",
                                "width": 16,
                                "height": 16
                               }
                              ]
                             },
                             "pitch": -35.34
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 4.83,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_0_HS_7_0.png",
                                "width": 105,
                                "height": 105
                               }
                              ]
                             },
                             "pitch": -35.34,
                             "yaw": -125.38
                            }
                           ],
                           "id": "overlay_A51288CA_8678_FEEC_41D4_86498750207E",
                           "data": {
                            "label": "Image"
                           }
                          }
                         ],
                         "thumbnailUrl": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_t.jpg"
                        }
                       ],
                       "mapLocations": [
                        {
                         "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                         "x": 95.59,
                         "angle": 123.3,
                         "y": 453.51,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_t.jpg"
                      },
                      "yaw": 154.31,
                      "distance": 1,
                      "backwardYaw": -23.17
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "hfovMax": 130,
                    "hfov": 360,
                    "hfovMin": 80,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_hq.jpeg",
                         "width": 6434,
                         "height": 3217,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8.jpeg",
                         "width": 4002,
                         "height": 2001
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90, this.camera_23BD32CC_2C57_D8DF_41BB_13FC7306A1E8); this.setMediaBehaviour(this.playList_3C2D7168_2C57_D9C7_41B7_0863265BB03C, 0, this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 154.31,
                          "hfov": 5.85,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_0_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 8.98
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.85,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_0_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": 8.98,
                          "yaw": 154.31
                         }
                        ],
                        "id": "overlay_8C913D20_820E_09EE_41C0_C2A48E7AC870",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94, this.camera_23B3A2BF_2C57_D8B9_41AD_10C9DACD70A4); this.setMediaBehaviour(this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E, 0, this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -104.82,
                          "hfov": 5.89,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_1_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 5.81
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.89,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_1_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": 5.81,
                          "yaw": -104.82
                         }
                        ],
                        "id": "overlay_8C917D20_820E_09EE_41C3_5AECB06FB2EA",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F, this.camera_238652B3_2C57_DB49_41C1_9B35FE9FD2CB); this.setMediaBehaviour(this.playList_3C2DF168_2C57_D9C7_41B8_E2C0979610D8, 0, this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -157.61,
                          "hfov": 5.89,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_2_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 5.93
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.89,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_2_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": 5.93,
                          "yaw": -157.61
                         }
                        ],
                        "id": "overlay_8C908D20_820E_09EE_41B5_1BB84CF0B784",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 0)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -22.77,
                          "hfov": 8.47,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_3_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -73.38
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.47,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_3_0.png",
                             "width": 529,
                             "height": 529
                            }
                           ]
                          },
                          "pitch": -73.38,
                          "yaw": -22.77
                         }
                        ],
                        "id": "overlay_8C90BD20_820E_09EE_41A7_39485D48F171",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80, null, null, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -54.43,
                          "hfov": 6.74,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_5_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -24.34
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.74,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_5_0.png",
                             "width": 132,
                             "height": 132
                            }
                           ]
                          },
                          "pitch": -24.34,
                          "yaw": -54.43
                         }
                        ],
                        "id": "overlay_8C90ED20_820E_09EE_41BB_BDC80546ABA8",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "rotationY": 0,
                        "showDuration": 500,
                        "yaw": -54.43,
                        "rotationZ": 0,
                        "hideDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "id": "popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
                        "popupMaxHeight": "95%",
                        "rotationX": 0,
                        "hideEasing": "cubic_out",
                        "hfov": 6.74,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_1.jpg",
                           "width": 1024,
                           "height": 639
                          }
                         ]
                        },
                        "pitch": -24.34,
                        "popupMaxWidth": "95%",
                        "popupDistance": 100,
                        "showEasing": "cubic_in"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, false, 0, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -48.83,
                          "hfov": 6.11,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_8_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -34.37
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.11,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_8_0.png",
                             "width": 132,
                             "height": 132
                            }
                           ]
                          },
                          "pitch": -34.37,
                          "yaw": -48.83
                         }
                        ],
                        "id": "overlay_A5EE1590_867F_577C_41D1_C3506CB27C9D",
                        "data": {
                         "label": "Image"
                        }
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, true, 0, null, null, false); this.setComponentVisibility(this.Image_97A8F4AB_874A_EB6D_41DC_914C3E0931EC, true, 0, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -44.16,
                          "hfov": 5.41,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_9_0_0_map.gif",
                             "width": 16,
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -24.05
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.41,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_0_HS_9_0.png",
                             "width": 105,
                             "height": 105
                            }
                           ]
                          },
                          "pitch": -24.05,
                          "yaw": -44.16
                         }
                        ],
                        "id": "overlay_AA422BCD_8638_D2E5_41BC_E7B12B68AC83",
                        "data": {
                         "label": "Image"
                        }
                       }
                      ],
                      "thumbnailUrl": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_t.jpg"
                     }
                    ],
                    "mapLocations": [
                     {
                      "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                      "x": 276.69,
                      "angle": 110.05,
                      "y": 467.93,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_8C911D20_820E_09EE_41C0_C274C66438F8_t.jpg"
                   },
                   "yaw": 164.85,
                   "distance": 1,
                   "backwardYaw": -157.61
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
                   "yaw": 84.52,
                   "distance": 1,
                   "backwardYaw": 128.57
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
                   "yaw": 125.87,
                   "distance": 1,
                   "backwardYaw": -121.06
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5"
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "hfovMax": 130,
                 "hfov": 360,
                 "hfovMin": 80,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_hq.jpeg",
                      "width": 6434,
                      "height": 3217,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F.jpeg",
                      "width": 4002,
                      "height": 2001
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.setMediaBehaviour(this.playList_3CC1E174_2C57_D9CF_41A0_B5F2992828A2, 0, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 82.6,
                       "hfov": 5.66,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_3_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -50.37
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.66,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_3_0.png",
                          "width": 158,
                          "height": 158
                         }
                        ]
                       },
                       "pitch": -50.37,
                       "yaw": 82.6
                      }
                     ],
                     "id": "overlay_92D34187_820A_38B2_41C6_4223C787B441",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_25AB8A34_3513_DE40_41C8_119007832823, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_232B696E_352D_BAC0_41B1_E8DFF9648419, null, null, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 53.72,
                       "hfov": 8.16,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_4_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -46.43
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.16,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_4_0.png",
                          "width": 211,
                          "height": 211
                         }
                        ]
                       },
                       "pitch": -46.43,
                       "yaw": 53.72
                      }
                     ],
                     "id": "overlay_92D35187_820A_38B2_41D5_8D1D32A1EB8A",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "rotationY": 0,
                     "showDuration": 500,
                     "yaw": 53.72,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_25AB8A34_3513_DE40_41C8_119007832823",
                     "popupMaxHeight": "95%",
                     "rotationX": 0,
                     "hideEasing": "cubic_out",
                     "hfov": 8.16,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_1.jpg",
                        "width": 1024,
                        "height": 573
                       }
                      ]
                     },
                     "pitch": -46.43,
                     "popupMaxWidth": "95%",
                     "popupDistance": 100,
                     "showEasing": "cubic_in"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94, this.camera_23FF9284_2C57_DB4F_4192_0CA453DC2D33); this.setMediaBehaviour(this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E, 0, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 84.52,
                       "hfov": 5.86,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_5_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": 8.19
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.86,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_5_0.png",
                          "width": 105,
                          "height": 105
                         }
                        ]
                       },
                       "pitch": 8.19,
                       "yaw": 84.52
                      }
                     ],
                     "id": "overlay_88FE142D_861C_215C_41CC_731DBD310429",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90, this.camera_23E8E290_2C57_DB47_41B3_6FCA117E7AD6); this.setMediaBehaviour(this.playList_3C2D7168_2C57_D9C7_41B7_0863265BB03C, 0, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 125.87,
                       "hfov": 5.84,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_6_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": 9.37
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.84,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_6_0.png",
                          "width": 105,
                          "height": 105
                         }
                        ]
                       },
                       "pitch": 9.37,
                       "yaw": 125.87
                      }
                     ],
                     "id": "overlay_8891C9B0_861F_E344_41DD_9B7FCBCFE18B",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8, this.camera_23F52278_2C57_DBC7_41C2_4B21BBA931C7); this.setMediaBehaviour(this.playList_3C352145_2C57_D9C9_41B2_A81A867C134C, 0, this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 164.85,
                       "hfov": 5.84,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_7_0_0_map.gif",
                          "width": 16,
                          "height": 16
                         }
                        ]
                       },
                       "pitch": 9.21
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.84,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_0_HS_7_0.png",
                          "width": 105,
                          "height": 105
                         }
                        ]
                       },
                       "pitch": 9.21,
                       "yaw": 164.85
                      }
                     ],
                     "id": "overlay_88AE510C_861C_2343_41E0_75B9A97850D7",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_t.jpg"
                  }
                 ],
                 "mapLocations": [
                  {
                   "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                   "x": 14.6,
                   "angle": 10.14,
                   "y": 103.96,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_t.jpg"
                },
                "yaw": 128.57,
                "distance": 1,
                "backwardYaw": 84.52
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
                "yaw": 76.9,
                "distance": 1,
                "backwardYaw": -73.9
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E"
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
                "yaw": 36.44,
                "distance": 1,
                "backwardYaw": -104.82
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "hfovMax": 130,
              "hfov": 360,
              "hfovMin": 80,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_hq.jpeg",
                   "width": 6434,
                   "height": 3217,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94.jpeg",
                   "width": 4002,
                   "height": 2001
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8, this.camera_3EF205DD_2C57_D8F9_41BC_44AB9DF2449F); this.setMediaBehaviour(this.playList_3C352145_2C57_D9C9_41B2_A81A867C134C, 0, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 36.44,
                    "hfov": 5.86,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 8.45
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.86,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_0_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": 8.45,
                    "yaw": 36.44
                   }
                  ],
                  "id": "overlay_8C8403C2_820D_F8B2_41CF_C1FCA5A3BC27",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90, this.camera_3EC285D1_2C57_D8C9_4196_AA0BEEC6A0F3); this.setMediaBehaviour(this.playList_3C2D7168_2C57_D9C7_41B7_0863265BB03C, 0, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 76.9,
                    "hfov": 5.85,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 8.85
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.85,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_1_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": 8.85,
                    "yaw": 76.9
                   }
                  ],
                  "id": "overlay_8C8413C2_820D_F8B2_419E_DB601EA765BE",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F, this.camera_3ED565C4_2C57_D8CF_419E_6E9A5702B3F3); this.setMediaBehaviour(this.playList_3C2DF168_2C57_D9C7_41B8_E2C0979610D8, 0, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 128.57,
                    "hfov": 5.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 9.2
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.84,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_2_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": 9.2,
                    "yaw": 128.57
                   }
                  ],
                  "id": "overlay_8C8423C2_820D_F8B2_41D9_2B21DD6CE7E6",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setMediaBehaviour(this.playList_3C29115F_2C57_D9F9_41A9_C6A7444F6505, 0, this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 39.71,
                    "hfov": 5.16,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_3_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -29.28
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.16,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_3_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -29.28,
                    "yaw": 39.71
                   }
                  ],
                  "id": "overlay_8C8433C2_820D_F8B2_41C6_1AA68E1C515F",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, false, 0, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 10.63,
                    "hfov": 5.61,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_6_0_0_map.gif",
                       "width": 16,
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -18.62
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.61,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_0_HS_6_0.png",
                       "width": 105,
                       "height": 105
                      }
                     ]
                    },
                    "pitch": -18.62,
                    "yaw": 10.63
                   }
                  ],
                  "id": "overlay_A510F1F8_867F_2EAC_41D5_64A5F70A77F5",
                  "data": {
                   "label": "Image"
                  }
                 }
                ],
                "thumbnailUrl": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_t.jpg"
               }
              ],
              "mapLocations": [
               {
                "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
                "x": 282.62,
                "angle": 145.72,
                "y": 127.13,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_t.jpg"
             }
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
             "yaw": 41.3,
             "distance": 1,
             "backwardYaw": 150.05
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
             "yaw": -25.53,
             "distance": 1,
             "backwardYaw": 174.57
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfovMax": 130,
           "hfov": 360,
           "hfovMin": 80,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_hq.jpeg",
                "width": 6434,
                "height": 3217,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677.jpeg",
                "width": 4002,
                "height": 2001
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_3E7FE54D_2C57_D9D9_41C5_C7AC152EF4F1); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 150.13,
                 "hfov": 5.92,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 0.8
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.92,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_0_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": 0.8,
                 "yaw": 150.13
                }
               ],
               "id": "overlay_141C837B_1A3F_A892_41B1_D62D2C270786",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_3E6CB55F_2C57_D9F9_41C4_6F8732B671ED); this.setMediaBehaviour(this.playList_3C37B146_2C57_D9CB_41B4_C527762E3BBD, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 41.3,
                 "hfov": 5.92,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_1_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -2.08
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.92,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_1_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": -2.08,
                 "yaw": 41.3
                }
               ],
               "id": "overlay_14FCE98C_1A38_D876_41A2_FBAB1A82AA38",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_3E1A9577_2C57_D9C9_4192_B72DC2B917B8); this.setMediaBehaviour(this.playList_3C258158_2C57_D9C7_4187_365A41FC0BF2, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -25.53,
                 "hfov": 5.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -5.35
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.9,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_2_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": -5.35,
                 "yaw": -25.53
                }
               ],
               "id": "overlay_1504A38A_1AA1_9BB9_41A4_59E6AD12A17D",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59, null, null, null, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 81.82,
                 "hfov": 5.92,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_3_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 0.15
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.92,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_3_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": 0.15,
                 "yaw": 81.82
                }
               ],
               "id": "overlay_3A3F00CC_20F8_946A_41A7_92092B2FF4A5",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "rotationY": 0,
               "showDuration": 500,
               "yaw": 81.82,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "hideEasing": "cubic_out",
               "hfov": 5.92,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_1.jpg",
                  "width": 1024,
                  "height": 682
                 }
                ]
               },
               "pitch": 0.15,
               "popupMaxWidth": "95%",
               "popupDistance": 100,
               "showEasing": "cubic_in"
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.setMediaBehaviour(this.playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E, 0, this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -16.74,
                 "hfov": 5.21,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_4_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 28.31
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.21,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_0_HS_4_0.png",
                    "width": 105,
                    "height": 105
                   }
                  ]
                 },
                 "pitch": 28.31,
                 "yaw": -16.74
                }
               ],
               "id": "overlay_019BD876_2028_9426_4190_6C82CB626EB3",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg"
            }
           ],
           "mapLocations": [
            {
             "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
             "x": 270.64,
             "angle": 0,
             "y": 362.11,
             "class": "PanoramaMapLocation"
            }
           ],
           "thumbnailUrl": "media/panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_t.jpg"
          },
          "yaw": -19.33,
          "distance": 1,
          "backwardYaw": 150.13
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "Cartago City",
           "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
             "yaw": -144.74,
             "distance": 1,
             "backwardYaw": 159.92
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "cardboardMenu": {
            "rollOverFontColor": "#FFFFFF",
            "fontFamily": "Arial",
            "backgroundColor": "#404040",
            "children": [
             {
              "class": "MenuItem",
              "label": "Main Entrance",
              "click": "this.mainPlayList.set('selectedIndex', 0)"
             },
             {
              "class": "MenuItem",
              "label": "Lobby",
              "click": "this.mainPlayList.set('selectedIndex', 1)"
             },
             {
              "class": "MenuItem",
              "label": "Restrooms",
              "click": "this.mainPlayList.set('selectedIndex', 2)"
             },
             {
              "class": "MenuItem",
              "label": "Main Floor",
              "click": "this.mainPlayList.set('selectedIndex', 3)"
             },
             {
              "class": "MenuItem",
              "label": "Dining Room",
              "click": "this.mainPlayList.set('selectedIndex', 4)"
             },
             {
              "class": "MenuItem",
              "label": "Conference Room",
              "click": "this.mainPlayList.set('selectedIndex', 5)"
             },
             {
              "class": "MenuItem",
              "label": "Empty Shell",
              "click": "this.mainPlayList.set('selectedIndex', 6)"
             },
             {
              "class": "MenuItem",
              "label": "Parking Garage",
              "click": "this.mainPlayList.set('selectedIndex', 7)"
             },
             {
              "class": "MenuItem",
              "label": "3_1",
              "click": "this.mainPlayList.set('selectedIndex', 8)"
             },
             {
              "class": "MenuItem",
              "label": "Cartago City",
              "click": "this.mainPlayList.set('selectedIndex', 9)"
             },
             {
              "class": "MenuItem",
              "label": "9",
              "click": "this.mainPlayList.set('selectedIndex', 10)"
             },
             {
              "class": "MenuItem",
              "label": "14",
              "click": "this.mainPlayList.set('selectedIndex', 11)"
             },
             {
              "class": "MenuItem",
              "label": "18",
              "click": "this.mainPlayList.set('selectedIndex', 12)"
             },
             {
              "class": "MenuItem",
              "label": "20",
              "click": "this.mainPlayList.set('selectedIndex', 13)"
             },
             {
              "class": "MenuItem",
              "label": "19",
              "click": "this.mainPlayList.set('selectedIndex', 14)"
             },
             {
              "class": "MenuItem",
              "label": "parking2",
              "click": "this.mainPlayList.set('selectedIndex', 15)"
             },
             {
              "class": "MenuItem",
              "label": "asensores",
              "click": "this.mainPlayList.set('selectedIndex', 16)"
             }
            ],
            "label": "Media",
            "id": "Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
            "opacity": 0.4,
            "class": "Menu",
            "selectedFontColor": "#FFFFFF",
            "rollOverOpacity": 0.8,
            "fontColor": "#FFFFFF",
            "selectedBackgroundColor": "#202020",
            "rollOverBackgroundColor": "#000000"
           },
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 80,
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714, this.camera_232DE233_2C57_DB49_41C2_99D9EB7B27C8); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.9,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_7_0.png",
                    "width": 118,
                    "height": 118
                   }
                  ]
                 },
                 "pitch": 1.37,
                 "yaw": -144.74
                }
               ],
               "id": "overlay_E5CD8369_EF1C_25BA_41E1_3E44CA6907EB",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, null, null, null, null, null, false)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.24,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_5_0.png",
                    "width": 122,
                    "height": 106
                   }
                  ]
                 },
                 "pitch": 0.52,
                 "yaw": 85.84
                }
               ],
               "id": "overlay_E5DFA8E5_EF2C_64AA_41E7_45A9551591C4",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, null, null, null, null, null, false)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.24,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_4_0.png",
                    "width": 122,
                    "height": 104
                   }
                  ]
                 },
                 "pitch": 0.27,
                 "yaw": 43.77
                }
               ],
               "id": "overlay_E420ED42_EF2C_5DE9_41E2_85CF49AA9D29",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575, null, null, null, null, false)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.64,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_3_0.png",
                    "width": 99,
                    "height": 104
                   }
                  ]
                 },
                 "pitch": 7.67,
                 "yaw": -73.96
                }
               ],
               "id": "overlay_E5C47084_EF2D_E36A_41D0_6FB86F1AA8C0",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "rotationY": 0,
               "showDuration": 500,
               "yaw": 43.77,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "hideEasing": "cubic_out",
               "hfov": 8.24,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6_0_0.jpg",
                  "width": 787,
                  "height": 552
                 },
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6_0_1.jpg",
                  "width": 512,
                  "height": 359
                 }
                ]
               },
               "pitch": 0.27,
               "popupMaxWidth": "95%",
               "popupDistance": 100,
               "showEasing": "cubic_in"
              },
              {
               "rotationY": 0,
               "showDuration": 500,
               "yaw": 85.84,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "hideEasing": "cubic_out",
               "hfov": 8.24,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C_0_0.jpg",
                  "width": 800,
                  "height": 535
                 },
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C_0_1.jpg",
                  "width": 512,
                  "height": 342
                 }
                ]
               },
               "pitch": 0.52,
               "popupMaxWidth": "95%",
               "popupDistance": 100,
               "showEasing": "cubic_in"
              },
              {
               "rotationY": 0,
               "showDuration": 500,
               "yaw": -73.96,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "hideEasing": "cubic_out",
               "hfov": 6.64,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_1.jpg",
                  "width": 1024,
                  "height": 748
                 }
                ]
               },
               "pitch": 7.67,
               "popupMaxWidth": "95%",
               "popupDistance": 100,
               "showEasing": "cubic_in"
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -132.82,
                 "hfov": 17.78,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_2_0_map.gif",
                    "width": 53,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 1.59
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_2_0.png",
                    "width": 265,
                    "height": 80
                   }
                  ]
                 },
                 "pitch": 1.59,
                 "yaw": -132.82,
                 "hfov": 17.78,
                 "distance": 50
                }
               ],
               "id": "overlay_E37E9453_EF2C_E3EE_41CE_DD0115CEB1E5",
               "data": {
                "label": "La Lima"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 61,
                 "hfov": 27.31,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_1_0_map.gif",
                    "width": 80,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 0.49
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_1_0.png",
                    "width": 407,
                    "height": 81
                   }
                  ]
                 },
                 "pitch": 0.49,
                 "yaw": 61,
                 "hfov": 27.31,
                 "distance": 50
                }
               ],
               "id": "overlay_E29702E5_EF2C_24AA_41DF_D1E8119A0A3F",
               "data": {
                "label": "TEC University"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053, null, null, null, null, false)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.66,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_0_0.png",
                    "width": 99,
                    "height": 99
                   }
                  ]
                 },
                 "pitch": -5.64,
                 "yaw": -123.25
                }
               ],
               "id": "overlay_E4BB9F35_EF34_3DAA_41DC_06016B04BD96",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "rotationY": 0,
               "showDuration": 500,
               "yaw": -123.25,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "hideEasing": "cubic_out",
               "hfov": 6.66,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_1.jpg",
                  "width": 1024,
                  "height": 632
                 }
                ]
               },
               "pitch": -5.64,
               "popupMaxWidth": "95%",
               "popupDistance": 100,
               "showEasing": "cubic_in"
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -116.34,
                 "hfov": 8.66,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_11_0_map.gif",
                    "width": 24,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -5.8
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_11_0.png",
                    "width": 129,
                    "height": 85
                   }
                  ]
                 },
                 "pitch": -5.8,
                 "yaw": -116.34,
                 "hfov": 8.66,
                 "distance": 50
                }
               ],
               "id": "overlay_E63D12C8_F662_39DB_4170_7EF640601D86",
               "data": {
                "label": "INA"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 97.38,
                 "hfov": 15.83,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_10_0_map.gif",
                    "width": 52,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 1.23
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_10_0.png",
                    "width": 236,
                    "height": 72
                   }
                  ]
                 },
                 "pitch": 1.23,
                 "yaw": 97.38,
                 "hfov": 15.83,
                 "distance": 50
                }
               ],
               "id": "overlay_E75D89D8_F662_2BFB_41BB_D9250A0A17F6",
               "data": {
                "label": "Basilica"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -64.87,
                 "hfov": 12.22,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_9_0_map.gif",
                    "width": 39,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 7.99
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_9_0.png",
                    "width": 184,
                    "height": 74
                   }
                  ]
                 },
                 "pitch": 7.99,
                 "yaw": -64.87,
                 "hfov": 12.22,
                 "distance": 50
                }
               ],
               "id": "overlay_E6D140FE_F662_D9B7_41ED_B6DDE5F11AEE",
               "data": {
                "label": "Irazu"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D, null, null, null, null, false)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.7,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_12_0.png",
                    "width": 99,
                    "height": 104
                   }
                  ]
                 },
                 "pitch": -0.52,
                 "yaw": -105.77
                }
               ],
               "id": "overlay_39C6394A_1091_C543_41A0_4400E90D35FB",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -104.29,
                 "hfov": 19.47,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_13_0_map.gif",
                    "width": 63,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 3.74
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_13_0.png",
                    "width": 291,
                    "height": 73
                   }
                  ]
                 },
                 "pitch": 3.74,
                 "yaw": -104.29,
                 "hfov": 19.47,
                 "distance": 50
                }
               ],
               "id": "overlay_381D894C_1071_C540_41AF_D6F0E2E79C30",
               "data": {
                "label": "Bus Station"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_3BBE3C5B_107F_C340_4178_756995F5135C, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, null, null, null, null, null, false)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.69,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_14_0.png",
                    "width": 99,
                    "height": 103
                   }
                  ]
                 },
                 "pitch": -2.91,
                 "yaw": -99.48
                }
               ],
               "id": "overlay_3A9BE60C_1071_4EC7_41AC_F23BD1106998",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -85.73,
                 "hfov": 22.05,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_15_0_map.gif",
                    "width": 66,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -2.84
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_15_0.png",
                    "width": 329,
                    "height": 79
                   }
                  ]
                 },
                 "pitch": -2.84,
                 "yaw": -85.73,
                 "hfov": 22.05,
                 "distance": 50
                }
               ],
               "id": "overlay_3BFABA4C_1071_4740_4194_C4FC9991EEE4",
               "data": {
                "label": "Train Station"
               },
               "enabledInCardboard": true
              },
              {
               "rotationY": 0,
               "showDuration": 500,
               "yaw": -105.77,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "hideEasing": "cubic_out",
               "hfov": 6.7,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_1.jpg",
                  "width": 1024,
                  "height": 767
                 }
                ]
               },
               "pitch": -0.52,
               "popupMaxWidth": "95%",
               "popupDistance": 100,
               "showEasing": "cubic_in"
              },
              {
               "rotationY": 0,
               "showDuration": 500,
               "yaw": -99.48,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_3BBE3C5B_107F_C340_4178_756995F5135C",
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "hideEasing": "cubic_out",
               "hfov": 6.69,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_3BBE3C5B_107F_C340_4178_756995F5135C_0_0.jpg",
                  "width": 941,
                  "height": 641
                 },
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_3BBE3C5B_107F_C340_4178_756995F5135C_0_1.jpg",
                  "width": 511,
                  "height": 348
                 }
                ]
               },
               "pitch": -2.91,
               "popupMaxWidth": "95%",
               "popupDistance": 100,
               "showEasing": "cubic_in"
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, null, null, null, null, null, false)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.69,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_16_0.png",
                    "width": 99,
                    "height": 103
                   }
                  ]
                 },
                 "pitch": 2,
                 "yaw": -80.67
                }
               ],
               "id": "overlay_212C2018_11B1_C2CF_4164_CA1A96AC721E",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -69.51,
                 "hfov": 17.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_17_0_map.gif",
                    "width": 59,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 1.99
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_0_HS_17_0.png",
                    "width": 255,
                    "height": 69
                   }
                  ]
                 },
                 "pitch": 1.99,
                 "yaw": -69.51,
                 "hfov": 17.1,
                 "distance": 50
                }
               ],
               "id": "overlay_21F8CB1B_11B7_C6C1_41A4_790E87B46214",
               "data": {
                "label": "COVAO"
               },
               "enabledInCardboard": true
              },
              {
               "rotationY": 0,
               "showDuration": 500,
               "yaw": -80.67,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
               "popupMaxHeight": "95%",
               "rotationX": 0,
               "hideEasing": "cubic_out",
               "hfov": 6.69,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_209897EC_11B3_4D40_41A2_837DB50E3A59_0_0.jpg",
                  "width": 960,
                  "height": 720
                 },
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_209897EC_11B3_4D40_41A2_837DB50E3A59_0_1.jpg",
                  "width": 512,
                  "height": 384
                 }
                ]
               },
               "pitch": 2,
               "popupMaxWidth": "95%",
               "popupDistance": 100,
               "showEasing": "cubic_in"
              }
             ],
             "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg",
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_hq.jpeg",
                "width": 10224,
                "height": 1704,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B.jpeg",
                "width": 6144,
                "height": 1024
               }
              ]
             }
            }
           ],
           "mapLocations": [
            {
             "map": {
              "minimumZoomFactor": 0.5,
              "fieldOfViewOverlayInsideColor": "#000000",
              "class": "Map",
              "label": "Costa-Rica-Map",
              "id": "map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
              "width": 500,
              "fieldOfViewOverlayRadiusScale": 0.33,
              "maximumZoomFactor": 1.2,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C.png",
                 "width": 500,
                 "height": 563
                }
               ]
              },
              "scaleMode": "fit_inside",
              "overlays": [
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 9)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 280.3,
                 "height": 50,
                 "y": 228.1,
                 "class": "HotspotMapOverlayImage",
                 "width": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0.png",
                    "width": 50,
                    "height": 49
                   }
                  ]
                 }
                },
                "map": {
                 "width": 50,
                 "x": 280.3,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_HS_0_map.gif",
                    "width": 25,
                    "height": 24
                   }
                  ]
                 },
                 "y": 228.1,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 50,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": false,
                "id": "overlay_E2A9E771_EFFC_6DAB_41ED_732E2F091F5A",
                "data": {
                 "label": "Image"
                }
               }
              ],
              "fieldOfViewOverlayOutsideOpacity": 0,
              "initialZoomFactor": 1,
              "fieldOfViewOverlayInsideOpacity": 0.4,
              "fieldOfViewOverlayOutsideColor": "#000000",
              "height": 563,
              "thumbnailUrl": "media/map_E2F08A93_EFFC_276E_41DA_281990A5A64C_t.png"
             },
             "x": 305.3,
             "angle": 93.36,
             "y": 253.1,
             "class": "PanoramaMapLocation"
            }
           ],
           "thumbnailUrl": "media/panorama_E6145D91_EF14_5D6A_41D9_45623053016B_t.jpg"
          },
          "yaw": 159.92,
          "distance": 1,
          "backwardYaw": -144.74
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
        "hfovMax": 130,
        "hfov": 360,
        "hfovMin": 80,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_hq.jpeg",
             "width": 6434,
             "height": 3217,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714.jpeg",
             "width": 4002,
             "height": 2001
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_3CEB33B6_2C57_D94B_41B0_9F08F7570CF9); this.setMediaBehaviour(this.playList_3C326144_2C57_D9CF_4176_0E2B2B44A454, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -19.33,
              "hfov": 5.9,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -5.22
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.9,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_0_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": -5.22,
              "yaw": -19.33
             }
            ],
            "id": "overlay_17C11FBD_1A28_9742_41B9_9B996ADB4A90",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3, null, null, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -68.51,
              "hfov": 5.9,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_1_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -4.39
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.9,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_1_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": -4.39,
              "yaw": -68.51
             }
            ],
            "id": "overlay_3A5D32D6_20F9_F467_41BA_B0E40E6ED2F2",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.setMediaBehaviour(this.playList_3C352145_2C57_D9C9_41B2_A81A867C134C, 0, this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -30.51,
              "hfov": 4.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_2_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": 33.49
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 4.94,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_2_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": 33.49,
              "yaw": -30.51
             }
            ],
            "id": "overlay_3ACFD642_2028_9C5E_41A8_AC5EE8DD4659",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "rotationY": 0,
            "showDuration": 500,
            "yaw": -68.51,
            "rotationZ": 0,
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "id": "popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "hideEasing": "cubic_out",
            "hfov": 5.9,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_1.jpg",
               "width": 1024,
               "height": 682
              }
             ]
            },
            "pitch": -4.39,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "showEasing": "cubic_in"
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B, this.camera_3C9593C1_2C57_D8C9_41AD_650588B01790); this.mainPlayList.set('selectedIndex', 9)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 159.92,
              "hfov": 6.84,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_3_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": 22.39
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.84,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_0_HS_3_0.png",
                 "width": 132,
                 "height": 132
                }
               ]
              },
              "pitch": 22.39,
              "yaw": 159.92
             }
            ],
            "id": "overlay_8F204BB5_812C_2B1B_41D4_BB2B9CE81079",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg"
         }
        ],
        "mapLocations": [
         {
          "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
          "x": 280.58,
          "angle": 0,
          "y": 422.04,
          "class": "PanoramaMapLocation"
         }
        ],
        "thumbnailUrl": "media/panorama_160D346A_1A28_89C6_418E_CDA086A7E714_t.jpg"
       }
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "Lobby",
        "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "3_1",
           "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
             "yaw": 176.9,
             "distance": 1,
             "backwardYaw": -176.55
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 80,
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_23CC626C_2C57_DBDF_41AD_2E8C8587CB2B); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.73,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_0_HS_0_0.png",
                    "width": 120,
                    "height": 120
                   }
                  ]
                 },
                 "pitch": -15.9,
                 "yaw": 176.9
                }
               ],
               "id": "overlay_D329AC1C_DC55_AEE5_41D2_6176DAFC3236",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_hq.jpeg",
                "width": 10224,
                "height": 1704,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104.jpeg",
                "width": 6144,
                "height": 1024
               }
              ]
             }
            }
           ],
           "mapLocations": [
            {
             "map": {
              "minimumZoomFactor": 0.5,
              "fieldOfViewOverlayInsideColor": "#000000",
              "class": "Map",
              "label": "Planta",
              "id": "map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
              "width": 415,
              "fieldOfViewOverlayRadiusScale": 0.19,
              "maximumZoomFactor": 1.2,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070.png",
                 "width": 415,
                 "height": 558
                }
               ]
              },
              "scaleMode": "fit_inside",
              "overlays": [
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 1)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 202.7,
                 "height": 30,
                 "y": 419.55,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 202.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 419.55,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C10F34C4_DD09_E665_41EB_0E9F8F32C5EE",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 3)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 200.7,
                 "height": 30,
                 "y": 104.65,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 200.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 104.65,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C057DBDB_DD0A_6267_41DF_74197503054E",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 10)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 71.7,
                 "height": 30,
                 "y": 106.65,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 71.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 106.65,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C1A62C4E_DD0B_E665_41E4_24E80204A343",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 11)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 73.7,
                 "height": 30,
                 "y": 213.55,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 73.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 213.55,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C0CBF35A_DD0A_E26D_41D4_D1DC41F86387",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 5)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 302.7,
                 "height": 30,
                 "y": 203.55,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 302.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 203.55,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C01B30DE_DD09_BE65_41DD_D62C14826FDF",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 4)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 328.6,
                 "height": 30,
                 "y": 317.55,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 328.6,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 317.55,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C332A511_DD0E_A7FC_41E4_2786EB8DD2F7",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 6)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 200.7,
                 "height": 30,
                 "y": 361.6,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 200.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 361.6,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C0B9B7F7_DD0E_6224_41E8_445361C5C9E4",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 12)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 318.7,
                 "height": 30,
                 "y": 215.55,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 318.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 215.55,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C3F85A31_DD0F_E23C_41DC_6258471D9794",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 14)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 203.65,
                 "height": 30,
                 "y": 85.55,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 203.65,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 85.55,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C30E80C5_DD0E_9E67_41E5_F7EA65B0847D",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 13)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 66.65,
                 "height": 30,
                 "y": 217.55,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 66.65,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 217.55,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C3598F78_DD0E_622C_41E9_FCE2210BA50E",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 236.65,
                 "height": 30,
                 "y": 304.6,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 236.65,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 304.6,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C3A2F1BB_DD09_9E2C_41E6_AEB47B5FEE36",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 202.7,
                 "height": 30,
                 "y": 264.55,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 202.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 264.55,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C3966761_DD0A_E25F_41D3_527C5C447FFE",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 207.7,
                 "height": 30,
                 "y": 160.55,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12.png",
                    "width": 29,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 207.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12_map.gif",
                    "width": 14,
                    "height": 15
                   }
                  ]
                 },
                 "y": 160.55,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_C2AD60A4_DD09_9E24_41E0_BE7A28E7C8F8",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 8)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 227.65,
                 "height": 30,
                 "y": 415.8,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13.png",
                    "width": 30,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 227.65,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13_map.gif",
                    "width": 15,
                    "height": 15
                   }
                  ]
                 },
                 "y": 415.8,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_EFFAE3BA_DD3F_A22D_41DB_87FABC0F13CA",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 16)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 207.6,
                 "height": 30,
                 "y": 215.15,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14.png",
                    "width": 30,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 207.6,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14_map.gif",
                    "width": 15,
                    "height": 15
                   }
                  ]
                 },
                 "y": 215.15,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_2A070BB7_27CE_576F_41AB_07E104B79EC6",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 2)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 174.85,
                 "height": 30,
                 "y": 187.8,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15.png",
                    "width": 30,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 174.85,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15_map.gif",
                    "width": 15,
                    "height": 15
                   }
                  ]
                 },
                 "y": 187.8,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_376F3930_27CA_D361_4190_7CF2D4BA616B",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 7)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 202.9,
                 "height": 30,
                 "y": 75.95,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16.png",
                    "width": 30,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 202.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16_map.gif",
                    "width": 15,
                    "height": 15
                   }
                  ]
                 },
                 "y": 75.95,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_3778DCE6_27D7_D2E1_41C3_D9B03693BA2C",
                "data": {
                 "label": "Image"
                }
               },
               {
                "useHandCursor": true,
                "areas": [
                 {
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 15)",
                  "mapColor": "#FF0000"
                 }
                ],
                "image": {
                 "x": 58.95,
                 "height": 30,
                 "y": 99.95,
                 "class": "HotspotMapOverlayImage",
                 "width": 30,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17.png",
                    "width": 30,
                    "height": 30
                   }
                  ]
                 }
                },
                "map": {
                 "width": 30,
                 "x": 58.95,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17_map.gif",
                    "width": 15,
                    "height": 15
                   }
                  ]
                 },
                 "y": 99.95,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "height": 30,
                 "offsetX": 0
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "id": "overlay_3686017A_27D6_53E6_41C2_468B88D59841",
                "data": {
                 "label": "Image"
                }
               }
              ],
              "fieldOfViewOverlayOutsideOpacity": 0,
              "initialZoomFactor": 1,
              "fieldOfViewOverlayInsideOpacity": 0.4,
              "fieldOfViewOverlayOutsideColor": "#000000",
              "height": 558,
              "thumbnailUrl": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_t.png"
             },
             "x": 242.65,
             "angle": -267.85,
             "y": 430.8,
             "class": "PanoramaMapLocation"
            }
           ],
           "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg"
          },
          "yaw": -176.55,
          "distance": 1,
          "backwardYaw": 176.9
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "asensores",
           "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "Main Floor",
              "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                "yaw": 96.47,
                "distance": 1,
                "backwardYaw": -139.07
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "9",
                 "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
                   "yaw": 3.46,
                   "distance": 1,
                   "backwardYaw": -176.41
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "label": "14",
                    "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "Conference Room",
                       "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "label": "Dining Room",
                          "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
                            "yaw": -176.35,
                            "distance": 1,
                            "backwardYaw": 66.4
                           }
                          ],
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
                          "hfovMax": 120,
                          "hfov": 360,
                          "hfovMin": 80,
                          "frames": [
                           {
                            "class": "CubicPanoramaFrame",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_23D6D24A_2C57_DBDB_41C3_AEFADA043691); this.mainPlayList.set('selectedIndex', 5)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.97,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_0_0.png",
                                   "width": 120,
                                   "height": 119
                                  }
                                 ]
                                },
                                "pitch": -7.24,
                                "yaw": -176.35
                               }
                              ],
                              "id": "overlay_CD4CB2EB_DCAE_5B2C_41DC_F7E2F745A878",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.showPopupPanoramaOverlay(this.popup_D60305E4_DCEA_D39F_419B_D9B149482827, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90, null, null, null, null, false)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.23,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_1_0.png",
                                   "width": 123,
                                   "height": 103
                                  }
                                 ]
                                },
                                "pitch": -1.54,
                                "yaw": 72.56
                               }
                              ],
                              "id": "overlay_D672A178_DCEA_F368_41D5_479F8DEF3160",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "rotationY": 0,
                              "showDuration": 500,
                              "yaw": 72.56,
                              "rotationZ": 0,
                              "hideDuration": 500,
                              "class": "PopupPanoramaOverlay",
                              "id": "popup_D60305E4_DCEA_D39F_419B_D9B149482827",
                              "popupMaxHeight": "95%",
                              "rotationX": 0,
                              "hideEasing": "cubic_out",
                              "hfov": 8.23,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "class": "ImageResourceLevel",
                                 "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
                                 "width": 1024,
                                 "height": 682
                                }
                               ]
                              },
                              "pitch": -1.54,
                              "popupMaxWidth": "95%",
                              "popupDistance": 100,
                              "showEasing": "cubic_in"
                             }
                            ],
                            "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
                            "cube": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_hq.jpeg",
                               "width": 10224,
                               "height": 1704,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ]
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D.jpeg",
                               "width": 6144,
                               "height": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "mapLocations": [
                           {
                            "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                            "x": 343.6,
                            "angle": -191.07,
                            "y": 332.55,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg"
                         },
                         "yaw": 66.4,
                         "distance": 1,
                         "backwardYaw": -176.35
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
                         "yaw": -117.42,
                         "distance": 1,
                         "backwardYaw": 72.07
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 80,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_239DB2A7_2C57_DB49_419F_11FAA57E61CA); this.mainPlayList.set('selectedIndex', 11)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.02,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_1_0.png",
                                "width": 120,
                                "height": 120
                               }
                              ]
                             },
                             "pitch": -3.5,
                             "yaw": -117.42
                            }
                           ],
                           "id": "overlay_CDB4D373_DCAD_D923_41DA_BEF903345F6C",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D, this.camera_2392929C_2C57_DB7F_41A2_9AE681D319AB); this.mainPlayList.set('selectedIndex', 4)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.9,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_0_0.png",
                                "width": 120,
                                "height": 120
                               }
                              ]
                             },
                             "pitch": -10.48,
                             "yaw": 66.4
                            }
                           ],
                           "id": "overlay_CD17C810_DCAE_D6FC_41E9_DAACF2C28087",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          }
                         ],
                         "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
                         "cube": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_hq.jpeg",
                            "width": 10224,
                            "height": 1704,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E.jpeg",
                            "width": 6144,
                            "height": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "mapLocations": [
                        {
                         "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                         "x": 317.7,
                         "angle": 92.31,
                         "y": 218.55,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg"
                      },
                      "yaw": 72.07,
                      "distance": 1,
                      "backwardYaw": -117.42
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
                      "yaw": -85.38,
                      "distance": 1,
                      "backwardYaw": 99.45
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
                    "hfovMax": 120,
                    "hfov": 360,
                    "hfovMin": 80,
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_3CC85390_2C57_D947_419B_B62061F9194A); this.mainPlayList.set('selectedIndex', 10)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.88,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_1_0.png",
                             "width": 118,
                             "height": 118
                            }
                           ]
                          },
                          "pitch": -4.65,
                          "yaw": -85.38
                         }
                        ],
                        "id": "overlay_CC04F239_DC5A_BB2F_41D9_32A30344941E",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_3CDF5384_2C57_D94F_419A_BBE52404FE98); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.87,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_0_0.png",
                             "width": 118,
                             "height": 118
                            }
                           ]
                          },
                          "pitch": -5.22,
                          "yaw": 72.07
                         }
                        ],
                        "id": "overlay_CD93F058_DCAA_D76C_41E3_66E7F2CC4E96",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713, null, null, null, null, false)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.22,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_4_0.png",
                             "width": 123,
                             "height": 104
                            }
                           ]
                          },
                          "pitch": -3.43,
                          "yaw": -36.13
                         }
                        ],
                        "id": "overlay_D67088C0_DCEE_3198_41E6_EACE23A23D4D",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "rotationY": 0,
                        "showDuration": 500,
                        "yaw": -36.13,
                        "rotationZ": 0,
                        "hideDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "id": "popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
                        "popupMaxHeight": "95%",
                        "rotationX": 0,
                        "hideEasing": "cubic_out",
                        "hfov": 8.22,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
                           "width": 1024,
                           "height": 682
                          }
                         ]
                        },
                        "pitch": -3.43,
                        "popupMaxWidth": "95%",
                        "popupDistance": 100,
                        "showEasing": "cubic_in"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB, null, null, null, null, false)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.15,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_3_0.png",
                             "width": 123,
                             "height": 104
                            }
                           ]
                          },
                          "pitch": -8.1,
                          "yaw": -170.82
                         }
                        ],
                        "id": "overlay_D623BF6C_DCE9_EF68_41E5_EA1EE4AA1D99",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA, null, null, null, null, false)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.24,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_2_0.png",
                             "width": 123,
                             "height": 104
                            }
                           ]
                          },
                          "pitch": -0.5,
                          "yaw": 102.19
                         }
                        ],
                        "id": "overlay_D644FD83_DCEA_5398_41CF_FDE7075B148D",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "rotationY": 0,
                        "showDuration": 500,
                        "yaw": 102.19,
                        "rotationZ": 0,
                        "hideDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "id": "popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
                        "popupMaxHeight": "95%",
                        "rotationX": 0,
                        "hideEasing": "cubic_out",
                        "hfov": 8.24,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
                           "width": 1024,
                           "height": 682
                          }
                         ]
                        },
                        "pitch": -0.5,
                        "popupMaxWidth": "95%",
                        "popupDistance": 100,
                        "showEasing": "cubic_in"
                       },
                       {
                        "bleachingDistance": 0.4,
                        "pitch": 29.81,
                        "class": "LensFlarePanoramaOverlay",
                        "id": "overlay_D4A17713_DF66_0D7B_41EA_88920C3D3D96",
                        "yaw": 4,
                        "bleaching": 0.7
                       },
                       {
                        "bleachingDistance": 0.4,
                        "pitch": 33.62,
                        "class": "LensFlarePanoramaOverlay",
                        "id": "overlay_D4BC6C09_DF66_0357_41CE_9C3B75EE1C61",
                        "yaw": 125.52,
                        "bleaching": 0.7
                       },
                       {
                        "bleachingDistance": 0.4,
                        "pitch": 19.14,
                        "class": "LensFlarePanoramaOverlay",
                        "id": "overlay_D4BAE022_DF66_0355_41EA_F8574F4021B9",
                        "yaw": -105.71,
                        "bleaching": 0.7
                       },
                       {
                        "rotationY": 0,
                        "showDuration": 500,
                        "yaw": -170.82,
                        "rotationZ": 0,
                        "hideDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "id": "popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
                        "popupMaxHeight": "95%",
                        "rotationX": 0,
                        "hideEasing": "cubic_out",
                        "hfov": 8.15,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
                           "width": 1024,
                           "height": 777
                          }
                         ]
                        },
                        "pitch": -8.1,
                        "popupMaxWidth": "95%",
                        "popupDistance": 100,
                        "showEasing": "cubic_in"
                       }
                      ],
                      "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
                      "cube": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_hq.jpeg",
                         "width": 10224,
                         "height": 1704,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A.jpeg",
                         "width": 6144,
                         "height": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "mapLocations": [
                     {
                      "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                      "x": 88.7,
                      "angle": 83.39,
                      "y": 228.55,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg"
                   },
                   "yaw": 99.45,
                   "distance": 1,
                   "backwardYaw": -85.38
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 80,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_3DB784E9_2C57_D8D9_41C2_D18EE379C8FB); this.mainPlayList.set('selectedIndex', 3)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.86,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_1_0.png",
                          "width": 118,
                          "height": 119
                         }
                        ]
                       },
                       "pitch": -5.56,
                       "yaw": 3.46
                      }
                     ],
                     "id": "overlay_CC5E5224_DC56_7B24_41D5_3769EA774666",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_3DA5B4FA_2C57_D8BB_41C2_D0636FB874E5); this.mainPlayList.set('selectedIndex', 11)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.85,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_0_0.png",
                          "width": 118,
                          "height": 119
                         }
                        ]
                       },
                       "pitch": -6.24,
                       "yaw": 99.45
                      }
                     ],
                     "id": "overlay_CCE05196_DC55_F9E4_41C9_7E05949C0230",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "bleachingDistance": 0.4,
                     "pitch": 16.86,
                     "class": "LensFlarePanoramaOverlay",
                     "id": "overlay_D364F048_DF66_03D5_41E1_5EA3BC9637F0",
                     "yaw": -0.57,
                     "bleaching": 0.7
                    },
                    {
                     "bleachingDistance": 0.4,
                     "pitch": 16.1,
                     "class": "LensFlarePanoramaOverlay",
                     "id": "overlay_D37D2F7A_DF66_1DB5_41C0_1FB80896FEB3",
                     "yaw": 164.38,
                     "bleaching": 0.7
                    }
                   ],
                   "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
                   "cube": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_hq.jpeg",
                      "width": 10224,
                      "height": 1704,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B.jpeg",
                      "width": 6144,
                      "height": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "mapLocations": [
                  {
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "x": 86.7,
                   "angle": 80.77,
                   "y": 121.65,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg"
                },
                "yaw": -176.41,
                "distance": 1,
                "backwardYaw": 3.46
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 80,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_23362202_2C57_DB4B_41C5_B9FDC04F6580); this.mainPlayList.set('selectedIndex', 16)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.88,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_1_0.png",
                       "width": 120,
                       "height": 120
                      }
                     ]
                    },
                    "pitch": -11.41,
                    "yaw": 96.47
                   }
                  ],
                  "id": "overlay_D3E0C739_DC56_B92C_41E9_6C44CB4D0781",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_233D420E_2C57_DB5B_418F_67A1C1F5E9C5); this.mainPlayList.set('selectedIndex', 10)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.97,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_0_0.png",
                       "width": 120,
                       "height": 120
                      }
                     ]
                    },
                    "pitch": -7.14,
                    "yaw": -176.41
                   }
                  ],
                  "id": "overlay_D3BB78D6_DC56_5764_41BF_4CD3DB34B52B",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "bleachingDistance": 0.4,
                  "pitch": 19.14,
                  "class": "LensFlarePanoramaOverlay",
                  "id": "overlay_D4BE7E36_DF66_3FBD_41E5_D711B6782282",
                  "yaw": -0.95,
                  "bleaching": 0.7
                 },
                 {
                  "bleachingDistance": 0.4,
                  "pitch": 17.62,
                  "class": "LensFlarePanoramaOverlay",
                  "id": "overlay_D4BB02EB_DF66_04AB_41E7_314E72AF48E7",
                  "yaw": 164.38,
                  "bleaching": 0.7
                 }
                ],
                "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_hq.jpeg",
                   "width": 10224,
                   "height": 1704,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0.jpeg",
                   "width": 6144,
                   "height": 1024
                  }
                 ]
                }
               }
              ],
              "mapLocations": [
               {
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "x": 215.7,
                "angle": 87.93,
                "y": 119.65,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg"
             },
             "yaw": -139.07,
             "distance": 1,
             "backwardYaw": 96.47
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "Restrooms",
              "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                "yaw": 27.08,
                "distance": 1,
                "backwardYaw": -166.68
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 80,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_hq.jpeg",
                   "width": 5376,
                   "height": 2688,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3.jpeg",
                   "width": 3217,
                   "height": 1608
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_3D89B4D2_2C57_D8CB_41B3_57705DD9A67C); this.mainPlayList.set('selectedIndex', 16)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.64,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_0_HS_0_0.png",
                       "width": 120,
                       "height": 120
                      }
                     ]
                    },
                    "pitch": -18.14,
                    "yaw": 27.08
                   }
                  ],
                  "id": "overlay_2B9DAFA3_2515_837B_41BD_B2A12DB79FE4",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "bleachingDistance": 0.4,
                  "pitch": 59.4,
                  "class": "LensFlarePanoramaOverlay",
                  "id": "overlay_FE341697_EE9B_B5BB_41CC_1DCF1E1B9FE9",
                  "yaw": -74.61,
                  "bleaching": 0.7
                 },
                 {
                  "bleachingDistance": 0.4,
                  "pitch": 28.05,
                  "class": "LensFlarePanoramaOverlay",
                  "id": "overlay_FE452B9D_EE9B_93AF_41C8_E05C00B1EC74",
                  "yaw": -13.79,
                  "bleaching": 0.7
                 },
                 {
                  "bleachingDistance": 0.4,
                  "pitch": 31.07,
                  "class": "LensFlarePanoramaOverlay",
                  "id": "overlay_FE59F0F5_EE9B_8D7F_41E8_C632466F366D",
                  "yaw": -151.67,
                  "bleaching": 0.7
                 }
                ],
                "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg"
               }
              ],
              "mapLocations": [
               {
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "x": 189.85,
                "angle": 59.39,
                "y": 202.8,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg"
             },
             "yaw": -166.68,
             "distance": 1,
             "backwardYaw": 27.08
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
             "yaw": 32.92,
             "distance": 1,
             "backwardYaw": 87.33
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "Parking Garage",
              "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                "yaw": -3.13,
                "distance": 1,
                "backwardYaw": -16.11
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "parking2",
                 "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                   "yaw": -61.02,
                   "distance": 1,
                   "backwardYaw": 99.63
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 80,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_hq.jpeg",
                      "width": 5376,
                      "height": 2688,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175.jpeg",
                      "width": 3217,
                      "height": 1608
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_23D3423E_2C57_DBBB_41B2_13BAE8E776DF); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.88,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_0_HS_0_0.png",
                          "width": 118,
                          "height": 119
                         }
                        ]
                       },
                       "pitch": -3.91,
                       "yaw": -61.02
                      }
                     ],
                     "id": "overlay_3460957D_251D_87CE_4190_36CE7946E825",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "bleachingDistance": 0.4,
                     "pitch": 16.72,
                     "class": "LensFlarePanoramaOverlay",
                     "id": "overlay_39DF8AEE_37C2_AC40_417A_6242CBF48B68",
                     "yaw": 95.38,
                     "bleaching": 0.7
                    }
                   ],
                   "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg"
                  }
                 ],
                 "mapLocations": [
                  {
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "x": 73.95,
                   "angle": -207.49,
                   "y": 114.95,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg"
                },
                "yaw": 99.63,
                "distance": 1,
                "backwardYaw": -61.02
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 80,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_hq.jpeg",
                   "width": 5376,
                   "height": 2688,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042.jpeg",
                   "width": 3217,
                   "height": 1608
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_3C9EE3CD_2C57_D8D9_41C0_3FEC59A2AC47); this.mainPlayList.set('selectedIndex', 16)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.9,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_0_0.png",
                       "width": 118,
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -1.31,
                    "yaw": -3.13
                   }
                  ],
                  "id": "overlay_358E55A7_2512_877B_41B8_E929438E29B7",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175, this.camera_3C8BC3D8_2C57_D8C7_41A4_7FE7ED39D662); this.mainPlayList.set('selectedIndex', 15)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.83,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_1_0.png",
                       "width": 118,
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -7.96,
                    "yaw": 99.63
                   }
                  ],
                  "id": "overlay_3737BAD2_2512_82DA_419C_050096C450A4",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg"
               }
              ],
              "mapLocations": [
               {
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "x": 217.9,
                "angle": 180,
                "y": 90.95,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg"
             },
             "yaw": -16.11,
             "distance": 1,
             "backwardYaw": -3.13
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "Empty Shell",
              "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "18",
                 "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "label": "19",
                    "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                      "yaw": -31.12,
                      "distance": 1,
                      "backwardYaw": 133.34
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "20",
                       "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                         "yaw": -146.27,
                         "distance": 1,
                         "backwardYaw": 56.43
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                         "yaw": -34.22,
                         "distance": 1,
                         "backwardYaw": 147.18
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 80,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_23DFE255_2C57_DBC9_41BF_734807544BBC); this.mainPlayList.set('selectedIndex', 14)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.82,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_1_0.png",
                                "width": 117,
                                "height": 118
                               }
                              ]
                             },
                             "pitch": -8.35,
                             "yaw": -146.27
                            }
                           ],
                           "id": "overlay_CF2655CA_DCB5_F96D_41B7_34C2794364A6",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_23C73260_2C57_DBC7_41B9_84450599C6B7); this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.84,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_0_0.png",
                                "width": 117,
                                "height": 118
                               }
                              ]
                             },
                             "pitch": -7.11,
                             "yaw": -34.22
                            }
                           ],
                           "id": "overlay_C886FB4D_DCBA_6967_415D_6C46FDD1DF7E",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          }
                         ],
                         "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                         "cube": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_hq.jpeg",
                            "width": 10224,
                            "height": 1704,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8.jpeg",
                            "width": 6144,
                            "height": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "mapLocations": [
                        {
                         "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                         "x": 81.65,
                         "angle": 171.27,
                         "y": 232.55,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg"
                      },
                      "yaw": 56.43,
                      "distance": 1,
                      "backwardYaw": -146.27
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
                    "hfovMax": 120,
                    "hfov": 360,
                    "hfovMin": 80,
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_3D5961BF_2C57_D8B9_41BD_A1B07F4E9930); this.mainPlayList.set('selectedIndex', 12)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.98,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_1_0.png",
                             "width": 119,
                             "height": 119
                            }
                           ]
                          },
                          "pitch": -7.02,
                          "yaw": -31.12
                         }
                        ],
                        "id": "overlay_CFB5EC7B_DCB6_6F2C_41DB_6256013DCD9F",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_2330F1F6_2C57_D8CB_41A9_DF5CF764385C); this.mainPlayList.set('selectedIndex', 13)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.83,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_0_0.png",
                             "width": 118,
                             "height": 119
                            }
                           ]
                          },
                          "pitch": -7.66,
                          "yaw": 56.43
                         }
                        ],
                        "id": "overlay_CF3BB706_DCB6_DAE5_41C3_D53007E5C556",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 1)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.68,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_2_0.png",
                             "width": 131,
                             "height": 115
                            }
                           ]
                          },
                          "pitch": -8.5,
                          "yaw": -1.47
                         }
                        ],
                        "id": "overlay_D6ACF640_DCF9_E25D_41B7_FC333768C35D",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       }
                      ],
                      "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                      "cube": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_hq.jpeg",
                         "width": 10224,
                         "height": 1704,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09.jpeg",
                         "width": 6144,
                         "height": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "mapLocations": [
                     {
                      "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                      "x": 218.65,
                      "angle": 180,
                      "y": 100.55,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg"
                   },
                   "yaw": 133.34,
                   "distance": 1,
                   "backwardYaw": -31.12
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                   "yaw": 39.43,
                   "distance": 1,
                   "backwardYaw": -134.96
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 80,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_3D9B94C2_2C57_D8CB_415E_8CDE6B758E52); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.84,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_1_0.png",
                          "width": 118,
                          "height": 119
                         }
                        ]
                       },
                       "pitch": -7.1,
                       "yaw": 39.43
                      }
                     ],
                     "id": "overlay_CE5312DE_DCB6_5B64_41BB_6CD92A705CA6",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_3DEDA4B1_2C57_DF49_41AD_6A2E016D4EBB); this.mainPlayList.set('selectedIndex', 14)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.82,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_0_0.png",
                          "width": 118,
                          "height": 119
                         }
                        ]
                       },
                       "pitch": -8.27,
                       "yaw": 133.34
                      }
                     ],
                     "id": "overlay_CFB8AD78_DCB7_E92D_41BC_33566693B151",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
                   "cube": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_hq.jpeg",
                      "width": 10224,
                      "height": 1704,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9.jpeg",
                      "width": 6144,
                      "height": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "mapLocations": [
                  {
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "x": 333.7,
                   "angle": -175.06,
                   "y": 230.55,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg"
                },
                "yaw": -134.96,
                "distance": 1,
                "backwardYaw": 39.43
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                "yaw": -170.05,
                "distance": 1,
                "backwardYaw": -76.25
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                "yaw": 147.18,
                "distance": 1,
                "backwardYaw": -34.22
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 80,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_3CAEA3FC_2C57_D8BF_41B0_62B6609FFA24); this.mainPlayList.set('selectedIndex', 12)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.84,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_1_0.png",
                       "width": 118,
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -7.44,
                    "yaw": -134.96
                   }
                  ],
                  "id": "overlay_CE8CA507_DCAE_5EE3_41E1_5677CFA0DCC5",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_3D487413_2C57_DF49_41C4_6F516FA3B52D); this.mainPlayList.set('selectedIndex', 13)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.82,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_0_0.png",
                       "width": 118,
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -8.14,
                    "yaw": 147.18
                   }
                  ],
                  "id": "overlay_CE501F2B_DCB6_692C_41E9_C5E62C500A79",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_3D5D7408_2C57_DF47_41B2_0D11FBAE5695); this.mainPlayList.set('selectedIndex', 16)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.89,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_3_0.png",
                       "width": 118,
                       "height": 118
                      }
                     ]
                    },
                    "pitch": -2.91,
                    "yaw": -170.05
                   }
                  ],
                  "id": "overlay_3690BC3C_2513_854E_41B9_F52311509481",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_hq.jpeg",
                   "width": 10224,
                   "height": 1704,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F.jpeg",
                   "width": 6144,
                   "height": 1024
                  }
                 ]
                }
               }
              ],
              "mapLocations": [
               {
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "x": 215.7,
                "angle": 177.75,
                "y": 376.6,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg"
             },
             "yaw": -76.25,
             "distance": 1,
             "backwardYaw": -170.05
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 80,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_hq.jpeg",
                "width": 5376,
                "height": 2688,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F.jpeg",
                "width": 3217,
                "height": 1608
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_3C3C935F_2C57_D9F9_4191_24B7A060C859); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.87,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_0_0.png",
                    "width": 117,
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -4.96,
                 "yaw": 32.92
                }
               ],
               "id": "overlay_28CE795F_2513_8FCA_4188_1998B7E06EBC",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3, this.camera_3C323353_2C57_D9C9_41C1_0BF876414DA9); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.88,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_1_0.png",
                    "width": 118,
                    "height": 117
                   }
                  ]
                 },
                 "pitch": -8.74,
                 "yaw": -166.68
                }
               ],
               "id": "overlay_2B261325_2512_837E_41B0_050021E9F08E",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_3CD29377_2C57_D9C9_4191_CF02E83A563F); this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.82,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_2_0.png",
                    "width": 117,
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -8,
                 "yaw": -76.25
                }
               ],
               "id": "overlay_2AFE1E17_2516_855A_41C1_80A7DE3B763C",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_3C29E36A_2C57_D9D8_41C0_EE06DDCABC99); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.72,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_3_0.png",
                    "width": 117,
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -12.22,
                 "yaw": -16.11
                }
               ],
               "id": "overlay_2AA13E2D_2512_854F_417F_F5763DB0AB5B",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_3C090348_2C57_D9C7_41C2_207EBD139DE8); this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.82,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_4_0.png",
                    "width": 118,
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -8.17,
                 "yaw": -139.07
                }
               ],
               "id": "overlay_354312DB_254C_E20F_41B9_80BC77A75D32",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "bleachingDistance": 0.4,
               "pitch": 44.67,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_39E9E5BE_37C2_E4C0_41C8_ED2101A9B7E1",
               "yaw": -108.98,
               "bleaching": 0.7
              },
              {
               "bleachingDistance": 0.4,
               "pitch": 28.8,
               "class": "LensFlarePanoramaOverlay",
               "id": "overlay_39F9CEF7_37C2_E441_4193_83EA81D1DE6F",
               "yaw": 14.17,
               "bleaching": 0.7
              }
             ],
             "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg"
            }
           ],
           "mapLocations": [
            {
             "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
             "x": 222.6,
             "angle": 138.19,
             "y": 230.15,
             "class": "PanoramaMapLocation"
            }
           ],
           "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg"
          },
          "yaw": 87.33,
          "distance": 1,
          "backwardYaw": 32.92
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
          "yaw": -91.85,
          "distance": 1,
          "backwardYaw": -59.69
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "cardboardMenu": "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 80,
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_3E36559A_2C57_D97B_41BD_07D459BD18D1); this.mainPlayList.set('selectedIndex', 16)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_1_0.png",
                 "width": 119,
                 "height": 119
                }
               ]
              },
              "pitch": -5.46,
              "yaw": 87.33
             }
            ],
            "id": "overlay_D2A966DF_DC6A_7B64_41DD_D822CC7BCA86",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104, this.camera_3E088589_2C57_D959_41C2_07B06D38494A); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.7,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_0_0.png",
                 "width": 117,
                 "height": 118
                }
               ]
              },
              "pitch": -13.09,
              "yaw": -176.55
             }
            ],
            "id": "overlay_D319ECF0_DC6A_6F3C_41EA_8C8FADFED6AD",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "bleachingDistance": 0.4,
            "pitch": -1.05,
            "class": "LensFlarePanoramaOverlay",
            "id": "overlay_D7DEC935_DCEA_FB36_41D7_D4FB63048649",
            "yaw": -92.76,
            "bleaching": 0.7
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5, null, null, null, null, false)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.64,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_6_0.png",
                 "width": 122,
                 "height": 103
                }
               ]
              },
              "pitch": -21.91,
              "yaw": 7.39
             }
            ],
            "id": "overlay_D926478A_D4EF_39C2_41AE_D01A03A371F6",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupPanoramaOverlay(this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D, {'rollOverIconLineWidth':5,'iconHeight':50,'backgroundColorRatios':[0.09803921568627451],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':50,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#000000'],'rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedIconWidth':50,'paddingLeft':5,'borderSize':0,'iconColor':'#FFFFFF','pressedIconHeight':50,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':50,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':50,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#CCCCCC','paddingTop':5}, this.ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4, null, null, null, null, false)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.04,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_7_0.png",
                 "width": 122,
                 "height": 103
                }
               ]
              },
              "pitch": -12.51,
              "yaw": 163.85
             }
            ],
            "id": "overlay_D9A90784_D4ED_39C5_4189_5758A99D263E",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "rotationY": 0,
            "showDuration": 500,
            "yaw": 163.85,
            "rotationZ": 0,
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "id": "popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "hideEasing": "cubic_out",
            "hfov": 8.04,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_2.jpg",
               "width": 1024,
               "height": 682
              }
             ]
            },
            "pitch": -12.51,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "showEasing": "cubic_in"
           },
           {
            "rotationY": 0,
            "showDuration": 500,
            "yaw": 7.39,
            "rotationZ": 0,
            "hideDuration": 500,
            "class": "PopupPanoramaOverlay",
            "id": "popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
            "popupMaxHeight": "95%",
            "rotationX": 0,
            "hideEasing": "cubic_out",
            "hfov": 7.64,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_2.jpg",
               "width": 1024,
               "height": 682
              }
             ]
            },
            "pitch": -21.91,
            "popupMaxWidth": "95%",
            "popupDistance": 100,
            "showEasing": "cubic_in"
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_3E27A5B2_2C57_D94B_4188_04DDD9441D00); this.setMediaBehaviour(this.playList_3C37B146_2C57_D9CB_41B4_C527762E3BBD, 0, this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -91.85,
              "hfov": 7.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_8_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -4.64
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.94,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_8_0.png",
                 "width": 119,
                 "height": 118
                }
               ]
              },
              "pitch": -4.64,
              "yaw": -91.85
             }
            ],
            "id": "overlay_087339E0_1FDB_745A_4192_8E56F7FC7082",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
          "cube": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_hq.jpeg",
             "width": 10224,
             "height": 1704,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6.jpeg",
             "width": 6144,
             "height": 1024
            }
           ]
          }
         }
        ],
        "mapLocations": [
         {
          "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
          "x": 217.7,
          "angle": -83.39,
          "y": 434.55,
          "class": "PanoramaMapLocation"
         }
        ],
        "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg"
       },
       "yaw": -59.69,
       "distance": 1,
       "backwardYaw": -91.85
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
       "yaw": 150.05,
       "distance": 1,
       "backwardYaw": 41.3
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "16-Oficinas Parque",
        "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
          "yaw": 176.92,
          "distance": 1,
          "backwardYaw": 50.1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8"
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "hfovMax": 130,
        "hfov": 360,
        "hfovMin": 80,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_hq.jpeg",
             "width": 6434,
             "height": 3217,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748.jpeg",
             "width": 4002,
             "height": 2001
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09, this.camera_3D133438_2C57_DF47_41BB_FC7DB8C75670); this.setMediaBehaviour(this.playList_3C37B146_2C57_D9CB_41B4_C527762E3BBD, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 176.92,
              "hfov": 5.91,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": -3.64
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.91,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_0_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": -3.64,
              "yaw": 176.92
             }
            ],
            "id": "overlay_17E9486E_1AA7_B579_41B0_203FA3864F4E",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.setMediaBehaviour(this.playList_3C352145_2C57_D9C9_41B2_A81A867C134C, 0, this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 28.17,
              "hfov": 4.63,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_2_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": 38.51
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 4.63,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_2_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": 38.51,
              "yaw": 28.17
             }
            ],
            "id": "overlay_017ADF7E_202F_6C26_41B8_C56A5105BC33",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.media_09EF9681_2078_FCDD_41A4_90F4FC2AD9B1, this.camera_460CEEE7_492B_027B_41D1_2B81CCA4EC0E); this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, true, 0, null, null, false); this.setComponentVisibility(this.Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3, false, 0, null, null, false)",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -85.83,
              "hfov": 5.88,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_4_0_0_map.gif",
                 "width": 16,
                 "height": 16
                }
               ]
              },
              "pitch": 6.51
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.88,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_0_HS_4_0.png",
                 "width": 105,
                 "height": 105
                }
               ]
              },
              "pitch": 6.51,
              "yaw": -85.83
             }
            ],
            "id": "overlay_A50717A7_867B_32A5_41C2_63C0C5FBE2A4",
            "data": {
             "label": "Image"
            }
           }
          ],
          "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg"
         }
        ],
        "mapLocations": [
         {
          "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
          "x": 293.37,
          "angle": 174.84,
          "y": 361.39,
          "class": "PanoramaMapLocation"
         }
        ],
        "thumbnailUrl": "media/panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_t.jpg"
       },
       "yaw": 50.1,
       "distance": 1,
       "backwardYaw": 176.92
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
       "yaw": -157.73,
       "distance": 1,
       "backwardYaw": 137.01
      }
     ],
     "pitch": 0,
     "partial": false,
     "vfov": 180,
     "hfovMax": 130,
     "hfov": 360,
     "hfovMin": 80,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_hq.jpeg",
          "width": 6434,
          "height": 3217,
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09.jpeg",
          "width": 4002,
          "height": 2001
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677, this.camera_3E9F1602_2C57_DB4B_41C0_E13432E95E2B); this.setMediaBehaviour(this.playList_3C326144_2C57_D9CF_4176_0E2B2B44A454, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 150.05,
           "hfov": 5.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_0_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -2.1
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.92,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_0_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": -2.1,
           "yaw": 150.05
          }
         ],
         "id": "overlay_15E21563_1A28_8BC5_417C_4669528975E0",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 79.36,
           "hfov": 5.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_1_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": 1.04
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.92,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_1_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": 1.04,
           "yaw": 79.36
          }
         ],
         "id": "overlay_0A16DB8F_1A2B_9F5E_41A4_EC4CC09E3A83",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748, this.camera_3E8D160E_2C57_DB5B_41AB_7BAEDFEB2FA3); this.setMediaBehaviour(this.playList_3C2B7160_2C57_D9C7_419E_4BE1096A1FA4, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 50.1,
           "hfov": 5.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_2_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -0.36
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.92,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_2_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": -0.36,
           "yaw": 50.1
          }
         ],
         "id": "overlay_0A8869D2_1A28_BAC6_41B3_CB74A246FC3A",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_3EEFE5F5_2C57_D8C9_41AD_40E25E89A65C); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -59.69,
           "hfov": 5.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_3_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -2.53
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.92,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_3_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": -2.53,
           "yaw": -59.69
          }
         ],
         "id": "overlay_08D9C3C6_1FD8_9467_41A6_E690DF743C75",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B, this.camera_3EBD261A_2C57_DB7B_41B1_600232E376FE); this.setMediaBehaviour(this.playList_3C258158_2C57_D9C7_4187_365A41FC0BF2, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -157.73,
           "hfov": 5.91,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_4_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": -3.81
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.91,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_4_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": -3.81,
           "yaw": -157.73
          }
         ],
         "id": "overlay_07EAD80C_1FD8_F3EB_415E_63A7F8220FDC",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E, {'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconColor':'#888888','pressedIconWidth':20,'paddingLeft':5,'borderSize':0,'iconColor':'#000000','pressedIconHeight':20,'paddingRight':5,'pressedIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingTop':5}, this.ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -55.53,
           "hfov": 5.67,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_5_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": 16.63
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.67,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_5_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": 16.63,
           "yaw": -55.53
          }
         ],
         "id": "overlay_3A30E0F6_20F8_9427_41A0_D90681FFF89C",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "rotationY": 0,
         "showDuration": 500,
         "yaw": -55.53,
         "rotationZ": 0,
         "hideDuration": 500,
         "class": "PopupPanoramaOverlay",
         "id": "popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
         "popupMaxHeight": "95%",
         "rotationX": 0,
         "hideEasing": "cubic_out",
         "hfov": 3.78,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_2.jpg",
            "width": 682,
            "height": 1024
           }
          ]
         },
         "pitch": 16.63,
         "popupMaxWidth": "95%",
         "popupDistance": 100,
         "showEasing": "cubic_in"
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.setMediaBehaviour(this.playList_3C352145_2C57_D9C9_41B2_A81A867C134C, 0, this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 78.46,
           "hfov": 4.52,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_6_0_0_map.gif",
              "width": 16,
              "height": 16
             }
            ]
           },
           "pitch": 40.22
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 4.52,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_0_HS_6_0.png",
              "width": 105,
              "height": 105
             }
            ]
           },
           "pitch": 40.22,
           "yaw": 78.46
          }
         ],
         "id": "overlay_0118AD21_2029_ADDC_41B1_BAD512D9277C",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        }
       ],
       "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg"
      }
     ],
     "mapLocations": [
      {
       "map": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
       "x": 296.31,
       "angle": 112.02,
       "y": 333.39,
       "class": "PanoramaMapLocation"
      }
     ],
     "thumbnailUrl": "media/panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_t.jpg"
    },
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ]
     },
     "id": "panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 90,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": {
     "buttonCardboardView": {
      "toolTipFontSize": 12,
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
      "transparencyActive": false,
      "toolTipPaddingLeft": 6,
      "width": 75,
      "toolTipFontColor": "#606060",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "toolTipDisplayTime": 600,
      "shadow": false,
      "toolTipPaddingRight": 6,
      "toolTipShadowOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipBorderRadius": 3,
      "toolTipOpacity": 1,
      "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
      "verticalAlign": "middle",
      "minHeight": 1,
      "toolTipTextShadowColor": "#000000",
      "height": 50,
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "mode": "push",
      "toolTipPaddingTop": 4,
      "minWidth": 1,
      "toolTip": "VR",
      "paddingRight": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipShadowColor": "#333333",
      "paddingTop": 0,
      "horizontalAlign": "center",
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "propagateClick": false,
      "data": {
       "name": "Button_VR"
      },
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "toolTipTextShadowBlurRadius": 3,
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     "mouseControlMode": "drag_acceleration",
     "class": "PanoramaPlayer",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerPanoramaPlayer",
     "gyroscopeVerticalDraggingEnabled": true,
     "touchControlMode": "drag_rotation",
     "displayPlaybackBar": true
    },
    "id": "PanoramaPlayListItem_3CE4D187_2C57_D949_41C1_800094FEB7AB"
   }
  ],
  "id": "playList_3C37B146_2C57_D9CB_41B4_C527762E3BBD"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_0.jpg",
    "width": 1280,
    "height": 936
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_1.jpg",
    "width": 1024,
    "height": 748
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865_0_2.jpg",
    "width": 512,
    "height": 374
   }
  ],
  "id": "ImageResource_E252A6BD_EF1D_EC9A_41D3_31F4A8966575"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA39620_2C57_DB47_41AB_7C10983FD8A7",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_0.jpg",
    "width": 3861,
    "height": 2574
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_1.jpg",
    "width": 2048,
    "height": 1365
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_2.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_3.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5"
 },
 "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36E9C513_249E_702C_41C0_2CA0C18AAE54_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_32BB558C_24AE_9034_41A0_905F3B8026D3"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E359B21B_ED68_4573_41E3_2134D2902989",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3E9F1602_2C57_DB4B_41C0_E13432E95E2B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -138.7,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3C5AE2F0_2C57_D8C7_41A2_5E650B4F0658",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 154.47,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA0761F_2C57_DB79_41C1_91D5BEFDE9CE",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA47622_2C57_DB4B_41BF_65859FB33599",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345FCD97_20DF_6BB3_41B7_5533F0603364",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA7C623_2C57_DB49_41B7_96B005B430A1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "label": "Rotonda_LQ_short_2",
  "scaleMode": "fit_inside",
  "width": 1280,
  "loop": false,
  "id": "video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
  "class": "Video",
  "height": 720,
  "thumbnailUrl": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB_t.jpg",
  "video": {
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB.mp4",
   "height": 720
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ]
     },
     "id": "panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 67.14,
      "hfov": 90,
      "pitch": -0.98
     }
    }
   }
  ],
  "id": "playList_3CC1E174_2C57_D9CF_41A0_B5F2992828A2"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F5D99_20DF_6BBF_41BD_058622C73035",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3C090348_2C57_D9C7_41C2_207EBD139DE8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -83.53,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_3EA1D61F_2C57_DB79_41B8_A51232FBF119",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_0.jpg",
    "width": 1200,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2392929C_2C57_DB7F_41A2_9AE681D319AB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.65,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E359A214_ED68_4575_41DB_B895523643F9",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA59621_2C57_DB49_41AC_FC04F54E3C34",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3DC36481_2C57_DF49_41B6_52370D7848A4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -54.13,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345ECD8F_20DF_6B94_41AE_2D20B974323E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
 {
  "class": "FadeOutEffect",
  "id": "effect_345EDD8F_20DF_6B94_41BF_D2C5F914980C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_3EBF261B_2C57_DB79_41BB_702262933F0B",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3EEFE5F5_2C57_D8C9_41AD_40E25E89A65C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.15,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.MainViewerPanoramaPlayer",
 {
  "class": "FadeOutEffect",
  "id": "effect_34593D8F_20DF_6B94_41B9_C6D005829662",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -160.79,
   "hfov": 90,
   "pitch": -16.48
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3C4452FC_2C57_D8BF_41BE_3A9B94DAB53D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -91.45,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
 {
  "class": "FadeInEffect",
  "id": "effect_3EA24620_2C57_DB47_41C0_1A2647E84279",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F6D8F_20DF_6B94_410B_52B44954FB30",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_37E7B455_24BA_B0D4_41A5_EF23708D6C53",
 {
  "class": "FadeOutEffect",
  "id": "effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
 {
  "class": "FadeOutEffect",
  "id": "effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "label": "Video LLCC_1",
  "scaleMode": "fit_inside",
  "width": 1920,
  "loop": false,
  "id": "video_AACF54D1_863F_D6FD_41DE_40A992E518BA",
  "class": "Video",
  "height": 1078,
  "thumbnailUrl": "media/video_AACF54D1_863F_D6FD_41DE_40A992E518BA_t.jpg",
  "video": {
   "class": "VideoResource",
   "width": 1920,
   "mp4Url": "media/video_AACF54D1_863F_D6FD_41DE_40A992E518BA.mp4",
   "height": 1078
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_3CF79180_2C57_D947_41BC_F5B44A1A42CB"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3CDF5384_2C57_D94F_419A_BBE52404FE98",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.58,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345FBD97_20DF_6BB3_41A7_CB088826B439",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "class": "Map",
  "label": "Centro Corporativo",
  "id": "map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
  "width": 300,
  "fieldOfViewOverlayRadiusScale": 0.19,
  "maximumZoomFactor": 1.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17.png",
     "width": 300,
     "height": 209
    }
   ]
  },
  "scaleMode": "fit_inside",
  "overlays": [
   {
    "useHandCursor": true,
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 16.55,
     "height": 20,
     "y": 149.55,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0.png",
        "width": 19,
        "height": 19
       }
      ]
     }
    },
    "map": {
     "width": 20,
     "x": 16.55,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_0_map.gif",
        "width": 9,
        "height": 9
       }
      ]
     },
     "y": 149.55,
     "class": "HotspotMapOverlayMap",
     "offsetY": 0,
     "height": 20,
     "offsetX": 0
    },
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": true,
    "id": "overlay_FCFECF03_DD1A_A3DC_41C3_A9E15DF295E9",
    "data": {
     "label": "Image"
    }
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 83.5,
     "height": 20,
     "y": 151.55,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1.png",
        "width": 19,
        "height": 19
       }
      ]
     }
    },
    "map": {
     "width": 20,
     "x": 83.5,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_1_map.gif",
        "width": 9,
        "height": 9
       }
      ]
     },
     "y": 151.55,
     "class": "HotspotMapOverlayMap",
     "offsetY": 0,
     "height": 20,
     "offsetX": 0
    },
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": true,
    "id": "overlay_FFCF2D2D_DD19_A627_41B8_CFCAE1C65CD2",
    "data": {
     "label": "Image"
    }
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 24.05,
     "height": 20,
     "y": 6.6,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2.png",
        "width": 19,
        "height": 19
       }
      ]
     }
    },
    "map": {
     "width": 20,
     "x": 24.05,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_2_map.gif",
        "width": 9,
        "height": 9
       }
      ]
     },
     "y": 6.6,
     "class": "HotspotMapOverlayMap",
     "offsetY": 0,
     "height": 20,
     "offsetX": 0
    },
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": true,
    "id": "overlay_FEA879B1_DD16_6E3C_41E7_2FF39A318D51",
    "data": {
     "label": "Image"
    }
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 138,
     "height": 20,
     "y": 5.6,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3.png",
        "width": 19,
        "height": 19
       }
      ]
     }
    },
    "map": {
     "width": 20,
     "x": 138,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_3_map.gif",
        "width": 9,
        "height": 9
       }
      ]
     },
     "y": 5.6,
     "class": "HotspotMapOverlayMap",
     "offsetY": 0,
     "height": 20,
     "offsetX": 0
    },
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": true,
    "id": "overlay_FF9139DD_DD16_AE64_41E7_9B2CF203BB6B",
    "data": {
     "label": "Image"
    }
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 141.5,
     "height": 20,
     "y": 96.5,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4.png",
        "width": 19,
        "height": 19
       }
      ]
     }
    },
    "map": {
     "width": 20,
     "x": 141.5,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_4_map.gif",
        "width": 9,
        "height": 9
       }
      ]
     },
     "y": 96.5,
     "class": "HotspotMapOverlayMap",
     "offsetY": 0,
     "height": 20,
     "offsetX": 0
    },
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": true,
    "id": "overlay_FEFCC206_DD17_9DE5_41C8_3ECC72F63227",
    "data": {
     "label": "Image"
    }
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 271,
     "height": 20,
     "y": 12.6,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5.png",
        "width": 19,
        "height": 19
       }
      ]
     }
    },
    "map": {
     "width": 20,
     "x": 271,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_5_map.gif",
        "width": 9,
        "height": 9
       }
      ]
     },
     "y": 12.6,
     "class": "HotspotMapOverlayMap",
     "offsetY": 0,
     "height": 20,
     "offsetX": 0
    },
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": true,
    "id": "overlay_FF91DE69_DD17_A22C_41DE_D1342F576EA9",
    "data": {
     "label": "Image"
    }
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 206.1,
     "height": 20,
     "y": 162,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6.png",
        "width": 19,
        "height": 19
       }
      ]
     }
    },
    "map": {
     "width": 20,
     "x": 206.1,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_6_map.gif",
        "width": 9,
        "height": 9
       }
      ]
     },
     "y": 162,
     "class": "HotspotMapOverlayMap",
     "offsetY": 0,
     "height": 20,
     "offsetX": 0
    },
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": true,
    "id": "overlay_FFB50497_DD16_A6E4_41E4_5BEA266BE86F",
    "data": {
     "label": "Image"
    }
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 141.5,
     "height": 20,
     "y": 81.55,
     "class": "HotspotMapOverlayImage",
     "width": 20,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7.png",
        "width": 19,
        "height": 19
       }
      ]
     }
    },
    "map": {
     "width": 20,
     "x": 141.5,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_7_map.gif",
        "width": 9,
        "height": 9
       }
      ]
     },
     "y": 81.55,
     "class": "HotspotMapOverlayMap",
     "offsetY": 0,
     "height": 20,
     "offsetX": 0
    },
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": true,
    "id": "overlay_FE5AF794_DD09_A2E4_41D0_61777F7E15D3",
    "data": {
     "label": "Image"
    }
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000"
     }
    ],
    "image": {
     "x": 37.65,
     "height": 20.27,
     "y": 72.45,
     "class": "HotspotMapOverlayImage",
     "width": 20.27,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8.png",
        "width": 20,
        "height": 20
       }
      ]
     }
    },
    "map": {
     "width": 20.27,
     "x": 37.65,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_HS_8_map.gif",
        "width": 10,
        "height": 10
       }
      ]
     },
     "y": 72.45,
     "class": "HotspotMapOverlayMap",
     "offsetY": 0,
     "height": 20.27,
     "offsetX": 0
    },
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": true,
    "id": "overlay_01B54DAD_1A41_CF78_41A6_909B29F94B5F",
    "data": {
     "label": "Image"
    }
   }
  ],
  "fieldOfViewOverlayOutsideOpacity": 0,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "height": 209,
  "thumbnailUrl": "media/map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17_t.png"
 },
 "this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
 {
  "class": "FadeOutEffect",
  "id": "effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CEB2189_2C57_D959_41C2_026EDB69F309, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E3D97_20DF_6BB3_41B7_C907450FD669, 'hideEffect', false)",
    "media": "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FCD97_20DF_6BB3_41B7_5533F0603364, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ]
     },
     "id": "panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 90,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CEB2189_2C57_D959_41C2_026EDB69F309"
   }
  ],
  "id": "playList_3C287160_2C57_D9C7_41A2_CE01EC2D82E1"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_233D420E_2C57_DB5B_418F_67A1C1F5E9C5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.54,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_209897EC_11B3_4D40_41A2_837DB50E3A59",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_0.jpg",
    "width": 1500,
    "height": 851
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_1.jpg",
    "width": 1024,
    "height": 580
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3638CA38_249B_905C_41B3_EA26EB9333F0_0_2.jpg",
    "width": 512,
    "height": 290
   }
  ],
  "id": "ImageResource_32CC759C_24AE_9054_419F_511B2D533327"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_0.jpg",
    "width": 3861,
    "height": 2574
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_1.jpg",
    "width": 2048,
    "height": 1365
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_2.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_3.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3D0C1450_2C57_DFC7_41C4_6ACBE0AC4C4B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -107.65,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F7D8F_20DF_6B94_41B8_4073C3801F63",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_23A612D8_2C57_D8C7_41B9_015422795603",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.5,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_369EF53B_249A_B05C_41BC_AE1E970C16EA",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3DFF849B_2C57_DF79_41BF_259ED9D4D7C0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -25.69,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3D133438_2C57_DF47_41BB_FC7DB8C75670",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -129.9,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_D60305E4_DCEA_D39F_419B_D9B149482827",
 {
  "class": "FadeOutEffect",
  "id": "effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3E8D160E_2C57_DB5B_41AB_7BAEDFEB2FA3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.08,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43",
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
 {
  "class": "FadeInEffect",
  "id": "effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_23E8E290_2C57_DB47_41B3_6FCA117E7AD6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 58.94,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5",
 {
  "class": "FadeInEffect",
  "id": "effect_0B500FD7_1A54_37AE_41A9_19AE8C776076",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.popup_3A305B90_20FB_94FB_4193_FEB3450979FC",
 "this.MapViewerMapPlayer",
 {
  "class": "FadeOutEffect",
  "id": "effect_345E7D8F_20DF_6B94_41B1_383A596C4C67",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_23D6D24A_2C57_DBDB_41C3_AEFADA043691",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.6,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3D9B94C2_2C57_D8CB_415E_8CDE6B758E52",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.04,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3C666323_2C57_D949_41AA_DC3A98D01491",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 174.77,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_0.jpg",
    "width": 1200,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA3161F_2C57_DB79_419C_E558C17C1333",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.popup_3638CA38_249B_905C_41B3_EA26EB9333F0",
 {
  "class": "FadeOutEffect",
  "id": "effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.Menu_3C91A18C_2C57_D95F_41BD_95A4AC53C499",
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3ED565C4_2C57_D8CF_419E_6E9A5702B3F3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -95.48,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3C13D32F_2C57_D959_4192_30B4B6B22B75",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.95,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3DB784E9_2C57_D8D9_41C2_D18EE379C8FB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.59,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CED018A_2C57_D95B_41A1_72FBEDC8ABBA, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CFD97_20DF_6BB4_41BB_97095DF13BBA, 'hideEffect', false)",
    "media": "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ]
     },
     "id": "panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": -143.47,
      "hfov": 90,
      "pitch": -37.77
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CED018A_2C57_D95B_41A1_72FBEDC8ABBA"
   }
  ],
  "id": "playList_3C2D7168_2C57_D9C7_41B7_0863265BB03C"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345EFD8F_20DF_6B94_41B7_4853257F85EE",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3C3C935F_2C57_D9F9_4191_24B7A060C859",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.67,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -109.83,
   "hfov": 90,
   "pitch": -5.19
  }
 },
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
 {
  "class": "FadeOutEffect",
  "id": "effect_345E8D8F_20DF_6B94_419E_3AE578883B9D",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3C8D2FD8_2C56_28C7_41AD_29336F70713BVideoPlayer)",
    "media": "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
    "start": "this.viewer_uid3C8D2FD8_2C56_28C7_41AD_29336F70713BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3D439FF8_2C56_28C7_41B5_722DF5A62253, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3D439FF8_2C56_28C7_41B5_722DF5A62253, 0)",
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "viewerArea": {
      "paddingBottom": 0,
      "toolTipFontSize": "1.11vh",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "viewer_uid3CDA4171_2C57_D9C9_41AC_004FF3C46159",
      "playbackBarHeadBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadow": true,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "width": "100%",
      "borderSize": 0,
      "progressBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "playbackBarOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 50,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipFontFamily": "Arial",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipFontStyle": "normal",
      "playbackBarBorderColor": "#FFFFFF",
      "paddingRight": 0,
      "height": "100%",
      "minWidth": 100,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarHeadWidth": 6,
      "playbackBarHeight": 10,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "propagateClick": false,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "transitionDuration": 500,
      "progressBorderRadius": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarRight": 0,
      "playbackBarHeadHeight": 15,
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "displayTooltipInTouchScreens": true,
      "toolTipFontColor": "#606060",
      "toolTipDisplayTime": 600,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingRight": 6,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowColor": "#000000",
      "progressBarBorderRadius": 0,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadOpacity": 1,
      "toolTipPaddingTop": 4,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressRight": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "data": {
       "name": "ViewerArea4853"
      },
      "progressBottom": 2,
      "progressHeight": 10,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical"
     },
     "id": "viewer_uid3C8D2FD8_2C56_28C7_41AD_29336F70713BVideoPlayer",
     "displayPlaybackBar": true
    }
   }
  ],
  "id": "PlayList_3D439FF8_2C56_28C7_41B5_722DF5A62253"
 },
 "this.popup_E489B6D4_EF2C_2CEA_41DB_4163099AA2D6",
 {
  "class": "FadeOutEffect",
  "id": "effect_345CCD8F_20DF_6B94_41BC_F061530E83AF",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_69A80F4D_649D_BA6A_4181_FB07157852B5_camera",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_0.jpg",
    "width": 2000,
    "height": 1333
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3AF279F7_20F8_9425_41B8_727B1C05B69A_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_095FC95D_2068_946A_41A5_88BA52F0CF59"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3CFE83A9_2C57_D959_41B3_4E186A4BB3BD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -70.25,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3CA3B3F1_2C57_D8C9_41C4_E9906E33BD41",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 67.62,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_15C35325_1A28_8F42_41B7_5F4F22A47E09",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_3CF60180_2C57_D947_4193_1AD7EE1CEE98"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_0.jpg",
    "width": 1067,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_1.jpg",
    "width": 1024,
    "height": 767
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3CC23B7F_107F_4540_4180_ABF478E71F9A_0_2.jpg",
    "width": 512,
    "height": 383
   }
  ],
  "id": "ImageResource_20FB6245_107F_4740_41A8_9C0A46A92B4D"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA1D61D_2C57_DB79_418A_283AC9411643",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36539A9C_24AE_9054_41AC_911079BB2A7C_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_32C8A59C_24AE_9054_41B0_230945BD42EC"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_72699DCF_64A4_9E66_417A_2D9BA948AEB2"
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
 "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90",
 {
  "class": "FadeOutEffect",
  "id": "effect_3EBF661B_2C57_DB79_41C5_50AA59C379D3",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3EC285D1_2C57_D8C9_4196_AA0BEEC6A0F3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 106.1,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_708C5CA9_64AF_FE2A_41C3_BD5D3F402CB8",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3C51B2E4_2C57_D8CF_41C2_35B0A51174AB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.91,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CEA2189_2C57_D959_41A3_63EB770B0746, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D8F_20DF_6B94_41B1_D214F66E6293, 'hideEffect', false)",
    "media": "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F6D8F_20DF_6B94_410B_52B44954FB30, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ]
     },
     "id": "panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 90,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CEA2189_2C57_D959_41A3_63EB770B0746"
   }
  ],
  "id": "playList_3C2A4161_2C57_D9C9_41B3_50868F22D021"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3E1A9577_2C57_D9C9_4192_B72DC2B917B8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.43,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3D3A145D_2C57_DFF9_41C3_30A1E6596BA8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.42,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 53.23,
   "hfov": 90,
   "pitch": 1.41
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E3D97_20DF_6BB3_41B7_C907450FD669",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EBE261C_2C57_DB7F_41AF_9D0C3118C34C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.popup_25AB8A34_3513_DE40_41C8_119007832823",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3D487413_2C57_DF49_41C4_6F516FA3B52D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.78,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3D89B4D2_2C57_D8CB_41B3_57705DD9A67C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.32,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE81189_2C57_D959_41A0_BA83201DED67, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F2D8F_20DF_6B94_4160_462A4AF9B97A, 'hideEffect', false)",
    "media": "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CCD8F_20DF_6B94_41BC_F061530E83AF, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ]
     },
     "id": "panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 90,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE81189_2C57_D959_41A0_BA83201DED67"
   }
  ],
  "id": "playList_3C29115F_2C57_D9F9_41A9_C6A7444F6505"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3CB603E4_2C57_D8CF_41BB_D305B8B54AD9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -40.57,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3DEDA4B1_2C57_DF49_41AD_6A2E016D4EBB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 148.88,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_3CF7C180_2C57_D947_41A5_1AD163EAC5CC"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA1761E_2C57_DB7B_4193_920A3460A572",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.popup_3509F7CC_246E_7035_41AB_BB188EF81D62",
 "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
 {
  "class": "FadeOutEffect",
  "id": "effect_345C8D97_20DF_6BB3_41AB_11DFCCAD81C0",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3D62C42B_2C57_DF59_4186_19D43A95248B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -158.82,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_36258FF0_249D_EFED_41AB_54067BE4CE8C_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_32C8659C_24AE_9054_4187_C8E2724888E0"
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3EBD261A_2C57_DB7B_41B1_600232E376FE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -42.99,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_23D3423E_2C57_DBBB_41B2_13BAE8E776DF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.37,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_36539A9C_24AE_9054_41AC_911079BB2A7C",
 {
  "class": "FadeOutEffect",
  "id": "effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9_camera",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CEAB18A_2C57_D95B_41B4_DCF0B88EFE56, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E7D8F_20DF_6B94_41B1_383A596C4C67, 'hideEffect', false)",
    "media": "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E0D8F_20DF_6B94_41AE_F32FBDDF5924, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ]
     },
     "id": "panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": -132.07,
      "hfov": 90,
      "pitch": -40.96
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CEAB18A_2C57_D95B_41B4_DCF0B88EFE56"
   }
  ],
  "id": "playList_3C2C8168_2C57_D9C7_41BB_D67C3EFC031E"
 },
 "this.panorama_0FC0356D_1AA7_FF7B_41BA_8B9BDE412DD9",
 {
  "class": "FadeOutEffect",
  "id": "effect_E35A021A_ED68_457D_41DB_F92702D0649E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ]
     },
     "id": "panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": -21.7,
      "hfov": 90,
      "pitch": -5.28
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA7C623_2C57_DB49_41B7_96B005B430A1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_3EA63623_2C57_DB49_4189_29B0142389CE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_3EA68623_2C57_DB49_41B8_DC9BC22A3622, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 90,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA9B624_2C57_DB4F_4182_1B22FCD6DC92, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA80624_2C57_DB4F_41C6_22C9CBE66E0A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA89625_2C57_DB49_4194_7360FA6989D2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EAB6625_2C57_DB49_41C2_C359773FDE1E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 90,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 7, 0)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 8.17,
      "hfov": 90,
      "pitch": -2.94
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist"
 },
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
 {
  "class": "FadeInEffect",
  "id": "effect_3EA89625_2C57_DB49_4194_7360FA6989D2",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3E52F50C_2C57_D95F_41C5_DD0287D03425",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.36,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CF89181_2C57_D949_41C1_7DF0A2EA4399, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06, 'hideEffect', false)",
    "media": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD84_20DF_6B95_41B9_72E06ABF1981, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CF89181_2C57_D949_41C1_7DF0A2EA4399"
   },
   {
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFBB181_2C57_D949_41B3_F28729267075, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EBCC61B_2C57_DB79_418E_79BE4CCCE1F0, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_3EBF261B_2C57_DB79_41BB_702262933F0B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_3EBF661B_2C57_DB79_41C5_50AA59C379D3, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFBB181_2C57_D949_41B3_F28729267075"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CFA3181_2C57_D949_41BD_742DD2892D8E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFA3181_2C57_D949_41BD_742DD2892D8E"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFA8182_2C57_D94B_4194_E30265D1DCBD, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EBE261C_2C57_DB7F_41AF_9D0C3118C34C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFA8182_2C57_D94B_4194_E30265D1DCBD"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFD6182_2C57_D94B_41B6_AD218AE25A29, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EBE961C_2C57_DB7F_414F_0258C16816B8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFD6182_2C57_D94B_41B6_AD218AE25A29"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFDD182_2C57_D94B_41C3_C1F4235BA07C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA1561D_2C57_DB79_41BB_E12F5122CC96, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFDD182_2C57_D94B_41C3_C1F4235BA07C"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFC4182_2C57_D94B_41B1_9F43CEB9F04C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA1D61D_2C57_DB79_418A_283AC9411643, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFC4182_2C57_D94B_41B1_9F43CEB9F04C"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CFF2183_2C57_D949_41BE_5623C965043F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFF2183_2C57_D949_41BE_5623C965043F"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFFA183_2C57_D949_41B3_6D074524A841, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA1761E_2C57_DB7B_4193_920A3460A572, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFFA183_2C57_D949_41B3_6D074524A841"
   },
   {
    "begin": "this.registerKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515', this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515.get('visible')); this.registerKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E', this.Label_E216BE12_F622_684F_41EC_C2D2817E217E.get('visible')); this.registerKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197', this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.registerKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5', this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFE2183_2C57_D949_41C5_27460E5E126E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false); this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false); this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true, -1, this.effect_EF6CE355_F62E_F8F5_41E6_CBD8B4202E02, 'showEffect', false); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false); this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false)",
    "media": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B",
    "end": "if(this.existsKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')){ if(this.getKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5')) { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true, -1, this.effect_0B500FD7_1A54_37AE_41A9_19AE8C776076, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, false, -1, this.effect_3EA1D61F_2C57_DB79_41B8_A51232FBF119, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5'); if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA0761F_2C57_DB79_41C1_91D5BEFDE9CE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E16A3DCC_EFF4_5CFA_41CB_67C65984E5AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')){ if(this.getKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197')) { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true, -1, this.effect_3EA0A61F_2C57_DB79_4182_06E3D9B5BCF5, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, false, -1, this.effect_2606DC67_37A3_6E7A_417B_82BAC7B62691, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2D61738_F65E_D8BA_41DD_6888E340C197'); this.setComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, false, -1, this.effect_EF6C1355_F62E_F8F5_41C5_B9A5C5CCED3E, 'hideEffect', false); if(this.existsKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')){ if(this.getKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E')) { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true, -1, this.effect_3EA3361F_2C57_DB79_41C2_F8EB1842B4C2, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, false, -1, this.effect_26077C68_37A3_6E75_41BD_CC48A65FF42C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E216BE12_F622_684F_41EC_C2D2817E217E'); if(this.existsKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')){ if(this.getKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')) { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_3EA3161F_2C57_DB79_419C_E558C17C1333, 'showEffect', false); } else { this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_2607AC68_37A3_6E75_41B4_6DD6926E6CE9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515')",
    "start": "this.keepComponentVisibility(this.Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5, true); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Label_E2D61738_F65E_D8BA_41DD_6888E340C197, true); this.keepComponentVisibility(this.Label_E253EC4C_F622_28DA_41DB_546DF82EE842, true); this.keepComponentVisibility(this.Label_E216BE12_F622_684F_41EC_C2D2817E217E, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "camera": "this.panorama_E6145D91_EF14_5D6A_41D9_45623053016B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFE2183_2C57_D949_41C5_27460E5E126E"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFF1184_2C57_D94F_41B7_D69266D07E2C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA39620_2C57_DB47_41AB_7C10983FD8A7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFF1184_2C57_D94F_41B7_D69266D07E2C"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFFE184_2C57_D94F_41BC_58045EB3EBF0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA24620_2C57_DB47_41C0_1A2647E84279, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 90,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFFE184_2C57_D94F_41BC_58045EB3EBF0"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFE7184_2C57_D94F_41A7_79FFDC0D0D8E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA50621_2C57_DB49_41B0_A3E19A11895E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFE7184_2C57_D94F_41A7_79FFDC0D0D8E"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CFEF184_2C57_D94F_4183_6B5FAAC6C71E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA59621_2C57_DB49_41AC_FC04F54E3C34, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 90,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CFEF184_2C57_D94F_4183_6B5FAAC6C71E"
   },
   {
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_3CE14185_2C57_D949_41C1_097D39EBC6B6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "media": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_3EA47622_2C57_DB4B_41BF_65859FB33599, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "camera": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE14185_2C57_D949_41C1_097D39EBC6B6"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE02185_2C57_D949_4194_F633CDB0BF3A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
    "camera": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE02185_2C57_D949_4194_F633CDB0BF3A"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE08185_2C57_D949_41AC_2B51CBE62CC6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "media": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE08185_2C57_D949_41AC_2B51CBE62CC6"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_3EA68623_2C57_DB49_41B8_DC9BC22A3622",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera",
 {
  "class": "FadeInEffect",
  "id": "effect_3EA80624_2C57_DB4F_41C6_22C9CBE66E0A",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EBE961C_2C57_DB7F_414F_0258C16816B8",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "footerBackgroundOpacity": 0,
  "shadowOpacity": 0.5,
  "id": "window_27F355CB_2C4A_78D9_41AE_86261A432272",
  "titlePaddingTop": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "backgroundOpacity": 1,
  "shadowSpread": 1,
  "closeButtonBorderColor": "#000000",
  "borderSize": 0,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowBlurRadius": 6,
  "closeButtonBackgroundOpacity": 0.3,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderRadius": 5,
  "bodyPaddingTop": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "modal": true,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColor": [],
  "minHeight": 20,
  "titleFontFamily": "Arial",
  "bodyBackgroundOpacity": 0,
  "minWidth": 20,
  "overflow": "scroll",
  "closeButtonPressedIconLineWidth": 5,
  "headerPaddingBottom": 5,
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonIconColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyPaddingRight": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBorderColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 20,
  "contentOpaque": false,
  "closeButtonBorderSize": 0,
  "propagateClick": false,
  "titlePaddingBottom": 5,
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "bodyPaddingLeft": 0,
  "closeButtonPaddingTop": 5,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerHeight": 5,
  "closeButtonPaddingBottom": 5,
  "backgroundColorRatios": [],
  "headerPaddingTop": 10,
  "class": "Window",
  "scrollBarVisible": "rollOver",
  "closeButtonPaddingRight": 5,
  "children": [
   "this.viewer_uid3CDA4171_2C57_D9C9_41AC_004FF3C46159"
  ],
  "shadowColor": "#000000",
  "paddingLeft": 0,
  "closeButtonIconLineWidth": 5,
  "shadow": true,
  "titleFontSize": "1.29vh",
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyPaddingBottom": 0,
  "titlePaddingRight": 5,
  "closeButtonRollOverBorderSize": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "veilOpacity": 0.4,
  "paddingTop": 0,
  "closeButtonIconWidth": 20,
  "headerBackgroundOpacity": 0,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonRollOverIconLineWidth": 5,
  "gap": 10,
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingLeft": 10,
  "data": {
   "name": "Window547"
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 0
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_23C73260_2C57_DBC7_41B9_84450599C6B7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.82,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345EED8F_20DF_6B94_417E_826782EEF8F0",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.popup_36258FF0_249D_EFED_41AB_54067BE4CE8C",
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3CD29377_2C57_D9C9_4191_CF02E83A563F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.95,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345CED8F_20DF_6B94_41B4_61907719F453",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
 {
  "class": "FadeOutEffect",
  "id": "effect_345EAD84_20DF_6B95_41B9_72E06ABF1981",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_3CF6E180_2C57_D947_41B7_0D4A24F9F39E"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3EE195EA_2C57_D8DB_41C5_75242F6C5276",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.52,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_3EA63623_2C57_DB49_4189_29B0142389CE",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345E5D8F_20DF_6B94_4193_ABB7E016F309",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EBCC61B_2C57_DB79_418E_79BE4CCCE1F0",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_34592D8F_20DF_6B94_41B2_36A2D8C28548",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
 {
  "class": "FadeOutEffect",
  "id": "effect_26077C68_37A3_6E75_41BD_CC48A65FF42C",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3E36559A_2C57_D97B_41BD_07D459BD18D1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.08,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "panorama_8C911D20_820E_09EE_41C0_C274C66438F8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.2,
   "hfov": 90,
   "pitch": -43.45
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE88189_2C57_D959_41B9_13986CA11DCC, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E8D8F_20DF_6B94_419E_3AE578883B9D, 'hideEffect', false)",
    "media": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EAD8F_20DF_6B94_41A5_6F5908EFA5C8, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE88189_2C57_D959_41B9_13986CA11DCC"
   }
  ],
  "id": "playList_3C29C160_2C57_D9C7_41BE_85A9943B5936"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE63188_2C57_D947_41B8_DFF5E6E328EF, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CDD8F_20DF_6B94_41B6_C00B98F530E1, 'hideEffect', false)",
    "media": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345CED8F_20DF_6B94_41B4_61907719F453, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE63188_2C57_D947_41B8_DFF5E6E328EF"
   }
  ],
  "id": "playList_3C24F15E_2C57_D9FB_41C3_86AAC736B557"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA9B624_2C57_DB4F_4182_1B22FCD6DC92",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3E7FE54D_2C57_D9D9_41C5_C7AC152EF4F1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 160.67,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3509F7CC_246E_7035_41AB_BB188EF81D62_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_3294856D_24AE_90F4_418D_8D9776AE9FF3"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_0.jpg",
    "width": 2000,
    "height": 3000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_1.jpg",
    "width": 1365,
    "height": 2048
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_2.jpg",
    "width": 682,
    "height": 1024
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E_0_3.jpg",
    "width": 341,
    "height": 512
   }
  ],
  "id": "ImageResource_0AA1E95D_2068_946A_419A_A79BE517FB92"
 },
 {
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true
 },
 "this.popup_36E9C513_249E_702C_41C0_2CA0C18AAE54",
 {
  "class": "FadeOutEffect",
  "id": "effect_2606DC67_37A3_6E7A_417B_82BAC7B62691",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_AACF54D1_863F_D6FD_41DE_40A992E518BA",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3CF82180_2C57_D947_419D_F8976E9B1C8C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3CF82180_2C57_D947_419D_F8976E9B1C8C, 0)",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer"
   }
  ],
  "id": "playList_3CF82180_2C57_D947_419D_F8976E9B1C8C"
 },
 "this.popup_E49D6E5F_EF2D_FF96_41E0_1DC11B5BF865",
 {
  "class": "FadeOutEffect",
  "id": "effect_34590D8F_20DF_6B94_41BB_A45E78753DDE",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3C1C733C_2C57_D9BF_41A8_63841F0B0B16",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 101.73,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_3BBE3C5B_107F_C340_4178_756995F5135C",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_2330F1F6_2C57_D8CB_41A9_DF5CF764385C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 33.73,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA50621_2C57_DB49_41B0_A3E19A11895E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.popup_3CC23B7F_107F_4540_4180_ABF478E71F9A",
 "this.panorama_092EF3A9_1AA1_9BFB_4186_4D3D44CBEF6E_camera",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_23BD32CC_2C57_D8DF_41BB_13FC7306A1E8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 156.83,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3E27A5B2_2C57_D94B_4188_04DDD9441D00",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 120.31,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_8C87F3C2_820D_F8B2_41DF_59DCC1306D94",
 {
  "class": "FadeOutEffect",
  "id": "effect_345E9D84_20DF_6B95_41BE_7EE2286E8C06",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CEB8189_2C57_D959_41C5_8E8B0302C3F6, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EED8F_20DF_6B94_417E_826782EEF8F0, 'hideEffect', false)",
    "media": "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EFD8F_20DF_6B94_41B7_4853257F85EE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ]
     },
     "id": "panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 90,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CEB8189_2C57_D959_41C5_8E8B0302C3F6"
   }
  ],
  "id": "playList_3C2B7160_2C57_D9C7_419E_4BE1096A1FA4"
 },
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3C323353_2C57_D9C9_41C1_0BF876414DA9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.92,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.map_CBA7EB92_DD1E_E2FC_41E1_10D8C63FF1D6",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_0.jpg",
    "width": 1200,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3CEB33B6_2C57_D94B_41B0_9F08F7570CF9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.87,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3C8BC3D8_2C57_D8C7_41A4_7FE7ED39D662",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 118.98,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_17710817_1AA0_B4D6_41AC_403EE57E31EC_camera",
 "this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_0.jpg",
    "width": 1500,
    "height": 937
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_1.jpg",
    "width": 1024,
    "height": 639
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_34BBD83C_246A_F055_41C1_EBEF48C7F767_0_2.jpg",
    "width": 512,
    "height": 319
   }
  ],
  "id": "ImageResource_32CBA59C_24AE_9054_41C1_95FEFF54BD80"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3E703536_2C57_D94B_41C1_3F0508CB0853",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.54,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
 "this.panorama_160D346A_1A28_89C6_418E_CDA086A7E714",
 "this.popup_3A0D2E7E_20F8_EC26_41AF_91B559C9A8A7",
 {
  "class": "FadeInEffect",
  "id": "effect_3EA3361F_2C57_DB79_41C2_F8EB1842B4C2",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3CC85390_2C57_D947_419B_B62061F9194A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.55,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_239DB2A7_2C57_DB49_419F_11FAA57E61CA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -107.93,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3D5961BF_2C57_D8B9_41BD_A1B07F4E9930",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -46.66,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeInEffect",
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "easing": "linear",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE9B188_2C57_D947_41C5_CF8007791F90, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F4D97_20DF_6BB3_41BF_89E603E3F0DA, 'hideEffect', false)",
    "media": "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F5D99_20DF_6BBF_41BD_058622C73035, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": {
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_in",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "easing": "linear",
        "yawSpeed": 7.96
       },
       {
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "easing": "cubic_out",
        "yawSpeed": 7.96
       }
      ]
     },
     "id": "panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "hfov": 90,
      "pitch": 0
     }
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE9B188_2C57_D947_41C5_CF8007791F90"
   }
  ],
  "id": "playList_3C26815F_2C57_D9F9_41B1_10B10587C07B"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CEA818A_2C57_D95B_41A1_8922476F7288, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F7D8F_20DF_6B94_41B8_4073C3801F63, 'hideEffect', false)",
    "media": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F0D8F_20DF_6B94_419D_ABD4CFF44CF3, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CEA818A_2C57_D95B_41A1_8922476F7288"
   }
  ],
  "id": "playList_3C2D6167_2C57_D9C9_417D_093AB2D1E86A"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3C703309_2C57_D959_41AF_FAC6C740F5FD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 22.27,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_0.jpg",
    "width": 1500,
    "height": 1000
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_369EF53B_249A_B05C_41BC_AE1E970C16EA_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_32CD359C_24AE_9054_41BC_CF812CF11760"
 },
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_23CC626C_2C57_DBDF_41AD_2E8C8587CB2B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.45,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3EF205DD_2C57_D8F9_41BC_44AB9DF2449F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 75.18,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_34BBD83C_246A_F055_41C1_EBEF48C7F767",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_2320F21A_2C57_DB7B_41C2_E48E35AACDCF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -110.67,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_345F5D8F_20DF_6B94_41B1_D214F66E6293",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE6B188_2C57_D947_418C_4F6AB4D03EC2, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345EBD8F_20DF_6B94_41A4_072F6F80B3A4, 'hideEffect', false)",
    "media": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E4D8F_20DF_6B94_41B8_3FE607FF9006, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE6B188_2C57_D947_418C_4F6AB4D03EC2"
   }
  ],
  "id": "playList_3C27515E_2C57_D9FB_4166_BBAC26A565BA"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3CAEA3FC_2C57_D8BF_41B0_62B6609FFA24",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.57,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_0B7B5A27_1FEB_7426_4195_945554348391",
 "this.panorama_0F23384C_1AE1_DB00_41B8_629CA3CA9DE7",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_23B3A2BF_2C57_D8B9_41AD_10C9DACD70A4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.56,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C6C67CB5_DD76_6627_41EB_2B1B3DC48C17",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_3CF62180_2C57_D947_41C4_4E6CFFF07084"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_23DFE255_2C57_DBC9_41BF_734807544BBC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.57,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera",
 {
  "class": "FadeOutEffect",
  "id": "effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3EA0A61F_2C57_DB79_4182_06E3D9B5BCF5",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3C29E36A_2C57_D9D8_41C0_EE06DDCABC99",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.87,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_38F49374_202F_B43B_41B3_F6B49B592B9E",
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
 {
  "class": "FadeInEffect",
  "id": "effect_3EAB6625_2C57_DB49_41C2_C359773FDE1E",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE42187_2C57_D949_41C2_8AC03A460C9C, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34597D8F_20DF_6B94_41AA_44DC8A057CBB, 'hideEffect', false)",
    "media": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34590D8F_20DF_6B94_41BB_A45E78753DDE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_17FA2E42_1A38_D8F2_41A8_FDC1E9E32677_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE42187_2C57_D949_41C2_8AC03A460C9C"
   }
  ],
  "id": "playList_3C326144_2C57_D9CF_4176_0E2B2B44A454"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_232DE233_2C57_DB49_41C2_99D9EB7B27C8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -20.08,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_3CF6A180_2C57_D947_417E_A049D1451970"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3D1E2444_2C57_DFCF_41A3_E869BABA30E4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.32,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE93188_2C57_D947_41C1_5BF064F163A3, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345F8D97_20DF_6BB3_41B5_1A0A5D57797F, 'hideEffect', false)",
    "media": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345FBD97_20DF_6BB3_41A7_CB088826B439, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_10B7FC4E_1FE8_AC67_4194_65789A2F6525_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE93188_2C57_D947_41C1_5BF064F163A3"
   }
  ],
  "id": "playList_3C27C15E_2C57_D9FB_41A9_F4451A0D6802"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3DD4E475_2C57_DFC9_41AD_896614967EF5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -173.56,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
 {
  "class": "FadeOutEffect",
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "easing": "linear",
  "duration": 1000
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3D5D7408_2C57_DF47_41B2_0D11FBAE5695",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 103.75,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3D76B41F_2C57_DF79_41B7_FD03AAE2475A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.35,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_17E9586E_1AA7_B579_41B3_42F86EA49748_camera",
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
 "this.panorama_0F951B15_1AE3_7D00_4197_8F0A91C0B246",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_0.jpg",
    "width": 2000,
    "height": 1333
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_1.jpg",
    "width": 1024,
    "height": 682
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3A3C822F_20F8_9425_41B2_B5F3B1085960_0_2.jpg",
    "width": 512,
    "height": 341
   }
  ],
  "id": "ImageResource_0AAA2971_2068_943D_41B4_10DFF5B38D1B"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_0.jpg",
    "width": 1600,
    "height": 896
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_1.jpg",
    "width": 1024,
    "height": 573
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_25AB8A34_3513_DE40_41C8_119007832823_0_2.jpg",
    "width": 512,
    "height": 286
   }
  ],
  "id": "ImageResource_232B696E_352D_BAC0_41B1_E8DFF9648419"
 },
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
 "this.popup_3AF279F7_20F8_9425_41B8_727B1C05B69A",
 "this.popup_3A3D4B18_20F8_95EA_41BA_CAA5811F9E9E",
 "this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3E088589_2C57_D959_41C2_07B06D38494A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.1,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.panorama_8D2B84DA_820A_3852_41DD_5CADF2282E90_camera",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE75188_2C57_D947_41B8_24D163454BE6, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E5D8F_20DF_6B94_4193_ABB7E016F309, 'hideEffect', false)",
    "media": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_345E6D8F_20DF_6B94_41A3_46A48BBB0ACC, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_0B1077E7_1AA3_BB77_4161_DDFBEA37746B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE75188_2C57_D947_41B8_24D163454BE6"
   }
  ],
  "id": "playList_3C258158_2C57_D9C7_4187_365A41FC0BF2"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_23293226_2C57_DB4B_41A6_CD708CA1176B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.92,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_238652B3_2C57_DB49_41C1_9B35FE9FD2CB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.15,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_3A3C822F_20F8_9425_41B2_B5F3B1085960",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3DF1848E_2C57_DF5B_41AD_C91AC7B856D1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -103.1,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3C9593C1_2C57_D8C9_41AD_650588B01790",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.26,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CE45187_2C57_D949_41B2_DE706D8CBA61, this.MapViewerMapPlayer); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34592D8F_20DF_6B94_41B2_36A2D8C28548, 'hideEffect', false)",
    "media": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8",
    "end": "this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_34593D8F_20DF_6B94_41B9_C6D005829662, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true)",
    "camera": "this.panorama_8C911D20_820E_09EE_41C0_C274C66438F8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CE45187_2C57_D949_41B2_DE706D8CBA61"
   }
  ],
  "id": "playList_3C352145_2C57_D9C9_41B2_A81A867C134C"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3C9EE3CD_2C57_D8D9_41C0_3FEC59A2AC47",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.89,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_0.jpg",
    "width": 2000,
    "height": 1236
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_1.jpg",
    "width": 1024,
    "height": 632
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E3A0AD40_EF1C_5DEA_41D4_43FC074D0E43_0_2.jpg",
    "width": 512,
    "height": 316
   }
  ],
  "id": "ImageResource_E253E6BD_EF1D_EC9A_41EA_C503E65D3053"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_23FF9284_2C57_DB4F_4192_0CA453DC2D33",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -51.43,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_3DA5B4FA_2C57_D8BB_41C2_D0636FB874E5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.62,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_375EC7FF_24BA_9FD4_41BF_DC449B7185EB",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3CF9E180_2C57_D947_41BC_B4BE8F9AA87B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3CF9E180_2C57_D947_41BC_B4BE8F9AA87B, 0)",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer"
   }
  ],
  "id": "playList_3CF9E180_2C57_D947_41BC_B4BE8F9AA87B"
 },
 "this.panorama_0C5DBE0F_1FF8_AFE6_41B0_0D81B872F368_camera",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_0.jpg",
    "width": 1053,
    "height": 800
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
    "width": 1024,
    "height": 777
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_2.jpg",
    "width": 512,
    "height": 388
   }
  ],
  "id": "ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_3CED818A_2C57_D95B_41A0_BCCA3F434DE4, this.MapViewerMapPlayer)",
    "media": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F",
    "camera": "this.panorama_92DCC187_820A_38B2_41E0_0245C2CF622F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_3CED818A_2C57_D95B_41A0_BCCA3F434DE4"
   }
  ],
  "id": "playList_3C2DF168_2C57_D9C7_41B8_E2C0979610D8"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_23F52278_2C57_DBC7_41C2_4B21BBA931C7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 22.39,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3CF2E39D_2C57_D979_41A4_72004B0C241B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -100.57,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_23362202_2C57_DB4B_41C5_B9FDC04F6580",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.93,
   "hfov": 90,
   "pitch": 0
  }
 },
 "this.popup_E4916E1C_EF2C_7F9A_41C8_2B8BCA667B7C",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "id": "camera_3C7DF316_2C57_D94B_41B8_66DA7C8398D9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.68,
   "hfov": 90,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_E2F08A93_EFFC_276E_41DA_281990A5A64C",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_3CF92180_2C57_D947_41C1_27D63A0B5200"
 }
], "children": [
 {
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "toolTipBackgroundColor": "#F6F6F6",
  "id": "MainViewer",
  "left": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "width": "100%",
  "borderSize": 0,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipOpacity": 1,
  "progressBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minHeight": 50,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipFontStyle": "normal",
  "playbackBarBorderColor": "#FFFFFF",
  "paddingRight": 0,
  "height": "100%",
  "minWidth": 100,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "propagateClick": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "transitionDuration": 500,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "displayTooltipInTouchScreens": true,
  "toolTipFontColor": "#606060",
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "paddingLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 6,
  "progressBarBorderColor": "#000000",
  "top": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingTop": 4,
  "paddingTop": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressOpacity": 1,
  "playbackBarBottom": 5,
  "data": {
   "name": "Main Viewer"
  },
  "progressBottom": 0,
  "progressHeight": 10,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "class": "Container",
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "left": "0%",
  "children": [
   {
    "backgroundColorRatios": [
     0.8
    ],
    "class": "Container",
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "width": 334,
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0.1,
    "paddingLeft": 0,
    "children": [
     {
      "toolTipFontSize": 12,
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "transparencyActive": true,
      "toolTipPaddingLeft": 6,
      "width": 75,
      "toolTipFontColor": "#606060",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "toolTipDisplayTime": 600,
      "shadow": false,
      "toolTipPaddingRight": 6,
      "toolTipShadowOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipBorderRadius": 3,
      "toolTipOpacity": 1,
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "verticalAlign": "middle",
      "minHeight": 1,
      "toolTipTextShadowColor": "#000000",
      "height": 50,
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "minWidth": 1,
      "toolTip": "Home",
      "click": "this.openLink('https://www.lalimafreezone.com/', '_top')",
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "paddingRight": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipShadowColor": "#333333",
      "paddingTop": 0,
      "horizontalAlign": "center",
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "propagateClick": false,
      "data": {
       "name": "Button_home"
      },
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "toolTipTextShadowBlurRadius": 3,
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     {
      "toolTipFontSize": 12,
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "transparencyActive": true,
      "toolTipPaddingLeft": 6,
      "width": 75,
      "toolTipFontColor": "#606060",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "toolTipDisplayTime": 600,
      "shadow": false,
      "toolTipPaddingRight": 6,
      "toolTipShadowOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipBorderRadius": 3,
      "toolTipOpacity": 1,
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "verticalAlign": "middle",
      "minHeight": 1,
      "toolTipTextShadowColor": "#000000",
      "height": 50,
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "minWidth": 1,
      "toolTip": "Map",
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else { this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "paddingRight": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipShadowColor": "#333333",
      "paddingTop": 0,
      "horizontalAlign": "center",
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "propagateClick": false,
      "data": {
       "name": "Button_Map"
      },
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "toolTipTextShadowBlurRadius": 3,
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     {
      "maxWidth": 225,
      "class": "Image",
      "maxHeight": 225,
      "width": 75,
      "id": "Image_5DD52A9D_53AB_71BB_41D2_61C6638CC12D",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "skin/Image_5DD52A9D_53AB_71BB_41D2_61C6638CC12D.png",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "verticalAlign": "middle",
      "minHeight": 1,
      "height": 50,
      "minWidth": 1,
      "click": "this.openLink('https://www.lalimafreezone.com/real-estate', '_top')",
      "paddingRight": 0,
      "paddingTop": 0,
      "horizontalAlign": "center",
      "propagateClick": false,
      "data": {
       "name": "Image2280"
      },
      "scaleMode": "fit_inside",
      "cursor": "hand",
      "paddingBottom": 0
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "minHeight": 77,
    "scrollBarMargin": 2,
    "height": 77,
    "minWidth": 334,
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "backgroundColor": [
     "#000000"
    ],
    "paddingTop": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_btones"
    },
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "width": "100%",
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "height": "18.033%",
  "minWidth": 1,
  "overflow": "scroll",
  "bottom": "0%",
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container_Menu"
  },
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "children": [
   {
    "class": "Container",
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "children": [
     "this.MapViewer",
     {
      "maxWidth": 448,
      "class": "Image",
      "id": "Image_E84AED1C_E346_1439_41DD_9142DAACB163",
      "maxHeight": 264,
      "width": "100%",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "skin/Image_E84AED1C_E346_1439_41DD_9142DAACB163.png",
      "borderRadius": 0,
      "minHeight": 1,
      "height": "27.233%",
      "minWidth": 1,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "horizontalAlign": "center",
      "propagateClick": false,
      "data": {
       "name": "Simbologia"
      },
      "scaleMode": "fit_inside",
      "paddingBottom": 0
     }
    ],
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "width": "100%",
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "layout": "vertical",
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "height": "81.45%",
    "minWidth": 1,
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_Map"
    },
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "right": "0%",
  "paddingLeft": 0,
  "width": "29.316%",
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "layout": "vertical",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "creationPolicy": "inAdvance",
  "scrollBarOpacity": 0.5,
  "top": "2.05%",
  "minHeight": 1,
  "height": "77.049%",
  "minWidth": 1,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "verticalAlign": "top",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "propagateClick": false,
  "data": {
   "name": "Main_Container"
  },
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "left": "0%",
  "children": [
   {
    "fontFamily": "Arial",
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "DropDown",
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "prompt": "Location List",
    "popUpBackgroundOpacity": 0.72,
    "width": "20.256%",
    "backgroundOpacity": 0.72,
    "popUpShadowOpacity": 0,
    "paddingLeft": 5,
    "borderSize": 0,
    "shadow": false,
    "popUpBackgroundColor": "#FFFFFF",
    "arrowBeforeLabel": false,
    "selectedPopUpBackgroundColor": "#0066FF",
    "borderRadius": 4,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "backgroundColorDirection": "vertical",
    "fontColor": "#333333",
    "popUpShadowColor": "#000000",
    "minHeight": 20,
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "popUpBorderRadius": 0,
    "minWidth": 200,
    "popUpShadowSpread": 1,
    "selectedPopUpFontColor": "#FFFFFF",
    "popUpGap": 0,
    "paddingRight": 5,
    "height": "27.397%",
    "paddingTop": 0,
    "fontStyle": "normal",
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "popUpShadow": false,
    "popUpShadowBlurRadius": 6,
    "propagateClick": false,
    "data": {
     "name": "Location List"
    },
    "fontSize": 14,
    "textDecoration": "none",
    "popUpFontColor": "#000000",
    "fontWeight": "normal",
    "arrowColor": "#0066FF",
    "gap": 0,
    "paddingBottom": 0
   }
  ],
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "width": "100%",
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "top": "0.96%",
  "minHeight": 1,
  "height": "10%",
  "minWidth": 1,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "verticalAlign": "top",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "ContainerDropDown"
  },
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "class": "Label",
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "left": "0%",
  "width": "100%",
  "backgroundOpacity": 0,
  "textShadowOpacity": 1,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "text": "La Lima Free Zone",
  "fontColor": "#FFFFFF",
  "top": "0%",
  "minHeight": 1,
  "height": "10%",
  "textShadowColor": "#000000",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "textShadowVerticalLength": 1,
  "textShadowHorizontalLength": 1,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "propagateClick": false,
  "data": {
   "name": "Label_La Lima Free Zone"
  },
  "fontSize": 20,
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "class": "Label",
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "left": "0%",
  "width": "100%",
  "backgroundOpacity": 0,
  "textShadowOpacity": 1,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "text": "Cartago City",
  "fontColor": "#FFFFFF",
  "top": "0%",
  "minHeight": 1,
  "height": "10%",
  "textShadowColor": "#000000",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "textShadowVerticalLength": 1,
  "textShadowHorizontalLength": 1,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "propagateClick": false,
  "data": {
   "name": "Label_Cartago City"
  },
  "fontSize": 20,
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "class": "Label",
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "left": "0%",
  "width": "100%",
  "backgroundOpacity": 0,
  "textShadowOpacity": 1,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "text": "Corporate Center Project",
  "fontColor": "#FFFFFF",
  "top": "0%",
  "minHeight": 1,
  "height": "13.108%",
  "textShadowColor": "#000000",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "textShadowVerticalLength": 1,
  "textShadowHorizontalLength": 1,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "propagateClick": false,
  "data": {
   "name": "Label_Corporate Center"
  },
  "fontSize": 20,
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "class": "Label",
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "left": "0%",
  "width": "100%",
  "backgroundOpacity": 0,
  "textShadowOpacity": 1,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "text": "Corporate Building",
  "fontColor": "#FFFFFF",
  "top": "6%",
  "minHeight": 1,
  "height": "3.5%",
  "textShadowColor": "#000000",
  "minWidth": 1,
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "textShadowVerticalLength": 1,
  "textShadowHorizontalLength": 1,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "propagateClick": false,
  "data": {
   "name": "Label_Corporate Building"
  },
  "fontSize": 20,
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "class": "Container",
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "left": "0%",
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "left": "4.32%",
    "children": [
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "width": "99.907%",
      "backgroundOpacity": 1,
      "right": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "https://www.dailymotion.com/embed/video/k6rUD3T5joeDTUvKk40?queue-enable=false\n",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "minHeight": 1,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "paddingRight": 0,
      "height": "100%",
      "paddingTop": 0,
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_Zollner"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
      "id": "WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB",
      "left": "0%",
      "width": "100%",
      "backgroundOpacity": 1,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "https://www.dailymotion.com/embed/video/k7aiEquDs4DSNjvDIsI?queue-enable=false",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "minHeight": 1,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "paddingRight": 0,
      "height": "100%",
      "paddingTop": 0,
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_CC"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
      "id": "WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411",
      "left": "0%",
      "width": "100%",
      "backgroundOpacity": 1,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "https://www.dailymotion.com/embed/video/k4dN6UKjyjUQgHvKk41?queue-enable=false",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "minHeight": 1,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "paddingRight": 0,
      "height": "100%",
      "paddingTop": 0,
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_Coloplast"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
      "id": "WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3",
      "left": "0%",
      "width": "100%",
      "backgroundOpacity": 1,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "https://www.dailymotion.com/embed/video/k4nUdPSpMq4U2rvCZSh?queue-enable=false",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "minHeight": 1,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "paddingRight": 0,
      "height": "100%",
      "paddingTop": 0,
      "scrollEnabled": true,
      "propagateClick": false,
      "data": {
       "name": "WebFrame_video3D"
      },
      "visible": false,
      "insetBorder": false,
      "paddingBottom": 0
     },
     {
      "maxWidth": 394,
      "class": "Image",
      "id": "Image_97A8F4AB_874A_EB6D_41DC_914C3E0931EC",
      "maxHeight": 396,
      "width": "10%",
      "backgroundOpacity": 0,
      "right": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "skin/Image_97A8F4AB_874A_EB6D_41DC_914C3E0931EC.png",
      "borderRadius": 0,
      "top": "0%",
      "minHeight": 1,
      "height": "15%",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "horizontalAlign": "center",
      "propagateClick": false,
      "data": {
       "name": "Button_Close"
      },
      "scaleMode": "fit_inside",
      "paddingBottom": 0
     }
    ],
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0.3,
    "paddingLeft": 0,
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "width": "91.341%",
    "layout": "absolute",
    "scrollBarWidth": 10,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "bottom": "3.11%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minWidth": 1,
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "verticalAlign": "top",
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "horizontalAlign": "left",
    "height": "91.081%",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Web container "
    },
    "gap": 10,
    "visible": false,
    "paddingBottom": 0
   }
  ],
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.3,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "width": "100%",
  "layout": "absolute",
  "scrollBarWidth": 10,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarMargin": 2,
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 1,
  "overflow": "scroll",
  "creationPolicy": "inAdvance",
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "verticalAlign": "top",
  "paddingTop": 0,
  "horizontalAlign": "left",
  "height": "100%",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Main Container Web link"
  },
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "class": "UIComponent",
  "id": "veilPopupPanorama",
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 0,
  "paddingRight": 0,
  "paddingTop": 0,
  "propagateClick": false,
  "data": {
   "name": "UIComponent4854"
  },
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [],
  "class": "ZoomImage",
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "paddingRight": 0,
  "paddingTop": 0,
  "propagateClick": false,
  "data": {
   "name": "ZoomImage4855"
  },
  "visible": false,
  "scaleMode": "custom",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "class": "CloseButton",
  "id": "closeButtonPopupPanorama",
  "pressedIconColor": "#888888",
  "backgroundOpacity": 0.3,
  "fontSize": "1.29vh",
  "right": 10,
  "paddingLeft": 5,
  "borderSize": 0,
  "shadow": false,
  "shadowSpread": 1,
  "borderRadius": 0,
  "layout": "horizontal",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "fontColor": "#FFFFFF",
  "top": 10,
  "minHeight": 0,
  "shadowColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "rollOverIconColor": "#666666",
  "gap": 5,
  "mode": "push",
  "minWidth": 0,
  "borderColor": "#000000",
  "iconBeforeLabel": true,
  "paddingRight": 5,
  "paddingTop": 5,
  "label": "",
  "iconColor": "#000000",
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "iconLineWidth": 5,
  "propagateClick": false,
  "data": {
   "name": "CloseButton4856"
  },
  "iconWidth": 20,
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "iconHeight": 20,
  "cursor": "hand",
  "paddingBottom": 5
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_3CF79180_2C57_D947_41BC_F5B44A1A42CB.set('selectedIndex', 0)",
 "class": "Player",
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scripts": {
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } }
 },
 "horizontalAlign": "left",
 "height": "100%",
 "contentOpaque": false,
 "propagateClick": false,
 "data": {
  "name": "Player7285"
 },
 "mouseWheelEnabled": true,
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
