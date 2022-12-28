const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors"); 
const PORT = process.env.PORT || 5000;
const connectDB=require('./config/db')
connectDB()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

app.use("/api/products", require ("./routes/productRoute"));




// listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});