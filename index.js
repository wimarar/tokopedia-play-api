// index.js

// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

// Create Express app
const app = express();

// Middleware to parse JSON data in the request body
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import and use the errorHandler middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Import and use the routes
const commentRoutes = require('./routes/commentList');
const productRoutes = require('./routes/product');
const videoRoutes = require('./routes/videos');

app.use('/api', commentRoutes);
app.use('/api', productRoutes);
app.use('/api', videoRoutes);

// Start the server
const port = config.port || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
