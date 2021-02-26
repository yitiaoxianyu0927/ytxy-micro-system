

                    const menuConfig = 
                        
                        [
  {
    "type": "router",
    "id": "home",
    "env": "development",
    "componentUrl": "/home",
    "meta": {
      "icon": "el-icon-menu",
      "title": "工作台",
      "cache": true
    },
    "path": "/home",
    "contact": false,
    "hasComponet": true,
    "uid": "6a21497f-cd1c-4d2a-840a-ba1f6c43eadc",
    "parentId": ""
  },
  {
    "type": "router",
    "id": "basicSetting",
    "env": "development",
    "meta": {
      "icon": "el-icon-location",
      "title": "基础设置",
      "cache": true
    },
    "children": [
      {
        "type": "router",
        "id": "menuManagement",
        "env": "development",
        "componentUrl": "/basicSetting/menuManagement",
        "meta": {
          "title": "菜单管理",
          "cache": true
        },
        "path": "/menuManagement",
        "contact": false,
        "hasComponet": true,
        "uid": "c1fd59ba-cff8-47cb-a44f-186d99a894ab",
        "parentId": "basicSetting"
      },
      {
        "type": "router",
        "id": "customSetting",
        "env": "development",
        "componentUrl": "/basicSetting/customSetting",
        "meta": {
          "title": "自定义设置",
          "cache": true
        },
        "path": "/customSetting",
        "contact": false,
        "hasComponet": true,
        "uid": "f577834e-9abe-4b78-8105-936aa654ae02",
        "parentId": "basicSetting"
      },
      {
        "type": "router",
        "id": "iconsGroup",
        "env": "development",
        "componentUrl": "/basicSetting/iconsGroup",
        "meta": {
          "title": "图标库",
          "cache": true
        },
        "path": "/iconsGroup",
        "contact": false,
        "hasComponet": true,
        "uid": "855d5e86-31c2-4341-afe1-ac472072d142",
        "parentId": "basicSetting"
      }
    ],
    "path": "/basicSetting",
    "contact": false,
    "hasComponet": false,
    "uid": "ec8f656e-d719-4715-8217-c7aa5811aa6f",
    "parentId": ""
  },
  {
    "type": "iframe",
    "id": "subPage",
    "moduleName": "FRAME_ANY",
    "url": "/static/page/subPage",
    "meta": {
      "icon": "el-icon-s-flag",
      "title": "内嵌页面",
      "cache": true
    },
    "path": "/subPage",
    "contact": false,
    "uid": "e77c1d3e-b714-4236-a69e-931120271594",
    "parentId": ""
  },
  {
    "type": "externalLink",
    "id": "externalLink",
    "url": "https://www.baidu.com/",
    "meta": {
      "icon": "el-icon-link",
      "title": "外链页面",
      "cache": true
    },
    "path": "/externalLink",
    "contact": false,
    "uid": "abfab272-7454-4aed-82be-1507d59c8a93",
    "parentId": ""
  },
  {
    "type": "micro",
    "id": "doc",
    "env": "development",
    "projectName": "PROJECT_VUEAPP",
    "routerPath": "doc",
    "meta": {
      "icon": "el-icon-s-platform",
      "title": "微前端集成",
      "cache": true
    },
    "path": "/vue/doc",
    "contact": false,
    "uid": "cb0b09a6-ca71-4415-9296-0c16fb188570",
    "parentId": ""
  },
  {
    "uid": "dfe616bf-e1cd-4903-800e-f9ea1905c3ac",
    "type": "router",
    "id": "subApp_frame_vue",
    "env": "",
    "icon": "icon-drawer",
    "title": "IFRAME展示",
    "meta": {
      "icon": "icon-drawer",
      "title": "IFRAME展示"
    },
    "componentUrl": "/subPage/iframe",
    "url": null,
    "routerPath": null,
    "projectName": "",
    "children": [],
    "hidden": false
  }
] ;

                    module.exports = menuConfig;
                
                