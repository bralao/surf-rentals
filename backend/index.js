const port = 4000
const express = require("express") //initialize express package
const app = express() //create app instance with express

const mongoose = require("mongoose") //able to us mongodb database
const jwt = require("jsonwebtoken") //able to generate tokens and verify them
const multer = require("multer") //able to create image storage

const path = require("path") //include path of express eerver
const cors = require("cors") //able to provide access to reactproject, ran in a different port
const { AsyncLocalStorage } = require("async_hooks")

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

//schema for addproduct
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  thickness: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

})

//addproduct endpoint (post)
app.post('/addproduct', async(req, res)=>{
  let products = await Product.find({});
  let id;
  if(products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const product = new Product ({
    id: id,
    image: req.body.image,
    category: req.body.category,
    brand: req.body.brand,
    model: req.body.model,
    height: req.body.height,
    width: req.body.width,
    thickness: req.body.thickness,
    volume: req.body.volume,
    price: req.body.price,
    description: req.body.description,
    rate: req.body.rate,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: `Product ${req.body.id} Added Successfully`
  })
})

//removeproduct endpoint (post)
app.post('/removeproduct', async(req, res)=>{
  await Product.findOneAndDelete({id: req.body.id});
  console.log("Removed");
  res.json({
    success: true,
    name: `Product ${req.body.id} Removed Successfully`
  })
})

//allproducts endpoint (get)
app.get('/allproducts', async(req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.json(products);
})

//schema for user
const Users = mongoose.model('Users',{ // we create a model for the user
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  }
})

//user signup endpoint
app.post('/signup', async (req, res) => {
  let check = await Users.findOne({email:req.body.email});
  if (check) {
    return res.status(400).json({success: false, errors: "Email already exists"})
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  })

  await user.save();

  const data = {
    user: {
      id: user.id,
    }
  }

  const token = jwt.sign(data, 'secret_ecom')
  res.json({success: true, token})
})
