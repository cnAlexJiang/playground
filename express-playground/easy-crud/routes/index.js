var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 获取用户信息

router.get('/get_user', userController.showUser);
router.get('/add_user', userController.addUser);
router.get('/add_multi_user', userController.addMulti);


module.exports = router;
