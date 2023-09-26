const mongoose = require("mongoose")
const bikeModel = require("../models/bikeSchema")
const userModel = require("../models/userModel")

const bikeDetails = async(req, res)=>{
    const data = req.body

    const createBike = await bikeModel.create(data)
    res.status(201).send({status:true, data:createBike})
}

const getBike = async(req, res)=>{
    const data = req.body

    const getBike = await bikeModel.find({isAvailable:true})
    res.status(200).send({status:true, data:getBike})
}


const bookBike = async(req, res)=>{
    const userId = req.params.userId
    const bikeId = req.params.bikeId

    const bikebooked = await bikeModel.updateOne({_id:bikeId}, {isAvailable:false})
    const user = await userModel.findOne({_id:userId}).populate("bikedetails")
    res.status(201).send({status:true, data:user})

    
}

module.exports.bikeDetails = bikeDetails
module.exports.getBike = getBike