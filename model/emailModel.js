const mongoose = require("mongoose")


const emailSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    message:{
        type:String,
    }
})

const mail = mongoose.model("Mail",emailSchema)

module.exports = mail