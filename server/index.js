const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const mongoose = require('mongoose');
const cors = require('koa2-cors'); //跨域模块
const bodyparser = require('koa-bodyparser')
const {
  connect,
  initSchemas
} = require('./database/init.js');
(async () => {
  await connect();
  initSchemas();
})();

// 装载路由
app.use(bodyparser())
app.use(cors({
  origin: "http://localhost:8080",
  credentials: true
}));
let admin = require('./API/admin');
let events=require('./API/events')
router.use('/admin', admin.routes());
router.use('/events', events.routes());
app.use(router.routes())
app.use(router.allowedMethods())

// 加载中间路由件

app.listen(3000, () => {
  console.log("端口启动成功")
})
