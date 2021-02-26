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
                  
                  if(!CORE_CONFIG.IS_ALWAYS_LOCATE_FIRST_BY_TOKEN){
                  
                      if(to.path.startsWith("/iframe_ext_")){  ///缓存增加的页面刷新页面定位到home页面

                        next({ path: '/' })

                      }else{

                        //next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record 
                        next();
                      }

                  }else{

                      let firstPath = store.getters.allMenuRouter[0].path;

                      next({ path:firstPath })

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