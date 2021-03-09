

const app = {
  state: {
    sidebar: {
      opened: true
    },
    layoutType : "SiderDarkLayout"   //CommonLayout,HeaderNavLayout,SiderDarkLayout
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
     
      state.sidebar.opened = !state.sidebar.opened
  
    },
    CHANGE_LAYOUT: (state,type) => {
      
      state.layoutType = type;
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    changeLayout({ commit },type){
      commit('CHANGE_LAYOUT',type)
    }
  }
}

export default app
