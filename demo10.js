const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  if (ctx.url === "/index") {
    ctx.cookies.set("MyName", "JSPang", {
      domain: "127.0.0.1",
      path: "/",
      maxAge: 1000 * 60 * 60,
      expires: new Date("2018-10-10"),
      httpOnly: false,
      overwrite: false
    });
    ctx.body = "cookie is ok";
  } else {
    if (ctx.cookies.get("MyName")) {
      ctx.body = ctx.cookies.get("MyName");
    } else {
      ctx.body = "meiyou cookie";
    }
  }
});

app.listen(3000, () => {
  console.log("[demo] server is starting at port 3000");
});
