const mongoose = require("mongoose")

const owner = require("../models/ownerModel")


const ownerData = async(req, res)=>{
    const data = req.body

    const ownerCreated = await owner.create(data)
    res.status(201).send({status:true, data:ownerCreated})

}