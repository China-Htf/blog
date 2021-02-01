const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports = async (req, res, next) => {
    // 接收客户端传递过来的请求参数
    const {username, email, role, state, password} = req.body;
    // 即将要修改用户的id
    const id = req.query.id;

    let user = await User.findOne({_id: id});
    const isValid = await bcrypt.compare(password, user.password);

    if(isValid) {
        // 将用户信息更新到数据库中
        await User.updateOne({_id: id}, {
            username,
            email,
            role,
            state
        })
        // 将页面重定向到用户列表页面
        res.redirect('/admin/user');
    } else {
        // 密码比对失败
        let obj = {path:'/admin/user-edit', message:'密码比对失败', id: id};
        next(JSON.stringify(obj));
    }

}