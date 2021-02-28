import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/authredirect']// no redirect whitelist

router.beforeEach((to, from, next) => {

  
  NProgress.start() // start progress bar

  //console.log("token",getToken())
  
  if (getToken()) { // determine if there has token
    /* has token*/

      if (to.path === '/login') {

        next({ path: '/' })
        NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
      
      } else {

        if(store.getters.rights.length == 0){
    
            store.dispatch('GetUserInfo').then(result => { // 拉取user_info 用户信息
                
                const roles = result.userdata.roles_list;
                const rights = result.userdata.right_list

                store.dispatch('GenerateRoutes', { roles , rights}).then(() => { // 根据roles权限生成可访问的路由表
                  
                  if(rights.length == 0){

                    Message.warning("当前用户没有配置菜单");
                    next('/login') // 否则全部重定向到登录页
                    NProgress.done();
                  }


                  if(!CORE_CONFIG.IS_ALWAYS_LOCATE_FIRST_BY_TOKEN){

                      if(to.path.startsWith("/iframe_ext_")){  ///缓存增加的页面刷新页面定位到home页面

                        next({ path: '/' })

                      }else{

                        if(getToken()){   ////免登录第一个路由url 参数没有token

                          sessionStorage.setItem('Admin-Token',getToken());

                        }

                        next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record 
                    
                      }

                  }else{



                      let firstPath = store.getters.allMenuRouter[0].path;
                       
                      //next({ path : firstPath }) 
                      //next({ ...to , fullPath: firstPath ,  path:firstPath ,redirect : firstPath , replace: true })
                      //window.location = "http://localhost:1235/#"+firstPath+"?x_token=eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTgyNjM5NzQsInN1YiI6IntcImF2YWlsX2JlZ2luX2RhdGVcIjpcIjIwMTctMDYtMDEgMDA6MDA6MDAuMFwiLFwiYXZhaWxfZW5kX2RhdGVcIjpcIjIwMjAtMTItMDEgMDA6MDA6MDAuMFwiLFwiY3JlYXRlX2RhdGVcIjpcIjIwMTktMDMtMjAgMjA6MjE6NTMuMFwiLFwiZGVsX2ZsYWdcIjpcIjBcIixcImRlcHRfaWRcIjpcIjBcIixcImRpc3RyaWN0X2xpc3RcIjpbXSxcImdyb3VwX2xpc3RcIjpbXSxcImllcnJvcnRpbWVcIjpcIjExXCIsXCJtYW5hZ2VfZG9tYWluX2xpc3RcIjpbXSxcIm1vYmlsZVwiOlwiMTUyMDAwMDAwMDBcIixcIm9wZXJhdGVfbGlzdFwiOltdLFwicGFzc3dvcmRcIjpcImQ0ZWMzODhkMDBlOWU2MDZiN2I2ZjI3MjYzYzA4NzU5XCIsXCJyaWdodF9saXN0XCI6W10sXCJyb2xlX2xpc3RcIjpbXSxcInNhbHRcIjpcIk9SSkFVUXFBV2NcIixcInNleFwiOlwiMFwiLFwic3B3ZGFuc3dlclwiOlwiMlwiLFwic3B3ZHF1ZXN0aW9uXCI6XCIyKzE9P1wiLFwic3RhZmZfYWNjb3VudFwiOlwiYWRtaW5pc3RyYXRvclwiLFwic3RhZmZfaWRcIjpcIjEwMDBcIixcInN0YWZmX25hbWVcIjpcIui2hee6p-euoeeQhuWRmOeUqOaIt1wiLFwic3RhZmZfbm9cIjpcIjEwMDBcIixcInRlbHBob25lXCI6XCIxMjM0NTY3ODk2NjY2XCIsXCJ1cGRhdGVfcGFzc190aW1lXCI6XCIyMDE5LTAzLTIwIDIwOjIxOjUzLjBcIn0iLCJleHAiOjE2MDgyNjM5NzR9.R8EPzgqH_JnRp2FHL3I4HDkrNICXMKLbPbiLzuN9iHs" 
                      //next({ path : firstPath })
                      next({ path : firstPath });
                  }
                  
                  
                })


            }).catch((err) => {
              
              store.dispatch('FedLogOut').then(() => {

                Message.error(err || 'Verification failed, please login again')
                next({ path: '/login' })
              
              })

            })

        }else{


            next(); 


        }    

      }  
    
  } else {  
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }

  }
  
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
