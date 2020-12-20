const Koa = require('koa'),
      router = require('koa-router')(),
      static = require('koa-static'),
      views = require('koa-views');

const { Index, Home } = require('./routes');

const app = new Koa();

// 模版
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// 静态资源
app.use(static(__dirname + '/static'))
   .use(static(__dirname + '/views'))

// 路由
router.get('/', Index)
      .get('/home', Home)

app.use(router.routes())
   .use(router.allowedMethods())

app.listen(443, () => console.log('runing'));

module.exports = app.callback();
