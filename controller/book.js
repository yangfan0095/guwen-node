const book = require('../dbhelper/book');
const booklist = require('../model/mongo').booklist;
const getModel = require('../model/book').getModel;
/**
 * 分页查询列表
 */
module.exports.booklist = async(ctx, next) => {
    console.log(ctx);
    let reqParam = ctx.request.query;
    let page = Number(reqParam.page) || 1; //当前第几页
    let size = Number(reqParam.size) || 15; //每页显示的记录条数
    //显示符合前端分页请求的列表查询
    let query = booklist.find({}).limit(size).skip((page-1)*size);
    await query.exec(function (err, list) {
        if (err) {
            res = []
        } else {
            ctx.body = {
                title: list
            }
        }
    })
}
/**
 * 获取书籍章节列表
 */
module.exports.queryBook = async(ctx, next) => {
    console.log(ctx);
    let reqParam = ctx.request.query;
    let page = Number(reqParam.page) || 1; //当前第几页
    let size = Number(reqParam.size) || 10; //每页显示的记录条数
    let dbName = reqParam.dbName;
    //显示符合前端分页请求的列表查询
    let model = getModel(dbName);
    let query = model.find({}).limit(size).skip((page-1)*size);
    await query.exec(function (err, list) {
        if (err) {
            res = []
        } else {
            ctx.body = {
                title: list
            }
        }
    })
}