const express = require("express");
const colors = require('colors');
const app = express();
require("dotenv").config();
const { graphQlHTTP} = require('express-graphql');
const schema = require ('./schema/schema');
const PORT = process.env.PORT || 6000;
app.use('/graphql',
graphQlHTTP({
    schema,
     graphiql: process.env.NODE_ENV === 'development',
  })
  );
app.listen(PORT,console.log(`Server is running on port http://localhost:${PORT}`));