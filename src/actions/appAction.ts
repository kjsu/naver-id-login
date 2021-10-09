import { AppConfig } from "~/App"
import appService from "~/services/appService"

const initApp = (config: AppConfig) => {
  appService.initApp(config)
}

export default {
  initApp,
}