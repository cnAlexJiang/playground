const api = {
  Login: '/user/login',
  UserName: '/user/name',
  AccesToken: '/api/wx/getAccessToken',
  loginByCode: '/sys/login_by_weixin',
  getJsSdkSign: 'api/wx/getJsSdkSign', //  初始化jssdk
  jsApiTicket: '/api/wx/getJsApiTicket', //获取企业的jsapi_ticket
  categoryeTree: '/cms/category/tree', // 所有分类
  userInfo: '/api/sys/user/profile', // 用户信息
  vagueCategory: '/cms/category/page',
  activeList: '/sys/activity/page',// 活动列表
  activityUser: '/sys/activityUser/page', //获取参与人员列 
  actSave: '/sys/activityUser/save', // 人员参与增加
  article: '/cms/content/page', //  文章列表
  joinAct: 'sys/activityUser/save', // 参加活动
}

export default api
