const mongoose = require('mongoose');
const db = "mongodb://localhost/xishanxing";
const glob = require("glob");
const {
  resolve
} = require("path");
exports.initSchemas = () => {
  // 同步引入所有schema文件
  glob.sync(resolve(__dirname, './Schema/', '**/*.js')).forEach(require);
}
exports.connect = () => {
  mongoose.connect(db, {
    useNewUrlParser: true
  });
  return new Promise((resolve, reject) => {
    let connCount = 0; //连接次数
    // 连接出错后重连 重连次数超过3次，则抛出错误
    mongoose.connection.on('error', () => {
      console.log('连接错误，尝试重连')
      if (connCount > 3) {
        reject();
        throw ('连接出错，请人工处理');
      } else {
        connCount++;
        mongoose.connect(db,{useNewUrlParser:true});
      }
    })
    // 连接断开
    mongoose.connection.on('disconnected', () => {
      console.log("数据库连接断开");
      if (connCount > 3) {
        reject();
        throw ('连接断开，请人工处理');
      } else {
        connCount++;
        mongoose.connect(db,{useNewUrlParser:true});
      }
    })
    //连接成功
    mongoose.connection.once('open', () => {
      console.log("数据库连接成功");
      resolve();
    })

  })
}
