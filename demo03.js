const koa = require("koa");
const app = new koa();
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
    let postData = await parsePostData(ctx);
    ctx.body = postData;
  } else {
    ctx.body = "<h1>404</h1>";
  }
});
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = "";
      ctx.req.addListener("data", data => {
        postData += data;
      });
      ctx.req.on("end", () => {
        let parseData= parseQueryStr(postData)
        resolve(parseData);
      });
    } catch (err) {
      reject(err);
    }
  });
}
function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split("&");
  console.log(queryStrList);
  for (const [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split("=");
    console.log(itemList);
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}
app.listen(3000, () => {
  console.log("listening 3000");
});
