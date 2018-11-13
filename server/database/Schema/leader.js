const mongoose=require('mongoose');
const Schema=mongoose.Schema;
// 领队
const leaderSchema=new Schema({
    id:Schema.Types.ObjectId,
    name:String,
    tel:Number,
    age:{
        type:Number,
        default:18
    },
    pic:String,
    createDate:String,
    updateDate:String,
    intro:String
})
mongoose.model('leader',leaderSchema);