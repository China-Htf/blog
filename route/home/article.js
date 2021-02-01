const { Article } = require('../../model/article');
const { Comment } = require('../../model/comment');
module.exports = async (req, res) => {
    // res.send('欢迎来到博客文章详情展示页面')
    const id = req.query.id;
    let article = await Article.findOne({_id: id}).populate('author').lean();
    let comments = await Comment.find({aid: id}).populate('uid').lean();
    res.render('home/article.art', {
        article,
        comments
    })
}