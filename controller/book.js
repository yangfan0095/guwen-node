const bookHelper = require('../dbhelper/book');
const booklist = require('../model/mongo').booklist;
const getModel = require('../model/book').getModel;
const {
    handleSuccess,
    handleError
} = require('../utils/handle');
/**
 * 分页查询列表
 */
module.exports.booklist = async(ctx, next) => {
    let reqParam = ctx.request.query;
    let page = Number(reqParam.page) || 1; //当前第几页
    let size = Number(reqParam.size) || 15; //每页显示的记录条数
    const list = await bookHelper.queryBookList({
        select: '-originUrl -__v -_id',
        page: page,
        size: size
    });
    if (list) {
        handleSuccess({
            ctx,
            message: '列表数据获取成功!',
            result: list,
        })
    } else {
        handleError({
            ctx,
            message: '获取标签列表失败'
        })
    }
}
/**
 * 获取书籍章节列表
 */
module.exports.queryBook = async(ctx, next) => {
    let reqParam = ctx.request.query;
    let page = Number(reqParam.start) || 1; //当前第几页
    let size = Number(reqParam.size) || 1; //每页显示的记录条数 默认查询一篇文章
    let dbName = reqParam.dbName || 'guwenbook0';
    //显示符合前端分页请求的列表查询
    let model = getModel(dbName);
    const list = await bookHelper.queryBook({
        dbName: dbName,
        page: page,
        size: size
    });
    if (list) {
        handleSuccess({
            ctx,
            message: '列表数据获取成功!',
            result: list,
        })
    } else {
        handleError({
            ctx,
            message: '获取标签列表失败'
        })
    }
}