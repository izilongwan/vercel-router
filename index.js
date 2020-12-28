const Koa = require('koa'),
      router = require('koa-router')(),
      static = require('koa-static'),
      { resolve } = require('path'),
      views = require('koa-views');

const { Index, Home, Api, _404 } = require('./routes'),
      notFound = require('./middleware/_404')

const app = new Koa();

// 模版引擎
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// 静态资源
app.use(static(resolve(__dirname + '/static')))
   .use(static(resolve(__dirname + '/views')))
   .use(static(resolve(__dirname + '/public')))

// 中间件404
app.use(notFound);

// 路由
router.get('/', Index)
      .get('/home', Home)
      .get('/api', Api)
      .get('/404', _404)

// 路由请求方法
app.use(router.routes())
   .use(router.allowedMethods())

app.listen(8000, () => console.log('runing'));
