let userdao = require('../dao/usersDAO');
let admindao = require('../dao/adminDAO');
let seekerdao = require('../dao/seekersDAO');
let comdao = require('../dao/comsDAO');
let seek_jobDAO = require('../dao/seek_jobDAO');
let UTILS = require('../utils');

module.exports = {


    r_seekerRegister: async (ctx) => {
        let step = ctx.params.step;

        if (step == 'valid') {

            let res = await userdao.user_phoneValid(user_phone);

        }
        else if (step == 'step1') {
            let user = {};
            user.user_phone = ctx.request.body.user_phone;
            user.user_pwd = ctx.request.body.user_pwd;
            user.user_role = ctx.request.body.user_role;
            await userdao.insertUser(user);


            if (user.user_role == '1') //求职
                ctx.render('s_register2.html', {
                    seeker_user_phone: user.user_phone
                });
            else if(user.user_role == '2') //招聘
                ctx.render('c_register2.html', {
                    com_user_phone: user.user_phone
                });

        }
        else if (step == 'seeker_step') {

            await seekerResgister_step2(ctx);


        }
        else if (step == 'com_step') {
            await comResgister_step2(ctx);

        }
    },


    //求职者注册-基本信息
    seekerResgister_step2: async (ctx) => {

        let seeker = UTILS.getSeekerbyCTX(ctx);
        seeker.insertSeeker(seeker);

        //设置cookie
        let cookie_value = Buffer.from(JSON.stringify(seeker)).toString('base64');
        ctx.cookies.set('seeker_cookie', cookie_value, { signed: true });

        ctx.response.redirect('/seeker/index');

    },

    //企业基本信息注册
     comResgister_step2: async (ctx) => {

        let com = UTILS.getCombyCTX(ctx);
        com.insertSeeker(seeker);

        //设置cookie
        let cookie_value = Buffer.from(JSON.stringify(com)).toString('base64');
        ctx.cookies.set('com_cookie', cookie_value, { signed: true });

        ctx.response.redirect('/com/index');

    },
      //查看一条职位信息
     r_JobInfo:async(ctx)=>{
         let job_id=ctx.params.id;
         let jobInfo =await comdao.getCom_job(job_id);
        ctx.render('job_info.html',{
        jobInfo:jobInfo,
     });
    } ,
     //查看一家公司的信息
    r_com_info:async(ctx)=>{
        let com_id=ctx.params.id;
        let comInfo =await comdao.getCom(com_id);
        ctx.render('com_info.html',{
           comInfo:comInfo,
        })
    },
     //查看个人简历,是否具有修改求职者的权限 
    r_one_seekInfo:async(ctx)=>{
        let seek_job_id=ctx.params.id;
        let seekInfo=await seek_jobDAO.getOneSeekerInfo(seek_job_id);
        ctx.render('seekerInfo.html',{
          seekInfo:seekInfo,
        });
    },
    //求职者搜索职位信息
    r_search_job:async(ctx)=>{
        let searchStr=ctx.request.body.searchStr;

    }
}