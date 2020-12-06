import Vue from 'vue'
import $xttp from '@/utils/request'
import { ACCESS_TOKEN } from '@/utils/defalut.config'
const user = {
  actions: {
    login: () => {
      return new Promise((resolve, reject) => {
        $xttp
          .post('/user/login', {
            params: {
              id: 5
            }
          })
          .then(res => {
            console.log('数据是:', res)
            resolve(res)
          })
          .catch(e => {
            console.error('获取数据失败', e)
            reject(e)
          })
      })
    },
    logout: () => {
      Vue.ls.remove(ACCESS_TOKEN)
    }
  }
}
export default user
