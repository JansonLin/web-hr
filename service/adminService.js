var db = require('../db');

module.exports = {

    /**
     * 用户手机号是否存在验证
     * @author Vickey
     * 
     * @method userNameValid
     * 
     * @param {String} user_phone
     * 
     * @return {bool} 
     */
    userNameValid: async (user_phone) => {
        let sql = "SELECT * FROM users "
            + " WHERE user_phone = '" + user_phone + "'";

        let result = await db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT });

        if (result.length > 0)
            return true;
        else
            return false;
    },


    /**
     * 用户登陆验证
     * @method loginValid
     * 
     * @param {String} user_login  用户名或邮箱
     * @param {String} user_pwd 密码
     * 
     * @return {obj} 用户信息 or false     
     * 
     */
    loginValid: async (user_phone, user_pwd) => {
        let sql = "SELECT * FROM users "
            + " WHERE user_phone = '" + user_phone + "'"
            + " AND user_pwd = '"+user_pwd+"'";

        let result = await db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT });

        if (result.length > 0){
             let user = result[0];
                 user.user_pwd = '';
                 return user;
        }
        else
            return false;

    },

}