const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  device: state => state.app.device,
  tagsList: state => state.tagsView.tagsList,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  rights: state => state.user.rights,
  districts: state => state.user.districts,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  permission_dbRouters: state => state.permission.dbRouters,
  addRouters: state => state.permission.addRouters,
  allMenuRouter: state => state.permission.allMenuRouter,
  baseMenuId:state => state.tagsView.baseMenuId,
  errorLogs: state => state.errorLog.logs,
  
}
export default getters
