const express = require('express');
const router = express.Router();
const userController = require("./src/controllers/userController")

router.post("/user", userController.createUser)









router.all('/*',(req,res)=>res.status(404).send("page not found"));
module.exports = router;