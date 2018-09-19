const koa = require("koa");
const Router = require("koa-router");
const app = new koa();
const home = new Router();
home
  .get("/ni", async ctx => {
    ctx.body = "nihao";
  })
  .get("/wo", async ctx => {
    ctx.body = "wohao";
  })
  .get("/ta", async ctx => {
    ctx.body = "tahao";
  });
const page = new Router();
page
  .get("/ni", async ctx => {
    ctx.body = "nihaopage";
  })
  .get("/wo", async ctx => {
    ctx.body = "wohaopage";
  })
  .get("/ta", async ctx => {
    ctx.body = "tahaopage";
  });
const router = new Router({
  prefix:'/jj'
});
router
  .use("/home", home.routes(), home.allowedMethods())
  .use("/page", page.routes(), page.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log("listening 3000");
});
