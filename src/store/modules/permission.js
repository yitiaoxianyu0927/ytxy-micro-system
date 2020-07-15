import { asyncRouterMap, constantRouterMap } from '@/router'

import { formatMenuConfig } from "@/router/filterMenuRouter.js"

/**
 * 通过route.path判断是否与当前用户权限匹配
 * @param rights
 * @param route
 */
function hasPermission(rights, route) {
  if (route.path) {
    return rights.some(right => right.right_id === route.path)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param rights
 */
function filterAsyncRouter(asyncRouterMap, rights) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(rights, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, rights)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const 
permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {



    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles, rights } = data;
        let accessedRouters = []
        
        // console.log('roles',roles);
        // console.log('rights',rights);
        
        // //accessedRouters = asyncRouterMap;
        // accessedRouters = filterAsyncRouter(asyncRouterMap,rights);
        //console.log("accessedRouters",accessedRouters);
        //commit('SET_ROUTERS', accessedRouters)

        formatMenuConfig();
        
        resolve()
      })
    }
  }
}

export default permission
