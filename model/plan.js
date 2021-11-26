const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    plan:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Plan",planSchema);