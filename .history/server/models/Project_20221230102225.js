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
        enum:['Not started' , ' In progress' , 'Completed']
      },
        clientId:{
        type: mongoose.Schema.Types.ObjectId,
        
});