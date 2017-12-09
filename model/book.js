/**
 * guwen  db Model
 */
const mongoose = require('mongoose')
const config = require('../config/conf')
mongoose.Promise = global.Promise;

// mongoose.connect(`mongodb://${config.localUrl}:${config.localPort}`, config.options)
let conno = mongoose.createConnection('mongodb://localhost:27017/guwenbookDB', config.options);
let db = mongoose.connection;
db.on('connected', function () {
    console.log(' guwenbookDB connect success')
})

let bookItem = mongoose.Schema({
    name: String,
    author: String,
    chapter: String,

    content: String,
    title: String,
    translator: String,
    translate: String,
    originUrl: String,
})
let model = (docName) => {
    return  conno.model(docName, bookItem);
};

/**
 * return 一个 model连接函数
 */
module.exports = {
    getModel: model
}