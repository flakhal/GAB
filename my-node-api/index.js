const express = require('express');
const cors = require('cors');
const bodyParser =require("body-parser");
const dotenv = require('dotenv');
// const connectDB = require('./server/config/db'); // MongoDB connection setup
const authRoutes = require('./server/routes/auth');
const MongoStore =require('connect-mongo');
const helmet = require('helmet');
const path=require('path');

// Load environment variables
dotenv.config();

// Connect to MongoDB
// connectDB();

// Import the database connection
require('./server/config/db'); // Adjust the path as necessary


// Initialize express app
const app = express();

// Enable CORS

/** */
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// Register the bureau routes
app.use('/api', authRoutes);
app.use('/api', require('./server/routes/bureau')); 
app.use('/api', require('./server/routes/atm')); 
app.use('/api', require('./server/routes/intervention'));  // This matches the fetch URL

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});