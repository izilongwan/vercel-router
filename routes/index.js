const cities = require('../public/data/cities')

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

exports.Cities = async (ctx) => {
  // console.log(ctx.query, ctx.params);
  let { query: { search }, params: { id } } = ctx;

  // 查询 id是字母 对应 pinyin 模糊查询
  //     id是数字 精准查询
    if (id) {
    // 传递的是数字
    if (/\d/.test(id)) {
      console.log('exports.Cities -> /\d/.test(id)', /\d/.test(id))
      const arr = Object.values(cities)
                        .reduce((prev, cur) => prev.concat(cur), []);

      const city = arr.find((city => city.id == id));

      ctx.body = city;
      return;
    }

    // 传递的是字母
    if (/[A-z]+/.test(id)) {
      console.log('exports.Cities -> /[A-z]+/.test(id)', /[A-z]+/.test(id))
      id = id.toUpperCase();
      const firstChar = id[0];

      if (!cities[firstChar]) {
        ctx.body = [];
        return;
      }

      const data = cities[firstChar].filter(city => {
        return city.pinyin.toUpperCase().includes(id);
      })

      ctx.body = data;
      return;
    }

    ctx.body = [];
    return;
  }

  // 精准查询 {}
  if (search) {
    search = search.toUpperCase();
    const firstChar = search[0];

    if (!cities[firstChar]) {
      ctx.body = {};
      return;
    }

    const city = cities[firstChar].find(city => city.pinyin = search);

    ctx.body = city;
    return;
  }

  ctx.body = cities;
}
