import axios from 'axios'
import { message } from 'antd'

const axoption={
  baseURL:'/api',
  timeout:30000 //几秒
}
const instance = axios.create(axoption)//创建实例
// 发送的主体信息
// instance.defaults.transformRequest = (data) => {
//   if (isPlainObject(data)) return qs.stringify(data)
//   return data
// }
instance.interceptors.request.use((config) => {
  if(JSON.parse(localStorage.getItem('userInfo')))
  config.headers={
    'cms-token':JSON.parse(localStorage.getItem('userInfo'))['cms-token']
  };
  return config
})
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (reason) => {
    message.warning('当前网络繁忙,请稍后再试!');
    return Promise.reject(reason)
  }
)
export default instance
