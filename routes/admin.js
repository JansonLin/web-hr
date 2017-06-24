let router = require('koa-router')();
let adminservice = require('../service/adminService.js');
const UTILS = require('../utils');


router
  .get('/', async (ctx, next) => {


    ctx.render('index.html', {

      msg: '后台信息123',

    });
  })
  .get('login', async (ctx, next) => {


    ctx.render('admin_login.html', {



    });
  })

  .post('login-valid', async (ctx, next) => {

    let msg = '账号密码错误';

    let user_phone = ctx.request.body.user_phone;
    let user_pwd = ctx.request.body.user_pwd;

    if (user_phone == '' || user_pwd == '')
      msg = '请输入账号密码';

    let admin = await adminservice.loginValid(user_phone, user_pwd);

    if (admin) {

      ctx.render('index.html', {

        msg: '登录成功账号为：' + user_phone

      });
    } else {

      ctx.render('index.html', {
        msg: msg,

      });

    }


  })



module.exports = router;