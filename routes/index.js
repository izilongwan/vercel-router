exports.Index = async (ctx) => {
  const { title } = ctx.query;

  await ctx.render('index', {
    title: title || '--'
  });
}

exports.Home = async (ctx) => {
  await ctx.render('home', {

  });
}

exports.Api = async (ctx) => {
  ctx.body = {
    name: 'api',
    description: 'Lorem ipsum dolor sit amet.'
  }
}

exports._404 = async (ctx) => {
  await ctx.render('_404');
}
