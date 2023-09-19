const mongoose = require("mongoose")
const bikeModel = require("../models/bikeSchema")

const bikeDetails = async(req, res)=>{
    const data = req.body

    const createBike = await bikeModel.create(data)
    res.status(201).send({status:true, data:createBike})
}

const findBike = async(req, res)=>{
    const data = req.body

    const getBike = await bikeModel.find({isAvailable:true})
    res.status(200).send({status:true, data:getBike})
}

module.exports.bikeDetails = bikeDetails