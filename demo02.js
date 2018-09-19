const koa = require("koa");
const app = new koa();
app.use(async ctx => {
  let url = ctx.url;
  let request = ctx.request;
  let req_query = request.query;
  let ctx_query = ctx.query;
  let req_querystring = request.querystring;
  let ctx_querystring = ctx.querystring;

  ctx.body = {
    url,
    req_query,
    ctx_query,
    req_querystring,
    ctx_querystring
  };
});
app.listen(3000, () => {
  console.log("listening 3000");
});
