const express = require('express');
const router = express.Router();
const userController = require("./src/controllers/userController")
const bikeController = require("./src/controllers/bikeController")
const ownerController = require("./src/controllers/bikeOwner")



router.post("/bike", bikeController.bikeDetails)
router.post("/user", userController.createUser)
router.post("/owner", ownerController.ownerData)
router.put("/owner/addbike", ownerController.addBike)
router.delete("/owner/bikes", ownerController.deleteBike)
router.get("/getbikes", bikeController.getBike)
router.put("/bookbike/:userId/bike/:bikeId", bikeController.bookBike)



// router.post('/upload', upload.single('file'), (req, res) => {
//     // You can access the uploaded file information via 'req.file'
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }
  
//     // Additional code to process the uploaded file
//     res.status(200).json({ message: 'File uploaded successfully' });
//   });










router.all('/*',(req,res)=>res.status(404).send("page not found"));
module.exports = router;