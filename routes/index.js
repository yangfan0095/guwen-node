const router = require('koa-router')()
const bookActions = require('../controller/book')
const book = require('../dbhelper/book')
const booklist = require('../model/mongo').booklist;

router.get('/booklist', bookActions.booklist);
router.get('/book', bookActions.queryBook);
router.get('/chapter', bookActions.queryBookChapter);


module.exports = router