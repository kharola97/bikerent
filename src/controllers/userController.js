const mongoose = require("mongoose")
const userModel = require("../models/userModel")
const {isValidPhone,isValidEmail} = require("../Validation/Regex")
const jwt = require("jsonwebtoken")
const uploadFile = require("../aws/s3service")
const bcrypt = require("bcrypt")

const passwordHashing = async function(password){
  return new Promise((resolve,reject)=>{
    const saltRounds = 10
  bcrypt.hash(password , saltRounds, function(err,hash){
    if(err) return res.status(400).send({status:false, message:"Invalid password"})
    else return resolve(hash)
  })
  })
}

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
      data.password = await passwordHashing(data.password)
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
  console.log(finduser)
  if(!finduser){
    res.status(401).send({status:false,message:"Could not find user"})
  }

  bcrypt.compare(password, finduser.password, function(err,result){
    if(result) {
      let token = jwt.sign({userId:finduser._id}, "secret", {expiresIn:"1h"})
       return res.status(200).send({status:true,data:token})}
    else{
      
      return res.status(400).send({status:false,message:"You have entered an incorrect password"})
  }
  })

}
const forgotPassword = async(req, res)=>{
  const{email} = req.body.email
  const user = await userModel.find({email:email})
  if(!user){
    res.status(400).send({status:false,message:"Email does not exist"})
  }
}



module.exports.createUser = createUser
module.exports.loginUser = loginUser