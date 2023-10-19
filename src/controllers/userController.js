const mongoose = require("mongoose")
const userModel = require("../models/userModel")
const {isValidPhone,isValidEmail} = require("../Validation/Regex")
const jwt = require("jsonwebtoken")
const uploadFile = require("../aws/s3service")

const createUser = async(req,res)=>{
   try {
     const data = req.body
     const file = req.files
     
   const  {name,phone,email,password,address} = data
   const {street, city, state} = data.address
    if(!name || !phone || !email || !password || !address || !street || !city || !state){
        res.status(400).send({status:false,message:"Please fill all the details"})
    }
    if(!req.files){
      res.status(400).send({status:false,message:"Please upload your image"})
    }
    const profilePic = await uploadFile(file[0])
    data.profileImage = profilePic
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

const loginUser = async(req,res)=>{
  const {email,password} = req.body
  let finduser = await userModel.findOne({email:email})
  if(!finduser){
    res.status(401).send({status:false,message:"Coulnt find user"})
  }
  let token = jwt.sign({userId:finduser._id}, "secret", {expiresIn:"1h"})
}
const forgotPassword = async(req, res)=>{
  const{email} = req.body.email
  const user = await userModel.find({email:email})
  if(!user){
    res.status(400).send({status:false,message:"Email does not exist"})
  }
}



module.exports.createUser = createUser