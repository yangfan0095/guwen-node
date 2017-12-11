/**
 * guwen  db Model
 */
const mongoose = require('mongoose')
const config = require('../config/conf')
mongoose.Promise = global.Promise;
let url = `mongodb://${config.originIp}/${config.mongoDB.guwen}`;
let conno = mongoose.createConnection(url, config.options);
let db = mongoose.connection;
db.on('connected', function() {
    console.log('mongodb connect success')
})

let bookMap = mongoose.Schema({
    dbName: String,
    bookName: String,
    bookUrl: String,
    bookDetail: String,
})
let booklist = conno.model('booklists', bookMap);

module.exports = {
    booklist
}