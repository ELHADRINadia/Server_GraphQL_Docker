const express = require("express");
const app = express();
require("dotenv").config();
const { graphQlHTTP} = require('express-graphql');
const schema = require ('./schema/schema');
// const cors = require("cors"); 
const PORT = process.env.PORT || 6000;
// const connectDB=require('./config/db')
// connectDB()
app.use('/graphql',graphQlHTTP({
    schema,
     graphql: process.env.NODE_ENV
}))

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
// app.use(cors());

// app.use("/api/products", require ("./routes/productRoute"));




// listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});