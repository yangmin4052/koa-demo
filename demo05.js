const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");
const app = new koa();
function render(page) {
  return new Promise((resolve, reject) => {
    let pageUrl = `./page/${page}`;
    fs.readFile(pageUrl, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
async function route(url) {
  let page = "404.html";
  switch (url) {
    case "/":
      page = "index.html";
      break;
    case "/index":
      page = "index.html";
      break;
    case "/todo":
      page = "todo.html";
      break;
    case "/404":
      page = "404.html";
      break;
    default:
      return;
  }
  let html = await render(page);
  console.log(html)
  return html;
}
// app.use(bodyParser());
app.use(async ctx => {
  let url = ctx.request.url;
  let html = await route(url);
  ctx.body = html;
});
app.listen(3000, () => {
  console.log("listening 3000");
});
