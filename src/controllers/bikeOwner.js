const mongoose = require("mongoose")

const owner = require("../models/ownerModel")

const bikeModel = require("../models/bikeSchema")


const ownerData = async(req, res)=>{
    const data = req.body

    const ownerCreated = await owner.create(data)
    res.status(201).send({status:true, data:ownerCreated})

}

const addBike = async(req, res)=>{
    const data = req.body

    const newBikes = await bikeModel.create(data)
    res.status(201).send({status:true, data:newBikes})

}

const deleteBike = async(req, res)=>{
    const data = req.body

    const deleteBikeFromCollection = await bikeModel.updateOne({_id:data.id},{isDeleted: true})
    res.status(200).send({status:true, Message:"Bike has been removed"})
}

module.exports.ownerData = ownerData
module.exports.addBike = addBike
module.exports.deleteBike = deleteBike