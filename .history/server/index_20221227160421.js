const express = require("express");
const colors = require('colors');
const app = express();
require("dotenv").config();
const { graphqlHTTP} = require('express-graphql');
const schema = require ('./schema/schema');
const PORT = process.env.PORT || 6000;



const app = express();
app.use('/graphql',
graphqlHTTP({
    schema,
     graphiql: process.env.NODE_ENV === 'development',
  })
  );
app.listen(PORT,console.log(`Server is running on port http://localhost:${PORT}`));