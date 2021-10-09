import { AppConfig } from '~/App'
import ajax from '~/utils/ajax'

const initApp = (config: AppConfig) => {
  ajax.init({
    ...config.ajax,
  })
}

export default {
  initApp,
}
