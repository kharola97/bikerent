const mongoose = require("mongoose")
const ownerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    shopName:{
        type:String,
        required:true
    },
    totalBikes:{
        type:String,
        required:true
    },
    address:{
        street:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        }
    },
    shopAddress:{
        street:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        }
    }

},{timestamps:true})

module.exports = mongoose.model("owner", ownerSchema)