import Vue from 'vue'
import axios from 'axios'

// import { i18n } from './i18n'

import config from '../../.config'

const baseURL = process.env.DEV ? 'http://localhost:5000' : config.apiServerBaseURL

export const axiosInstance = axios.create({
  baseURL
})

Vue.prototype.axios = axios
Vue.prototype.axiosInstance = axiosInstance

// axiosInstance.interceptors.request
//   .use((config) => {
//     // Do something before request is sent
//     config.headers['Accept-Language'] = i18n.locale
//     return config
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error)
//   })

export default ({ app }) => {
  app.axios = axios
  app.axiosInstance = axiosInstance
}
