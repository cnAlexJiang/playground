var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/get_user', userController.showUser);
router.post('/add_user', userController.addUser);
router.post('/del_user', userController.delete);

router.post('/add_multi_user', userController.addMulti);

module.exports = router;
