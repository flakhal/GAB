const mongoose = require('mongoose');

const interventionSchema = new mongoose.Schema({
  atmId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Atm',
    required: true,
  },
  type: {
    type: String,
    required: true,
  },date:{
    type:Date,
    required:true,


  },
  price: {
    type:String,
  
     unique : false
  },
  reprateur: {
    type: String,
   
  },
  isResolved: {
    type: String,
   
  },
  files: {
    type: [ 
      {
       
        fileName: String,
        fileOriginalName: String,
      },
    ],
  }

});


const Intervention = mongoose.model('Intervention', interventionSchema,'interventions');

module.exports = Intervention;