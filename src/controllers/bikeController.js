const bikeModel = require("../models/bikeSchema")
const userModel = require("../models/userModel")
const uploadFile = require("../aws/s3service")



const bikeDetails = async(req, res)=>{
    const data = req.body
 
    if (!req.files) {
        // Check if a file was uploaded
        return res.status(400).send({ status: false, message: 'No file uploaded' });
      }
      const bikeImage = req.files
      const imageUrl = await uploadFile(bikeImage[0])
      data.image = imageUrl
      console.log("data.image:", data.image);
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
module.exports.bookBike = bookBike