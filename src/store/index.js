import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app.js'
import user from './modules/user.js'
import permission from './modules/permission.js'
import tagsView from './modules/tagsView.js'

import getters from './getters'

Vue.use(Vuex)




const store = new Vuex.Store({

    state:{



    },
    
    modules: {
        
       app, 
       user,
       permission,
       tagsView 
    },
    getters

})


export default store
