// 引用用户模版数据
const User = require('../models/user.js')

const userController = {
  // showUser 获取用户数据并返回到页面
  showUser: async function (req, res, next) {
    try {
      let userData = await User.all()
      res.json({
        code: 200,
        message: '操作成功',
        data: userData,
      })
    } catch (e) {
      res.json({ code: 0, message: '操作失败', data: e })
    }
  },
  addUser: async function (req, res, next) {
    try {
      const body = req.body
      console.log('body=',   JSON.stringify(body))
      // let list = await User.all()
      const {name, phone} = body
      if(!name || !phone) {
        throw new Error('参数缺失')
      }
      let userData = await User.insert( { name , phone  }, 'id')
      res.json({
        code: 200,
        message: '操作成功',
        data: userData,
      })
    
    } catch (e) {
      res.json({ code: 0, message: '操作失败', data: e.message })
    }
  },
  addMulti: async function (req, res, next) {
    const rows = [
      { name: 'value1', phone: 'value2',  },
      { name: 'value4', phone: 'value5',   },
      { name: 'value7', phone: 'value8',  },
    ];

    try {
      console.log(req)
      res.json({ code: 0, message: '操作失败', data: 'catch' })

      return 
      let userData = await User.insert(rows)
      res.json({
        code: 200,
        message: '操作成功',
        data: userData,
      })
    
    } catch (e) {
      res.json({ code: 0, message: '操作失败', data: e })
    }
  },
  update: async function (req, res, next) {
    try {
      let userData = await User.update(8, {name: 'bb'})
      res.json({
        code: 200,
        message: '操作成功',
        data: userData,
      })
    
    } catch (e) {
      res.json({ code: 0, message: '操作失败', data: e })
    }
  },
  delete: async function (req, res, next) {
    try {
      const {id} = req.body
      let userData = await User.delete(id)
      res.json({
        code: 200,
        message: '操作成功',
        data: userData,
      })
    
    } catch (e) {
      res.json({ code: 0, message: '操作失败', data: e.message })
    }
  },
}

module.exports = userController
