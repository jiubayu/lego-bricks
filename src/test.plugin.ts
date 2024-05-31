import { App } from "vue";

const plugins = {
  install: (app: App) => {
    app.config.globalProperties.$echo = () => {
      console.log('test plugin')
    }
  }
}
export default plugins;