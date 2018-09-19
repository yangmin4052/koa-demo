const koa = require("koa");
const Router = require("koa-router");
const app = new koa();
const router = new Router();

router
  .get("/", (ctx, next) => {
    ctx.body = "hello";
  })
  .get("/todo", (ctx, next) => {
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
  })
  .get("/hah", (ctx, next) => {
    ctx.body = "hahhahhahhah";
  });

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log("listening 3000");
});
