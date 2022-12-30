const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
      description:{
        type: String,
        required: true
      },
      status:{
        type: String,
        enum:["i'm started , i'm progrese , i'm "]
      }
})