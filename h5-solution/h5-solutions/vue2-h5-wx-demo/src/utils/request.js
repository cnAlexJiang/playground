import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
import router from '@/router'




// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        forbidClick: true
      })
    }
    if (store.getters.token) {
      config.headers['X-Token'] = ''
    }

    // 处理token 问题
    handlerToken(config)


    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    Toast.clear()
    const res = response.data


    // if (res.status && res.status !== 200) {
    // 登录超时,重新登录
    // if (res.status === 401) {
    //   store.dispatch('FedLogOut').then(() => {
    //     location.reload()
    //   })
    // }
    // token过期,重新登录
    if (res.code === 502) {
      localStorage.setItem('cms_token', '')
      localStorage.setItem('cms_tokenKey', '')
      // location.reload()
      const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww28c3a0756e7f680a&redirect_uri=http%3A%2F%2Fbageng.art%3A8081&response_type=code&scope=snsapi_base#wechat_redirect`

      console.log(111, process.env.WX_LOGIN)
      location.replace(url)
      // router.push({ name: "home" })
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

// 登录成功后添加请求头
export function setHeader(params) {
  if (!params.token || !params.tokenKey) {
    return
  }

  service.defaults.headers.common['Authorization'] = params.token;
  localStorage.setItem('cms_token', params.token)
  service.defaults.headers.common['Authorization-key'] = params.tokenKey;
  localStorage.setItem('cms_tokenKey', params.tokenKey)


}

function handlerToken(config) {
  const common = config.headers.common

  if (!common['Authorization']) {
    common['Authorization'] = localStorage.getItem('cms_token')
  }
  if (!common['Authorization-key']) {
    common['Authorization-key'] = localStorage.getItem('cms_tokenKey')
  }
}
export default service
