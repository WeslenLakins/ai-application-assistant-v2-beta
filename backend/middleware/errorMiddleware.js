const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };

// Summary
// In this file, we created a middleware function that takes in four parameters: err, req, res, and next. We then set a variable called statusCode to either res.statusCode or 500. We then set the status of the response to statusCode and send a JSON object with a message and stack properties. If the environment is in production, we set the stack property to null. Finally, we export the errorHandler function.
