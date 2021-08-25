const mongoose = require('mongoose')


const incomeSchema = new mongoose.Schema({
  income: {
    type: String,
    required: true,
  },
  transport: {
    type: String,
    required: true,
  },
  foodanddrink: {
    type: String,
    required: true,
  },
  clotheese: {
    type: String,
    required: true,
  },
  gas: {
    type: String,
    required: true,
  },
  services: {
    type: String,
    required: true,
  },
  shopping: {
    type: String,
    required: true,
  },
  medicine: {
    type: String,
    required: true,
  }
  // sub: { //password
  //     type: Boolean,
  //     required: true,
  //     default:false
  // }
});
module.exports=mongoose.model('Income',incomeSchema)