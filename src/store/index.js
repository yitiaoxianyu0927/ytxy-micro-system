import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app.js'
import dragLayout from './modules/dragLayout.js'
import user from './modules/user.js'
import menu from './modules/menu.js'
import permission from './modules/permission.js'
import tagsView from './modules/tagsView.js'
import projectConfig from './modules/projectConfig.js'
import share from "./modules/share.js"
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({

    state:{



    },
    
    modules: {
        
       app, 
       dragLayout,
       user,
       menu,
       permission,
       tagsView,
       projectConfig,
       share 
    },
    getters

})


export default store
