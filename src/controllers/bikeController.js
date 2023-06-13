const mongoose = require("mongoose")
const bikeModel = require("../models/bikeSchema")

const bikeDetails = async(req, res)=>{
    const data = req.body

    const createBike = await bikeModel.create(data)
    res.status(201).send({status:true, data:createBike})
}