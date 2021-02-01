const { Article } = require('../../model/article');
// 导入分页模块
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    // res.send('欢迎来到博客首页')

    const page = req.query.page;

    // 从数据库中查询数据
    let result = await pagination(Article).page(page).size(4).display().find().populate('author').exec();
    let str = JSON.stringify(result);
    let json = JSON.parse(str);

    // 渲染模板并传递数据
    res.render('home/default.art', {
        result: json
    })
}