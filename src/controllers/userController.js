const mongoose = require("mongoose")
const userModel = require("../models/userModel")


const createUser = async(req,res)=>{
    
    const data = req.body
   const  {name,phone,email,password,address} = data
   const {street, city, state} = data.address
    if(!name || !phone || !email || !password || !address || !street || !city || !state){
        res.status(400).send({status:false,message:"Please under all the details"})
    }
    let userCreated = await userModel.create(data)
    res.status(201).send({status:true, data:userCreated})

}



module.exports.createUser = createUser