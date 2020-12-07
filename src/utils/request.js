import Vue from 'vue'
import axios from 'axios'
import notification from 'ant-design-vue/es/notification'
import store from '@/store'
import message from 'ant-design-vue/es/message'
import router from '@/router'
import { ACCESS_TOKEN } from './defalut.config'
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : '',
  timeout: 6000
})

const err = error => {
  console.log('错误', error)
  const data = error.response.data
  if (error.response.status === 403) {
    notification.error({
      message: '当前操作没有权限',
      description: data.message
    })
  }
  if (error.response.status === 402) {
    notification.error({
      message: 'License验证失败',
      description: data.message
    })
  }
  if (error.response.status === 401) {
    store.dispatch('Logout')
    router.push({ path: '/login' })
    notification.error({
      message: '认证失败，无法访问系统资源',
      description: data.message
    })
  }
  return Promise.reject(error)
}
// 添加请求拦截器
service.interceptors.request.use(config => {
  // 设置 token
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers[ACCESS_TOKEN] = 'Bearer ' + token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err)
service.interceptors.response.use(response => {
  console.log('response', response);
  if (response.status === 402) {
    notification.error({
      message: 'License验证失败',
      description: response.data.message
    })
  }
  if (response.status === 401) {
    store.dispatch('Logout').then()
    router.push({ path: '/login' })
    message.error('登录超时，请重新登录')
  }
  return response.data || response
}, err)

export default service
