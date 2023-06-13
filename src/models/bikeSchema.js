const mongoose = require("mongoose")
const objectId= mongoose.Schema.Types.ObjectId


const bikeSchema = new mongoose.Schema({
    bikename:{
        type:String,
        required:true
    },

    shopname:{
     type:objectId,
     ref:"owner",
     required:true,
     
    },
    owner:{
        type:objectId,
        ref:"owner",
        required:true
    },
    bikenumber:{
        type:String,
        required:true,
        unique:true
    },
    isAvailable:{
        type:String,
        enum:["Yes", "No"],
        default:"yes"
    },
    price:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("bike", bikeSchema)