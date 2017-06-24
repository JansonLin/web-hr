
const Sequelize = require('sequelize');
const config = require('./config/development');


let sequelize = new Sequelize(config.database, config.database_username, config.database_password, {
    host: config.database_host,
    dialect: 'mysql',
    pool: {
        max: 1000,
        min: 0,
        idle: 6000
    },
    logging: true,
});

//职位类别表term_job
let term_job = sequelize.define('term_job', {
    term_job_id: { type: Sequelize.INTEGER(11), primaryKey: true },
    term_job: Sequelize.STRING(30),
    parent_id: Sequelize.INTEGER(11),

}, {
        timestamps: false
    }
);
//学历类别表term_edu
let term_edu = sequelize.define('term_edu', {
    term_edu_id: { type: Sequelize.INTEGER(11), primaryKey: true },
    term_edu: Sequelize.STRING(30),
}, {
        timestamps: false
    }
);
//薪水类别表term_salary
let term_salary = sequelize.define('term_salary', {
    term_salary_id: { type: Sequelize.INTEGER(11), primaryKey: true },
    term_salary: Sequelize.STRING(30),
}, {
        timestamps: false
    }
);
//users
let users = sequelize.define('user', {
    user_id: { type: Sequelize.INTEGER(11), primaryKey: true },
    user_phone: Sequelize.STRING(20),
    user_pwd: Sequelize.STRING(100),
    user_role: Sequelize.INTEGER(1),
}, {
        timestamps: false
    }
);
//求职者信息seekers
let seekers = sequelize.define('seekers', {
    seeker_user_phone: { type: Sequelize.INTEGER(11), primaryKey: true },
    seeker_name: Sequelize.STRING(20),
    seeker_img : Sequelize.STRING(100),
    seeker_sex: Sequelize.TEXT('tiny'),
    seeker_join: Sequelize.INTEGER(4),
    seeker_huhou: Sequelize.STRING(40),
    seeker_living: Sequelize.STRING(40),
    seeker_email: Sequelize.STRING(40),
    seeker_type: Sequelize.TEXT('tiny'),
    seeker_workcity: Sequelize.STRING(40),
    seeker_job: Sequelize.STRING(60),
    seeker_salary: Sequelize.STRING(30),
    seeker_self: Sequelize.TEXT('long'),
    seeker_now:Sequelize.TEXT('tiny'),
}, {
        timestamps: false
    }
);

//求职者教育信息seekers_edu
let seekers_edu = sequelize.define('seekers_edu', {
    seeker_edu_id: { type: Sequelize.INTEGER(11), primaryKey: true },
    seeker_phone: Sequelize.STRING(20),
    seeker_edu_start: Sequelize.DATE,
    seeker_edu_end: Sequelize.DATE,
    seeker_edu_school: Sequelize.STRING(30),
    seeker_edu_profession: Sequelize.STRING(30),
    seeker_edu_education: Sequelize.STRING(30),

}, {
        timestamps: false
    }
);
//求职者工作经历seekers_exp
let seekers_exp = sequelize.define('seekers_exp', {
    seeker_exp_id: { type: Sequelize.INTEGER(11), primaryKey: true },
    seeker_phone: Sequelize.STRING(20),
    seeker_exp_start: Sequelize.DATE,
    seeker_exp_end: Sequelize.DATE,
    seeker_exp_com: Sequelize.STRING(30),
    seeker_exp_job: Sequelize.STRING(30),
    seeker_exp_salary: Sequelize.STRING(30),
    seeker_exp_desc: Sequelize.TEXT('long'),
    seeker_exp_comType: Sequelize.STRING(30),
    seeker_exp_comSize: Sequelize.STRING(30),

}, {
        timestamps: false
    }
);
//求职者证书 seekers_certificate
let seekers_certificate = sequelize.define('seekers_certificate', {
    seeker_certificate_id: { type: Sequelize.INTEGER(11), primaryKey: true },
    seeker_phone: Sequelize.STRING(20),
    seeker_certi_type: Sequelize.STRING(30),
    seeker_certi_name: Sequelize.STRING(50),
    seeker_certi_datetime: Sequelize.DATE,


}, {
        timestamps: false
    }
);

//公司信息coms
let coms = sequelize.define('coms', {
    com_user_phone: { type: Sequelize.INTEGER(11), primaryKey: true },
    com_name: Sequelize.STRING(20),
    com_hr: Sequelize.STRING(20),
    com_img: Sequelize.STRING(100),
    com_date: Sequelize.DATE,
    com_type: Sequelize.STRING(20),
    com_email: Sequelize.STRING(40),
    com_tel: Sequelize.STRING(20),
    com_capital: Sequelize.INTEGER(11),
    com_province: Sequelize.STRING(20),
    com_city: Sequelize.STRING(20),
    com_county: Sequelize.STRING(20),
    com_addr: Sequelize.STRING(40),
    com_desc: Sequelize.TEXT('long'),
    com_verify:Sequelize.TEXT('tiny'),

}, {
        timestamps: false
    }
);
//公司招聘表com_job
let com_job = sequelize.define('com_job', {
    com_job_id: { type: Sequelize.INTEGER(11), primaryKey: true },
    com_user_phone: Sequelize.STRING(20),
    com_job: Sequelize.STRING(30),
    com_job_province: Sequelize.STRING(20),
    com_job_city: Sequelize.STRING(20),
    com_job_salary: Sequelize.STRING(30),
    com_job_num: Sequelize.INTEGER(11),
    com_job_edu: Sequelize.STRING(30),
    com_job_exp: Sequelize.STRING(30),
    com_job_type:Sequelize.TEXT('tiny'),
    com_job_desc: Sequelize.TEXT('long'),
    com_job_publish_time: Sequelize.DATE,

}, {
        timestamps: false
    }
);
//招聘求职表seek_job
let seek_job = sequelize.define('seek_job', {
    seek_job_id: { type: Sequelize.INTEGER(11), primaryKey: true },
    com_job_id: Sequelize.INTEGER(11),
    seeker_phone: Sequelize.STRING(20),
    seek_time: Sequelize.DATE,
    seek_job_verify: Sequelize.TEXT('tiny'),


}, {
        timestamps: false
    }
);
module.exports = {
    sequelize,
    term_job,
    term_edu,
    term_salary,
    users,
    seekers,
    seekers_edu,
    seekers_exp,
    seekers_certificate,
    coms,
    com_job,
    seek_job,

};


