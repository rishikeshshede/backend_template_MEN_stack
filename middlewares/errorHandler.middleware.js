function errorHandler(err, req, res, next) {
  console.error(err.stack);

  if (!err.status) {
    err.status = 500;
  }

  res.status(err.status);
  res.json({
    error: {
      message: err.message || "Internal Server Error".concat(err),
    },
    success: false,
  });
}

module.exports = errorHandler;
