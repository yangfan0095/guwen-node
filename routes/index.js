const router = require('koa-router')()
const bookActions = require('../controller/book')
const book = require('../dbhelper/book')
const booklist = require('../model/mongo').booklist;

router.get('/', async(ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async(ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async(ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/booklist', bookActions.booklist);
router.get('/book', bookActions.queryBook);
router.get('/chapter', bookActions.queryBookChapter);


module.exports = router