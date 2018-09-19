const koa = require("koa");
const bodyParser = require('koa-bodyparser');
const app = new koa();
app.use(bodyParser());
app.use(async ctx => {
  if (ctx.url === "/" && ctx.method === "GET") {
    ctx.body = `\
    <h1>Koa2 request post demo</h1>
    <form method="POST"  action="/">
        <p>userName</p>
        <input name="userName" /> <br/>
        <p>age</p>
        <input name="age" /> <br/>
        <p>webSite</p>
        <input name='webSite' /><br/>
        <button type="submit">submit</button>
    </form>
`;
  } else if (ctx.url === "/" && ctx.method === "POST") {
    // let postData = await parsePostData(ctx);
    let postData = ctx.request.body;
    ctx.body = postData;
  } else {
    ctx.body = "<h1>404</h1>";
  }
});
app.listen(3000, () => {
  console.log("listening 3000");
});
