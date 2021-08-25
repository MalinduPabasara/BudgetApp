const mongoose = require('mongoose')


const budgetSchema = new mongoose.Schema({
    name: { 
        type: String,
        required:true 
    },
    email: { 
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    } 
    // sub: { //password 
    //     type: Boolean,
    //     required: true,
    //     default:false
    // }
})
module.exports=mongoose.model('Budget',budgetSchema)