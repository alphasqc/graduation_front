import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Element Plus
import 'element-plus/dist/index.css'
import { components, plugins } from './plugins/element-plus'

const app = createApp(App)
// 按需导入Element Plus组件和插件
components.forEach(components => {
  app.component(components.name)
})
plugins.forEach(plugin => {
  app.use(plugin)
})

app.use(store)
app.use(router)
app.mount('#app')
