const mongoose = require("mongoose")
const objectId= mongoose.Schema.Types.ObjectId


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
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
    bikedetails:{
        type:objectId,
        ref:"bike"
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    profileImage:{
        type:String
    },
},{timestamps:true})

module.exports = mongoose.model("user", userSchema)