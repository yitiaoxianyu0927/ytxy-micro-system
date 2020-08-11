import envConfig from './config.json'
// 使用 NODE_ENV 区分不同环境，默认值为 development
const ENV = process.env.NODE_ENV || 'development'
const config = envConfig[ENV]
const {
  CLIENT_MICRO_APP
} = config
export default [
  /**
   * name: 微应用名称 - 具有唯一性，为了方便区分，采取和子应用名称
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name:"vueApp",
    entry:"//localhost:10100",
    container: '#micro',
    activeRule: '/#/vue'
  }
]
