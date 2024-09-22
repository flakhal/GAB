// const mongoose = require('mongoose');
// require('dotenv').config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection failed', err);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectDB;

require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

// MongoDB connection URI from .env file
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));
