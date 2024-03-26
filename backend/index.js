const port = 4000
const express = require("express") //initialize express package
const app = express() //create app instance with express

const mongoose = require("mongoose") //able to us mongodb database
const jwt = require("jsonwebtoken") //able to generate tokens and verify them
const multer = require("multer") //able to create image storage

const path = require("path") //include path of express eerver
const cors = require("cors") //able to provide access to reactproject, ran in a different port

app.use(express.json()); //converts any request from client into json format.
app.use(cors());

//database connection to express server
//add the password and the path where we have the data to our application
mongoose.connect("mongodb+srv://ralao:1234@cluster0.qjiqjvk.mongodb.net/")

//api to check if express app is running
app.get("/", (req, res)=>{
  res.send("Express App is Running")
})

app.listen(port, (error)=>{
  if(!error) {
    console.log("Server Running on Port " + port)
  } else {
    console.log("Error : " + error)
  }
})

//image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb)=>{
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({storage: storage})

//upload endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res)=>{
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  })
})


