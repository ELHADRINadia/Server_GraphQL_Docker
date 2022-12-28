const express = require("express");
const colors = require('colors');
const cors = require('cors');
const app = express();
require("dotenv").config();
const connectDB = require('./config/db');
const { graphqlHTTP} = require('express-graphql');
const schema = require ('./schema/schema');
const PORT = process.env.PORT || 4000;

// Connect to database
connectDB();

app.use(cors());






app.use('/graphql',
graphqlHTTP({
    schema,
     graphiql: process.env.NODE_ENV === 'development',
  })
  );
app.listen(PORT,console.log(`Server is running on port http://localhost:${PORT}`));