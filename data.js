var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1468856255849147,
        "pitch": -0.08116234485099838,
        "fov": 1.6634452281961103
      },
      "linkHotspots": [
        {
          "yaw": 0.361391043949288,
          "pitch": -0.22152229853511152,
          "rotation": 6.283185307179586,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7118712511442489,
          "pitch": 0.0016713833121428934,
          "title": "Engineering Info",
          "text": "Very informative text"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.2365679326507468,
        "pitch": -0.04116036922667732,
        "fov": 1.6634452281961103
      },
      "linkHotspots": [
        {
          "yaw": -3.002986011752917,
          "pitch": 0.036298388647944435,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2638232539100667,
          "pitch": -0.1490376951176664,
          "title": "Extinct Cafe",
          "text": "F&amp;B"
        },
        {
          "yaw": 1.158679623429414,
          "pitch": -0.04745535745765217,
          "title": "Choping Corner",
          "text": "FCFS"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.4115059034648336,
        "pitch": -0.43053585912894476,
        "fov": 1.6634452281961103
      },
      "linkHotspots": [
        {
          "yaw": 0.06966424976531016,
          "pitch": -0.047960048884348794,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.284817149605809,
          "pitch": 0.0022182545058697656,
          "title": "Swirly Sculpture",
          "text": "Very swirly"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
