const tagsView = {
  
  state: {

    tagsList:[],
    baseMenuId:null,   ///菜单基础Path
    closeAfterPath:"",  ///关闭后路径
    refreshPage:false
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
    ADD_EXT_TAG(state,view){

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

      
      state.tagsList = tagsList.filter(item => item.path != view.path);


    },
    OTHER_CLOSE_TAG(state,view){

      state.tagsList = state.tagsList.filter(item => item.path == view.path || item.path == "/"+state.baseMenuId);

    },
    OTHER_ALL_TAG(state){

      state.tagsList = state.tagsList.slice(0,1);
    },
    REFRESH_PAGE(state,view){

      state.refreshPage = view;
    }

  },
  actions: {

    addTag({ commit }, view) {
    
      commit('ADD_TAG', view)
    
    },
    addExtTag({ commit }, view){

      return new Promise((resolve,reject) => {

          commit('ADD_EXT_TAG', view)

          resolve({
            path:view.path
          })

      })

      

    },
    closeTag({ state , commit },view) {

      return new Promise((resolve,reject) => {
          
        commit('CLOSE_TAG', view);

        resolve(state.closeAfterPath);
        
      })

    },
    otherCloseTag({ state , commit },view) {

      return new Promise((resolve,reject) => {

        commit('OTHER_CLOSE_TAG', view); 

        resolve([...state.tagsList]);

      })  

    },
    otherAllTag({ state , commit }){

      return new Promise((resolve,reject) => {
          
        commit('OTHER_ALL_TAG');

        resolve([...state.tagsList]);
        
      })

    },
    refreshPage({ state , commit },view){

      commit("REFRESH_PAGE",view)

    }

  }

}

export default tagsView
