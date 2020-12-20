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
