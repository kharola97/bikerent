const express = require('express');
const router = express.Router();
const userController = require("./src/controllers/userController")
const bikeController = require("./src/controllers/bikeController")
const owner = require("./src/controllers/bikeOwner")
router.post("/user", userController.createUser)
router.post("/bike",  bikeController.bikeDetails)
router.post("/owner", owner.ownerData)









router.all('/*',(req,res)=>res.status(404).send("page not found"));
module.exports = router;