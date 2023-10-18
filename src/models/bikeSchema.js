const mongoose = require("mongoose")
const objectId= mongoose.Schema.Types.ObjectId
const { gfs, upload } = require("../middleware/Gridfs");

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
        type:Boolean,
        
        default:true
    },
    price:{
        type:String,
        required:true
    },
    isDeleted:{
            type:Boolean,
            default:false
        },
    image: {
            type: String, 
          },
    
},{timestamps:true})

module.exports = mongoose.model("bike", bikeSchema)