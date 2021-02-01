const express = require('express');
//  创建博客展示页面路由
const home = express.Router();

// 博客前台展示页面
home.get('/', require('./home/index'))

// 博客前台文章详情展示页面
home.get('/article', require('./home/article'))

// 实现用户评论功能
home.post('/comment', require('./home/comment'))

// 实现用户退出功能
home.get('/logout', require('./home/logout'))

//  将路由对象作为模块成员进行导出
module.exports = home;