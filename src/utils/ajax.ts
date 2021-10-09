import axios, { AxiosInstance, AxiosRequestConfig, CancelTokenSource, CancelTokenStatic } from 'axios'

let source: CancelTokenSource
let ajax: AxiosInstance
const CancelToken: CancelTokenStatic = axios.CancelToken

const defaultConfig: AxiosRequestConfig = {
  timeout: 5000,
  // withCredentials: true,
  onUploadProgress: undefined,
}

const setConfig = (config: AxiosRequestConfig | undefined): AxiosRequestConfig | undefined => {
  if (!config) {
    return undefined
  }

  if (!ajax) {
    throw new Error('ajax module is not set.')
  }

  const newConfig = { ...config }

  source = CancelToken.source()
  newConfig.cancelToken = source.token

  return newConfig
}

const init = (config = {}) => {
  ajax = axios.create({ ...defaultConfig, ...config })
  ajax.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.headers = {
        'Content-Type': 'application/json',
      }

      return config
    },
    (error) => Promise.reject(error),
  )
}

const get = (url: string, config?: AxiosRequestConfig) => {
  return ajax.get(url, setConfig(config))
}
const post = (url: string, data?: any, config?: AxiosRequestConfig) => ajax.post(url, data, setConfig(config))
const put = (url: string, data?: any, config?: AxiosRequestConfig) => ajax.put(url, data, setConfig(config))
const abort = () => source?.cancel()

export default {
  init,
  get,
  post,
  put,
  abort,
}
