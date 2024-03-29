const Koa         = require('koa'),
      router      = require('koa-router')(),
      static      = require('koa-static'),
      { resolve } = require('path'),
      koaEjs      = require('koa-ejs'),
      cors        = require('koa-cors')

const { Index, Home, Api, _404, Cities } = require('./routes'),
      notFound = require('./middleware/_404')

const app = new Koa();

// 模版引擎
koaEjs(app, {
   root: 'views',
   viewExt: 'ejs',
   layout: 'layout/index',
   cache: false,
})

// 静态资源
app.use(static(resolve(__dirname + '/static')))
   .use(static(resolve(__dirname + '/views')))
   .use(static(resolve(__dirname + '/public')))
   .use(static(resolve(__dirname + '/dist')))

// 中间件404
app.use(notFound)
   .use(cors({
      origin: '*'
   }))

// 路由
router.get('/', Index)
      .get('/home', Home)
      .get('/api', Api)
      .get('/404', _404)
      .get('/cities/:id?', Cities)

// 路由请求方法
app.use(router.routes())
   .use(router.allowedMethods())

app.listen(8000, () => console.log('running'));
