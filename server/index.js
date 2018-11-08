const Koa = require('koa');
const router=require('koa-router')();
const app = new Koa();
const mongoose = require('mongoose');
const {
  connect,
  initSchemas
} = require('./database/init.js');
(async () => {
  await connect();
  initSchemas();
})();
app.listen(3000, () => {
  console.log("端口启动成功")
})
