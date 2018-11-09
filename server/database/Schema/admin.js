const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  id: Schema.Types.ObjectId,
  username: String,
  password: String,
  createDate: String,
  lastLoginDate: {
    type: Date,
    default:Date.now
  },
  popedom: {
    type: Array,
    default: [0]
  }
})
mongoose.model('admin', adminSchema)
