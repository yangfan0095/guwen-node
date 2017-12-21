const booklist = require('../model/mongo').booklist
const getModel = require('../model/book').getModel;
const {
    handleSuccess,
    handleError
} = require('../utils/handle');

class bookHelper {
    /**
     * 查询某章节书籍内容
     * @param {String} params  数据库查询参数
     * @return{Json} 返回查询结果
     */
    static async queryBook(params) {
        const {
            chapter,
            select,
            dbName,
            size,
            page
        } = params;
        let res;
        let model = getModel(dbName);
        let queryObj = chapter ? {
            chapter: chapter
        } : {};
        await model.paginate(queryObj, {
            select,
            page: page,
            limit: size,
            sort: {
                sort: 1
            },
        }, (err, query) => {
            if (err) {
                res = null;
            } else {
                let tagClone = JSON.parse(JSON.stringify(query));
                res = {
                    pagination: {
                        total: tagClone.total,
                        current_page: tagClone.page,
                        total_page: tagClone.pages,
                        page_size: tagClone.limit
                    },
                    list: tagClone.docs
                };
            }
        });
        return res;
    }
    /**
     * 查询某章节书籍列表
     * @param {String} params  数据库查询参数
     * @return{Json} 返回查询结果
     */
    static async queryBookList(params) {
        const {
            select,
            size,
            page
        } = params;
        let res;
        await booklist.paginate({}, {
            select: select,
            page: page,
            limit: size,
            sort: {
                sort: 1
            },
        }, (err, query) => {
            if (err) {
                res = null;
            } else {
                let tagClone = JSON.parse(JSON.stringify(query));
                res = {
                    pagination: {
                        total: tagClone.total,
                        current_page: tagClone.page,
                        total_page: tagClone.pages,
                        page_size: tagClone.limit
                    },
                    list: tagClone.docs
                };
            }
        });
        return res;
    }
    /**
     * 查询书籍章节列表
     */
    static async queryBookChapter(params) {
        const {
            dbName,
        } = params;
        let res;
        let model = getModel(dbName);
        await model.find({}, {
            chapter: 1,
            _id: 0
        }, (err, query) => {
            if (err) {
                res = [];
            } else {
                res = query;
            }
        })
        return res;
    }
}

module.exports = bookHelper;