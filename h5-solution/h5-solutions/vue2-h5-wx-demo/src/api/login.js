import api from './index'
// axios
import request, { setHeader } from '@/utils/request'
import { getUrlParam } from '@/utils/index'
// 获取accesToken
export function getAccesToken() {
  return request({
    url: api.AccesToken,
    method: 'get'
  })
}

export function loginByCode(code) {
  return request({
    url: api.loginByCode,
    params: code,
    method: 'get'
  })
}

export function getJsSdkSign() {
  return request({
    url: api.getJsSdkSign,
    method: 'get'
  })
}
async function setNewToken() {
  // 1 获取code
  const code = getUrlParam('code')
  // 2 根据code 获取 token
  const tokenRes = await loginByCode({ code })
  let token = tokenRes.token
  let tokenKey = tokenRes.tokenKey
  setHeader({ token, tokenKey })
}
export async function initApp() {

  try {
    // 从缓存中找token
    let token = localStorage.getItem('cms_token')
    let tokenKey = localStorage.getItem('cms_tokenKey')
    if (!token || !tokenKey) {
      await setNewToken()
    }
    // 从缓存中找 config
    let config
    try {
      const res = localStorage.getItem('cms_wx_config')
      config = JSON.parse(res)
    } catch (e) {
      console.log(e)
    }

    if (!config) {
      let wxConfig = await getJsSdkSign();
      config = wxConfig.data
    }

    const { timestamp, noncestr, signature, appid } = config
    window.wx.config({
      beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: appid, // 必填，企业微信的corpID
      timestamp: timestamp, // 必填，生成签名的时间戳
      nonceStr: noncestr, // 必填，生成签名的随机串
      signature: signature, // 必填，签名，见 附录-JS-SDK使用权限签名算法
      jsApiList: ['openUserProfile'] // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
    })
    wx.ready(function () {
      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
      storageWxConfig(config)
      console.log('ready')
      // window.wx.checkJsApi({
      //   jsApiList: ['openUserProfile'], // 需要检测的JS接口列表
      //   success: function (res) {
      //     // 以键值对的形式返回，可用的api值true，不可用为false
      //     // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      //     console.log(111111, res)

      //   }
      // });
    });
    wx.error(function (res) {
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      console.log('error', res)
      localStorage.setItem('cms_wx_config', '')
    });
    console.log('success init app')
  } catch (e) {
    console.log(e)
  }
}

function storageWxConfig(config) {
  localStorage.setItem('cms_wx_config', JSON.stringify(config))
}