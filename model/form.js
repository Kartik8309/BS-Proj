const mongoose = require("mongoose");

const form = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    message:String
})

module.exports = mongoose.model("form",form);