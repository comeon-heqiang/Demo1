const mongoose=require('mongoose');
const Schema=mongoose.Schema;
// 领队
const leaderSchema=new Schema({
    id:Schema.Types.ObjectId,
    name:String,
    tel:Number,
    birthDate:{
        type:String,
        default:""
    },
    addressCode:Array,
    address:String,
    pic:String,
    createDate:String,
    updateDate:String,
    intro:String,
    content:String
})
mongoose.model('leader',leaderSchema);