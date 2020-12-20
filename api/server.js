const Koa = require('koa'),
      router = require('koa-router')(),
      static = require('koa-static'),
      views = require('koa-views');

const app = new Koa();

app.use(views('views', {
  extension: 'ejs'
}))

app.use(static(__dirname + '/static'));

app.use('/home', async (ctx) => {
  await ctx.render('home');
})

app.use(router.routes())
   .use(router.allowedMethods());

module.exports = app.callback();
