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
    await adminModel.updateOne({
      username: username
    }, {
      lastLoginDate: new Date().Format('yyyy-MM-dd hh:mm:ss')
    })
    ctx.body = info.success('登录成功')
  } else {
    ctx.body = info.error('用户名密码错误')
  }
})
//管理员列表
router.post("/adminList", async (ctx) => {
  let adminModel = mongoose.model('admin');
  var page = ctx.request.body.page,
    sort = ctx.request.body.sort,
    start = 10,
    skip = (page - 1) * start,
    count = 0;
  try {
    let count = await adminModel.find({}).estimatedDocumentCount();
    let result = await adminModel.find({}).skip(skip).limit(start).sort({
      "_id": sort
    });

    if (result) {
      ctx.body = {
        code: 200,
        count: count,
        message: result
      };
    } else {
      ctx.body = info.success()
    }
  } catch (err) {
    ctx.body = info.error(err)
  }

})
// 删除管理员
router.post("/delAdmin", async (ctx) => {

  let id = ctx.request.body.id;
  const adminModel = mongoose.model('admin');
  try {
    let result = await adminModel.deleteOne({
      _id: id
    });
    if (result) {
      ctx.body = info.success("success")
    } else {
      ctx.body = info.success('error')
    }
  } catch (error) {
    console.log(error);
    ctx.body = info.error(error)
  }


})
module.exports = router;
