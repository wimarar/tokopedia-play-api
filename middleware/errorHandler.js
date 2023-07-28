const errorHandler = (err, req, res, next) => {
    // Log the error (you can customize this based on your logging preference)
    console.error(err.stack);
  
    // Default error status and message
    let status = 500;
    let message = 'Internal Server Error';
  
    // Check for known error types and update the status and message accordingly
    if (err.name === 'ValidationError') {
      // Mongoose validation error
      status = 422;
      message = err.message;
    } else if (err.name === 'CastError') {
      // Mongoose cast error (e.g., invalid ObjectId)
      status = 400;
      message = 'Invalid ID';
    }
    // Add more checks for other known error types as needed
  
    // Send the error response
    res.status(status).json({ error: message });
  };
  
  module.exports = errorHandler;
  