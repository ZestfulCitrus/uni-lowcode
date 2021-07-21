const components = []
const requireComponents = require.context('./', true, /\.vue$/);
requireComponents.keys().forEach(e => {
  const reqCom = requireComponents(e)
  components.push(reqCom.default)
});
 //定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {

  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
 
 //判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
 
export default {
  install,
}