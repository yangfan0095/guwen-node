const booklist = require('../model/mongo').booklist
exports.queryBookList = async () => {
    let query = booklist.find({}).limit(15)
    let res = []
    await query.exec(function (err, list) {
        if (err) {
            res = []
        } else {
            res = list
        }
    })
    return res
}