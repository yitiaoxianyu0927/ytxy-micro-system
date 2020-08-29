
//--------------------------配置文件----------------------------

const WEB_SERVER_BASE_URL = 'http://localhost:5000';  //本地mock服务

//const WEB_SERVER_BASE_URL = 'http://localhost:8080';  //本地mock服务
//const WEB_SERVER_BASE_URL = 'http://10.4.1.77:8080';  //本地mock服务


var CORE_CONFIG = { 
  //公共配置项
  PROVINCE:'ln',//省份
  IS_ALWAYS_SERVER:true,  //是否始终从server端上读取数据
  IS_ALWAYS_MOCK:false,  //是否始终从mock上读取数据
  MOCK_API: 'xxxx',//easy-mock 沈阳公网地址 http://59.46.22.93:47300/ 私网地址：http://10.4.2.8:7300/mock/
  BASE_API: WEB_SERVER_BASE_URL + '/tcoamp-web',//web后台服务URL
  
  WS_WEB_SERVER_BASE_API: 'ws://188.103.142.161:9090',//websocket地址
  WEB_RES_BASE_URL: WEB_SERVER_BASE_URL + '/tcoamp-web-res',//静态资源服务器
  GIS_MAP_URL:"/map",  //地图地址
  OTHER_MODULE:'http://xxxx/topo-web-ui', //其他模块地址
  PUBLIC_EXP_MAX_NUM:50000,//导出全部数据量上限常量
  PUBLIC_VERSION_ID:'1.0.0.20170101',

  IS_FILTER_MENU_BY_DATABASE:false, //是否始终通过数据库关联

  ///iframe模块配置 FRAME_xxx
  FRAME_HTTP:"http://localhost:1234",
  FRAME_URL: "https://www.baidu.com/",

  ///微前端模块配置 PROJECT_xxx
  PROJECT_VUEAPP:"http://localhost:10100"
}

// function geturl(name) {

//   name = name || "x_token"

//   var reg = new RegExp("[^\?&]?" + encodeURI(name) + "=[^&]+");
//   var arr = window.location.href.match(reg);
//   if (arr != null) {
//     return decodeURI(arr[0].substring(arr[0].search("=") + 1));
//   }
//   return "";
// }

// var token = geturl();
// if(!token){
//   token = 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTAwNDMzNDEsInN1YiI6IntcImF2YWlsX2JlZ2luX2RhdGVcIjpcIjIwMTctMDYtMDEgMDA6MDA6MDBcIixcImF2YWlsX2VuZF9kYXRlXCI6XCIyMDIwLTEyLTAxIDAwOjAwOjAwXCIsXCJjcmVhdGVfZGF0ZVwiOlwiMjAxOS0wMy0yMCAyMDoyMTo1M1wiLFwiZGVsX2ZsYWdcIjpcIjBcIixcImRlcHRfaWRcIjpcIjEwMDBcIixcImRpc3RyaWN0X2xpc3RcIjpbXSxcImdyb3VwX2xpc3RcIjpbXSxcImllcnJvcnRpbWVcIjpcIjEyXCIsXCJtYW5hZ2VfZG9tYWluX2xpc3RcIjpbXSxcIm1vYmlsZVwiOlwiMTU5OTAwNTA3NDVcIixcIm9wZXJhdGVfbGlzdFwiOltdLFwicGFzc3dvcmRcIjpcImQ0ZWMzODhkMDBlOWU2MDZiN2I2ZjI3MjYzYzA4NzU5XCIsXCJyaWdodF9saXN0XCI6W10sXCJyb2xlX2xpc3RcIjpbXSxcInNhbHRcIjpcIk9SSkFVUXFBV2NcIixcInNleFwiOlwiMFwiLFwic3B3ZGFuc3dlclwiOlwiMlwiLFwic3B3ZHF1ZXN0aW9uXCI6XCIyKzE9P1wiLFwic3RhZmZfYWNjb3VudFwiOlwiYWRtaW5pc3RyYXRvclwiLFwic3RhZmZfaWRcIjpcIjEwMDBcIixcInN0YWZmX25hbWVcIjpcIui2hee6p-euoeeQhuWRmFwiLFwic3RhZmZfbm9cIjpcIjEwMDBcIixcInRlbHBob25lXCI6XCIxNTkxMTExMTExMVwiLFwidXBkYXRlX3Bhc3NfdGltZVwiOlwiMjAxOS0wMy0yMCAyMDoyMTo1M1wifSIsImV4cCI6MTYwMDA0MzM0MX0.eJKQU0ED_uuAWKELOZboIBXXwrUkim58syixiAyNpMw';
// }

// sessionStorage.setItem('Admin-Token',token);
