import { asyncRouterMap } from '@/config/router.config'
function handlefilterRoutes(roles) {
  //1、 去除重复权限code
  //2、 看看本地路由是否有该权限code
  const strAsyncRouterMap = JSON.stringify(asyncRouterMap)
  if (roles && roles.length) {
    const reCode = {}
    const delReCode = list => {
      list.map(item => {
        if (reCode[item.menuCode] === true || strAsyncRouterMap.indexOf(item.menuCode) === -1) {
          item.hidden = true
          console.error('权限重复！或无该权限', item.menuCode)
        } else {
          reCode[item.menuCode] = true
          if (item.children && item.children.length) {
            delReCode(item.children)
          }
        }
      })
    }
    delReCode(roles)
  }
  console.log('roles2', roles)
  return roles
}
const permission = {
  state: {
    roleRouters: []
  },
  mutations: {
    SET_ROLEROUTES: (state, routers) => {
      state.roleRouters = routers
    }
  },
  actions: {
    filterRoutes: ({ commit }, data) => {
      return new Promise(resolve => {
        const { roles } = data // 后台返回的权限路由
        console.log('roles', roles)
        const roleRouters = handlefilterRoutes(roles)
        commit('SET_ROLEROUTES', roleRouters)
        resolve()
      })
    }
  }
}
export default permission
