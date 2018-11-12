const mongoose = require("mongoose");
const router = require("koa-router")();
const info = require("../util/info");
var formidable = require('formidable');
const multer = require('koa-multer');
const path = require('path');
let storage = multer.diskStorage({
  destination: path.resolve('upload'),
  filename: (ctx, file, cb) => {
    cb(null, file.originalname);
  }
});
let upload = multer({
  storage: storage  
});
// 事件列表
router.post('/eventsList', async (ctx) => {
  var page = ctx.request.body.page,
    start = 10,
    skip = (page - 1) * start,
    sort = 0,
    count = 0;
  const eventsModel = mongoose.model('events');
  try {
    count = await eventsModel.find({}).estimatedDocumentCount();
    let result = await eventsModel.find({}).skip(skip).limit(start).sort({
      _id: sort
    });
    if (result) {
      ctx.body = {
        code: 200,
        message: result,
        count: count
      }
    } else {
      ctx.body = info.suc("");
    }
  } catch (error) {
    console.log(error);
    ctx.body = info.err(error)
  }
})
//图片上传
router.post('/upload', upload.single('file'), async (ctx) => {
  console.log(1)
  if (ctx.request.file) {
    ctx.body = 'upload success';
  } else {
    ctx.body = 'upload error';
  }
});
module.exports = router;
