const mongoose = require('mongoose');
const router = require('koa-router')();
const info = require('../util/util');
router.get('/', async (ctx) => {
  ctx.body = "123";
})
// 注册管理员
router.post('/register', async (ctx) => {
  let adminModel = mongoose.model('admin');
  let {
    username,
    password
  } = ctx.request.body; //获取客户端传过来的用户名密码

  let findName = await adminModel.findOne({
    username: username
  })
  if (findName) {
    ctx.body = info.error('用户名存在')
  } else {
    let createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
    let result = new adminModel({
      username,
      password,
      createDate
    });
    await result.save().then(res => {
      ctx.body = info.success('注册成功')
    }).catch(err => {
      console.log(err)
      ctx.body = info.error('注册失败')
    })
  }
})
// 登录
router.post('/login', async (ctx) => {
  let {
    username,
    password
  } = ctx.request.body;
  let adminModel = mongoose.model("admin");
  //查找用户,对比用户名密码
  let result = await adminModel.findOne({
    username: username,
    password: password
  })
  if (result) {
    ctx.body = info.success('登录成功')
  } else {
    ctx.body = info.error('用户名密码错误')
  }
})
module.exports = router;
