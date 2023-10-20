const express = require('express');
const router = express.Router();
const userController = require("./src/controllers/userController")
const bikeController = require("./src/controllers/bikeController")
const ownerController = require("./src/controllers/bikeOwner")


router.post("/bike", bikeController.bikeDetails)
router.post("/user", userController.createUser)
router.post("/login", userController.loginUser)
router.post("/owner", ownerController.ownerData)
router.put("/owner/addbike", ownerController.addBike)
router.delete("/owner/bikes", ownerController.deleteBike)
router.get("/getbikes", bikeController.getBike)
router.put("/bookbike/:userId/bike/:bikeId", bikeController.bookBike)















router.all('/*',(req,res)=>res.status(404).send("page not found"));
module.exports = router;