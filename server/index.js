const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const mongoose = require('mongoose');
const cors = require('koa2-cors'); //跨域模块
const bodyparser = require('koa-bodyparser')
const static = require("koa-static");
const staticPath = './static';
const path = require('path');
const {
  connect,
  initSchemas
} = require('./database/init.js');
(async () => {
  await connect();
  initSchemas();
})();
app.use(static(path.join(__dirname, staticPath)));
// 装载路由
app.use(bodyparser())
app.use(cors({
  origin: "http://localhost:8080",
  credentials: true
}));
let admin = require('./API/admin');
let events = require('./API/events')
let leader = require('./API/leader')
router.use('/admin', admin.routes());
router.use('/events', events.routes());
router.use('/leader', leader.routes());
app.use(router.routes())
app.use(router.allowedMethods())

// 加载中间路由件

app.listen(3200, () => {
  console.log("你的服务器在3200端口裸奔！")
})
