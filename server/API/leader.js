const mongoose = require("mongoose");
const router = require('koa-router')();
const info = require('../util/util');
const multer = require('koa-multer');
const path = require('path');
let storage = multer.diskStorage({
  // 配置上传目录
  destination: path.resolve(__dirname, '../static/leader'),
  // 修改文件名称
  filename: (req, file, cb) => {
    var fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
});
// 加载配置
let upload = multer({
  storage: storage
});
router.get('/', async (ctx) => {
  const leaderModel = mongoose.model("leader");
  try {
    let result = await leaderModel.find({});

    if (result) {
      ctx.body = info.success(result)
    }
  } catch (error) {
    console.log(error);
    ctx.body = info.error(error);
  }
})
// 添加领队
router.post("/addLeader", upload.any("file"), async (ctx) => {
  let body = ctx.req.body;
  let fileName = ctx.req.files[0].filename;

  let leaderData = {
    name: body.name,
    tel: body.tel,
    birthDate: body.birthDate,
    addressCode: body.addressCode.split(','),
    address: body.address,
    pic: fileName || '',
    intro: body.intro,
    content: body.content,
    createDate: new Date().Format('yyyy-MM-dd hh:mm:ss'),
    updateDate: new Date().Format('yyyy-MM-dd hh:mm:ss')
  };
  let leaderModel = mongoose.model("leader");
  let result = new leaderModel(leaderData);
  await result.save().then(res => {
    ctx.body = info.success("success")
  }).catch(err => {
    ctx.body = info.error(err)
  });

})
// 删除领队
router.post("/delLeader", async (ctx) => {
  let id = ctx.request.body.id;
  let leaderModel = mongoose.model("leader");
  try {
    let result = await leaderModel.deleteOne({
      _id: id
    })
    ctx.body = info.success("success")
  } catch (error) {
    ctx.body = info.error(error)
  }
})
// 编辑领队
router.post("/editLeader", async (ctx) => {
  let id = ctx.request.body.id;
  let leaderModel = mongoose.model("leader");
  try {
    let result = await leaderModel.findOne({
      _id: id
    });
    ctx.body = info.success(result)
  } catch (error) {
    ctx.body = info.error(error)
  }


})
router.post("/updateLeader", upload.any("file"), async (ctx) => {
  let body = ctx.req.body;
  let fileName = '';
  // let fileName = ctx.req.files[0].filename;  

  console.log(ctx.req)
  if (ctx.req.files.length > 0) {
    fileName = ctx.req.files[0].filename
  } else {

  }
  let leaderModel = mongoose.model("leader");
  try {
    let result = await leaderModel.update({
      _id: body.id
    }, {
      $set: {
        name: body.name,
        tel: body.tel,
        birthDate: body.birthDate,
        addressCode: body.addressCode.split(','),
        address: body.address,
        pic: fileName || '',
        intro: body.intro,
        content: body.content,
        createDate: new Date().Format('yyyy-MM-dd hh:mm:ss'),
        updateDate: new Date().Format('yyyy-MM-dd hh:mm:ss')
      }
    });
    ctx.body = info.success('success');
  } catch (error) {
    ctx.body = info.error(error)
  }
})
router.post("/upload", upload.any("file"), async (ctx) => {
  ctx.body = {
    // errno 即错误代码，0 表示没有错误。
    //       如果有错误，errno != 0，可通过下文中的监听函数 fail 拿到该错误码进行自定义处理
    "errno": 0,

    // data 是一个数组，返回若干图片的线上地址
    "data":ctx.req.files
}
})
module.exports = router;
