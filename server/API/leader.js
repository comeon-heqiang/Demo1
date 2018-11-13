const mongoose = require("mongoose");
const router = require('koa-router')();
const info = require('../util/util')
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
module.exports = router;
