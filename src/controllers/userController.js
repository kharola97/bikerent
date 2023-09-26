const mongoose = require("mongoose")
const userModel = require("../models/userModel")
const {isValidPhone,isValidEmail} = require("../Validation/Regex")


const createUser = async(req,res)=>{
   try {
     const data = req.body
   const  {name,phone,email,password,address} = data
   const {street, city, state} = data.address
    if(!name || !phone || !email || !password || !address || !street || !city || !state){
        res.status(400).send({status:false,message:"Please fill all the details"})
    }
    if (!isValidPhone(phone))
      return res.status(400).send({
        status: false,
        message: "Please provide a valid indian phone no.",
      });
    if (!isValidEmail(email))
      return res.status(400).send({
        status: false,
        message: "Please provide a valid email",
      });

    let userCreated = await userModel.create(data)
    res.status(201).send({status:true, data:userCreated})
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    } 
}



module.exports.createUser = createUser