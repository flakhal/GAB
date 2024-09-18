const mongoose = require('mongoose');

const interventionSchema = new mongoose.Schema({
    atmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Atm",
        required: true,
      },
  type: {
    type: String,
    required: true,
  },
  price: {
    type:Number,
    required:true,
     unique : false
  },
  reprateur: {
    type: String,
    required: true,
  },
  isResolved: {
    type: String,
    required: true,
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


const Intervention = mongoose.model('intervention', interventionSchema);

module.exports = Intervention;