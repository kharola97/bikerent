// const GridFsStorage = require("multer-gridfs-storage");
// const multer = require("multer");
// const mongoose = require("mongoose");

// // Create a GridFS connection
// const connection = mongoose.createConnection("mongodb+srv://ankitdb:ankit321@cluster0.nz06g9j.mongodb.net/bikerent-DB?retryWrites=true&w=majority");

// Initialize GridFS
// let gfs;
// connection.once("open", () => {
//   gfs = Grid(connection.db, mongoose.mongo);
//   gfs.collection("uploads");
// });

// const storage = new GridFsStorage({
//   url: "mongodb+srv://ankitdb:ankit321@cluster0.nz06g9j.mongodb.net/bikerent-DB?retryWrites=true&w=majority", // Replace with your MongoDB connection URL
//   file: (req, file) => {
//     return {
//       filename: file.originalname,
//       bucketName: "uploads",
//     };
//   },
// });

// const upload = multer({ storage });

// module.exports = { gfs, upload };
