import { loginByUsername, logout, getUserInfo,loginByShortMsg } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import md5 from 'js-md5';
const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    rights: [],
    districts: [],
    setting: {
      articlePlatform: []
    },
    userInfo:{},
    province:CORE_CONFIG.PROVINCE
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_RIGHTS: (state, rights) => {
      state.rights = rights
    },
    SET_DISTRICTS: (state, districts) => {
      state.districts = districts
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    }

  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {

      const userName = userInfo.userName.trim();
      const code = (userInfo.telcheckcode || "" ).trim();
      const passWord = userInfo.passWord.trim();
      
      commit('SET_USERINFO',userInfo);

      const loginbyUserName = CORE_CONFIG.IS_ALWAYS_LOGINBYUSERNAME ? true : false; /// 始终通过用户名密码登录

      return new Promise((resolve, reject) => {
        
        loginByUsername(userName, passWord,null,code,loginbyUserName).then(result => {

          let token = result.userdata ;
     
          if(result.success===false){
            reject(result.message)
          }else{
    
            commit('SET_TOKEN', token)
            setToken(token)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    LoginByMobileCode({ commit },userInfo) {
      
      let mobile = userInfo.telephone.trim();
      let code = userInfo.telcheckcode.trim();
      
      commit('SET_USERINFO',userInfo);

      return new Promise((resolve, reject) => {
        loginByShortMsg(mobile, code).then(result => {
          console.log('shortcode login result',result)
          if(result.success===false){
            alert(result.message)
            //reject(response.message)
          }else{
            const token = result.userdata
            console.log("------TOKEN-----")
            console.log(token)
            commit('SET_TOKEN', token)
            setToken(token)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(result => {
          commit('SET_USERINFO',result.userdata);
          const data = result.userdata
          console.log('login user_info',data)
          if (data.role_list && data.role_list.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.role_list)
            commit('SET_RIGHTS', data.right_list)
            commit('SET_DISTRICTS', data.district_list)
          } else {
            reject('登录用户必须赋予角色,请联系管理员')
          }
  
          commit('SET_NAME', data.staff_name)
        
          
          resolve(result)
        }).catch(error => {
          reject(error)
        })
      })
    },

  
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then((result) => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_RIGHTS', [])
          commit('SET_DISTRICTS', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },


  }
}

export default user
