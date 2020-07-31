
let province = CORE_CONFIG.PROVINCE;

let menuConfig = null;

    // try{

    //     menuConfig = require(`./province/index_${province}.js`);
    
    // }catch(e){

    //     menuConfig = require(`./province/index_basic.js`);
    //     console.log("未找到地市配置文件，默认显示基础配置菜单")
   
    // }
    menuConfig = require(`./province/index_basic.js`);


module.exports = menuConfig;

