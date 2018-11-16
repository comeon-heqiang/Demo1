const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventsSchema = new Schema({
  id: Schema.Types.ObjectId, //编号
  title: String, //活动标题
  intro: String, //活动简介
  content: String, //内容
  startTime: String, //开始时间
  endTime: { //结束时间
    type: String,
    default: ''
  },  
  price: {
    type: Number,
    default: 0
  }, //价格
  startAddress: String, //开始地点
  endAddress: String, //结束地点
  leaderId:String, //领队编号
  places: Number, //名额
  register: {
    type: Array,
    default: []
  }, //报名用户
  thumb: Array, //活动轮播图
  iselite: {
    type: Boolean,
    default: true
  }, //是否推荐
  adminName:'',//添加活动管理员名称
  addTime: {
    type: String,
    default: new Date()
  }, //添加时间
  updateTime: String //更新时间
})
mongoose.model("events", eventsSchema)
