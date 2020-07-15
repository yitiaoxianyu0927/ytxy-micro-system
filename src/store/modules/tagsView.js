const tagsView = {
  
  state: {

    tagsList:[],
    baseMenuId:null,   ///菜单基础Path
    closeAfterPath:""  ///关闭后路径

  },
  mutations: {

    SET_FISRT_TAG(state,view){

      state.tagsList[0] = { ...view };
 
    },
    ADD_TAG(state,view){


      if(state.tagsList.some(item => item.path === view.path) > 0) return;

      state.tagsList.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })
      );

    },
    CLOSE_TAG(state,view){

      let tagsList = state.tagsList;

      let closeAfterPath = "";

      for( let [i,v] of tagsList.entries()){
        
        if(v.path == view.path){

          closeAfterPath = ( tagsList[i + 1] || tagsList[i - 1] ).path

        } 
        
      }

      state.closeAfterPath = closeAfterPath;

      console.log(state.tagsList)
      
      state.tagsList = tagsList.filter(item => item.path != view.path);

      console.log(state.tagsList,closeAfterPath)

    }

  },
  actions: {

    addTag({ commit }, view) {
    
      commit('ADD_TAG', view)
    
    },
    closeTag({ state , commit },view) {

      return new Promise((resolve,reject) => {
          
        commit('CLOSE_TAG', view);

        resolve(state.closeAfterPath);
        
      })

    }

  }

}

export default tagsView
