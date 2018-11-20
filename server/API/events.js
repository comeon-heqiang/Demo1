const mongoose = require("mongoose");
const router = require("koa-router")();
const info = require("../util/util");
var formidable = require('formidable');
const multer = require('koa-multer');
const path = require('path');
let storage = multer.diskStorage({
  // 配置上传目录
  destination: path.resolve(__dirname, '../static/upload'),
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
      ctx.body = info.success("");
    }
  } catch (error) {
    console.log(error);
    ctx.body = info.error(error)
  }
})

// 添加活动
router.post('/addEvent', async (ctx) => {
  let body = ctx.request.body.event;
  let eventData = {
    title: body.title,
    intro: body.intro,
    content: body.content,
    startTime: new Date(body.time[0]).Format('yyyy-MM-dd hh:mm:ss') || new Date().Format('yyyy-MM-dd hh:mm:ss'),
    endTime: new Date(body.time[1]).Format('yyyy-MM-dd hh:mm:ss') || new Date().Format('yyyy-MM-dd hh:mm:ss'),
    price: body.price,
    startAddress: body.startAddress,
    endAddress: body.endAddress,
    leaderId: body.leaderId,
    places: body.places,
    thumb: body.fileList,
    iselite: body.iselite,
    adminName: 'admin',
    addTime: new Date().Format('yyyy-MM-dd hh:mm:ss'),
    updateTime: new Date().Format('yyyy-MM-dd hh:mm:ss')
  }
  let eventModel = mongoose.model('events');
  let result = new eventModel(eventData);
  await result.save().then(res => {
    ctx.body = info.success('success')
  }).catch(err => {
    ctx.body = info.error(err);
  })
})

// 删除活动
router.post('/delEvent', async (ctx) => {
  var id = ctx.request.body.id;
  const eventModel = mongoose.model('events');
  try {
    let result = await eventModel.deleteOne({
      _id: id
    });
    if (result) {
      ctx.body = info.success('success')
    } else {
      ctx.body = info.error('活动不存在')
    }
  } catch (error) {
    ctx.body = info.error(error)
  }
})
// 编辑活动
router.post("/editEvent", async (ctx) => {
  var id = ctx.request.body.id;
  const eventModel = mongoose.model('events');
  try {
    let result = await eventModel.findOne({
      _id: id
    });
    if (result) {
      ctx.body = info.success(result)
    } else {
      ctx.body = info.error('活动不存在')
    }
  } catch (error) {
    ctx.body = info.error(error)
  }
})
// 更新活动
router.post('/updateEvent', async (ctx) => {
  let body = ctx.request.body.event;
  let id = ctx.request.body.event._id;

  // #region
  // let eventData = {
  //   title: body.title,
  //   intro: body.intro,
  //   content: body.content,
  //   startTime: new Date(body.time[0]).Format('yyyy-MM-dd hh:mm:ss'),
  //   endTime: new Date(body.time[1]).Format('yyyy-MM-dd hh:mm:ss'),
  //   price: body.price,
  //   startAddress: body.startAddress,
  //   endAddress: body.endAddress,
  //   leaderId: body.leaderId,
  //   places: body.places,
  //   thumb: fileList,
  //   iselite: body.iselite,
  //   adminName: 'admin',
  //   addTime: new Date().Format('yyyy-MM-dd hh:mm:ss'),
  //   updateTime: new Date().Format('yyyy-MM-dd hh:mm:ss')
  // }
  // #endregion
  let eventModel = mongoose.model('events');
  console.log('body.thumb:' + body.thumb)
  try {
    await eventModel.updateOne({
      _id: id
    }, {
      $set: {
        title: body.title,
        intro: body.intro,
        content: body.content,
        startTime: new Date(body.time[0]).Format('yyyy-MM-dd hh:mm:ss') || new Date().Format('yyyy-MM-dd hh:mm:ss'),
        endTime: new Date(body.time[1]).Format('yyyy-MM-dd hh:mm:ss') || new Date().Format('yyyy-MM-dd hh:mm:ss'),
        price: body.price,
        startAddress: body.startAddress,
        endAddress: body.endAddress,
        leaderId: body.leaderId,
        places: body.places,
        thumb: body.fileList,
        iselite: body.iselite,
        adminName: 'admin',
        updateTime: new Date().Format('yyyy-MM-dd hh:mm:ss')
      }
    });
    ctx.body = info.success('success')
  } catch (error) {
    ctx.body = info.error(err);
  }
})
// 添加活动2
router.post('/upload2', upload.any("file"), async (ctx) => {
  let body = ctx.req.body;
  let time = body.time.split(',');
  let fileList = [];
  ctx.req.files.forEach(item => {
    fileList.push(item.filename)
  })
  let eventData = {
    title: body.title,
    intro: body.intro,
    content: body.content,
    startTime: new Date(time[0]).Format('yyyy-MM-dd hh:mm:ss') || new Date().Format('yyyy-MM-dd hh:mm:ss'),
    endTime: new Date(time[1]).Format('yyyy-MM-dd hh:mm:ss') || new Date().Format('yyyy-MM-dd hh:mm:ss'),
    price: body.price,
    startAddress: body.startAddress,
    endAddress: body.endAddress,
    leaderId: body.leaderId,
    places: body.places,
    thumb: fileList,
    iselite: body.iselite,
    adminName: 'admin',
    addTime: new Date().Format('yyyy-MM-dd hh:mm:ss'),
    updateTime: new Date().Format('yyyy-MM-dd hh:mm:ss')
  }
  let eventModel = mongoose.model('events');
  let result = new eventModel(eventData);
  await result.save().then(res => {
    ctx.body = info.success('success')
  }).catch(err => {
    ctx.body = info.error(err);
  })
})
//更新活动2
router.post('/update', upload.any("file"), async (ctx) => {
  let body = ctx.req.body;
  let time = body.time.split(',');
  let fileList = [];
  
  if (body.file) {
    body.file.split(',').forEach(item => {      
      fileList.push(item.name)
    })
  }
  if (ctx.req.files) {
    ctx.req.files.forEach(item => {
      fileList.push(item.filename)
    })
  }
  
  let eventModel = mongoose.model('events');
  try {
    await eventModel.updateOne({
      _id: body._id
    }, {
      $set: {
        title: body.title,
        intro: body.intro,
        content: body.content,
        startTime: body.startTime || new Date(time[0]).Format('yyyy-MM-dd hh:mm:ss') || new Date().Format('yyyy-MM-dd hh:mm:ss'),
        endTime: body.endTime || new Date(time[1]).Format('yyyy-MM-dd hh:mm:ss') || new Date().Format('yyyy-MM-dd hh:mm:ss'),
        price: body.price,
        startAddress: body.startAddress,
        endAddress: body.endAddress,
        leaderId: body.leaderId,
        places: body.places,
        thumb: fileList,
        iselite: body.iselite,
        adminName: 'admin',
        updateTime: new Date().Format('yyyy-MM-dd hh:mm:ss')
      }
    });
    ctx.body = info.success('success')
  } catch (error) {
    ctx.body = info.error(err);
  }

})



//图片上传
router.post('/upload', upload.single('file'), async (ctx, next) => {

  ctx.body = {
    filename: ctx.req.file.filename
  };
});
module.exports = router;
