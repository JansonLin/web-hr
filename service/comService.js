
var db = require('../db');
let userdao = require('../dao/usersDAO');

module.exports = {

//登陆
loginValid: async (ctx)=>{
        let user_phone = ctx.request.body.user_phone;
        let user_pwd = ctx.request.body.user_pwd;
        let user_role = 2;

        let msg = '账号密码错误';

        if (user_phone == '' || user_pwd == '')
            msg = '请输入账号密码';


        let result = await userdao.getUser(user_phone, user_pwd, user_role);

        if (result) {

            let user = result;

            user.user_pwd = '';

            //设置cookie
            let cookie_value = Buffer.from(JSON.stringify(user)).toString('base64');
            // ctx.cookies.set('admin_cookie', cookie_value, { signed: true, maxAge: 60 * 60 * 1000 });
            ctx.cookies.set('com_cookie', cookie_value, { signed: true });
            console.log(`Set com_cookie value: ${cookie_value}`);

            msg = '登录成功！手机号为' + user_phone;

          ctx.render('index.html', {
                msg: msg,
            });

        } else {
            ctx.render('index.html', {
                msg: msg,
            });
        }
 },



 //公司初步注册(插入手机号和密码)
 com_user_initial_register:async (ctx)=>{

  let user_phone=ctx.request.body.user_phone;
  let user_pwd=ctx.request.body.user_pwd;

   await db.users.create({
     user_phone: user_phone,
     user_pwd: user_pwd,
     user_role:2,
   });
     ctx.render('index.html',  {
    // msg:' 注册成功'+user_phone,
     });
 },




 //查询公司是否存在
 com_user_phone_Valid:async (user_phone,user_pwd)=>{
   let sql = "select * from users "
   +"where(user_phone='"+user_phone+"')" +"and user_pwd = '"+ user_pwd +"'"

   let result = await db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT });

        if(result.length>0){
            return false;
        }else{
            return true;
        }

    },
   //添加公司信息,coms
   r_insertCom:async(ctx)=>{

   },
   //获取当前公司信息,coms
   r_getCom:async(com_user_phone)=>{

   },
   //更新公司信息,coms
   r_updateCom:async(ctx)=>{

   },
   //添加一条公司招聘信息
   r_insertCom_job:async(ctx,com_user_phone)=>{

   },
   //获取一条招聘信息
   getCom_job:async(com_job_id)=>{

   },
   //获取当前公司的所有招聘信息
   getAllCom_job:async(com_user_phone)=>{

   },
   //获取一个职位的所有申请信息
   getAllSeek_job:async(com_job_id)=>{

   },
   //查看一个职位其中一个申请人的具体

}