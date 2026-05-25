const { logger } = require("./winston-logger");

function errorHandler(err, req, res, next) {
  logger.error(err.stack || err.toString());
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error"
  });
}

module.exports = errorHandler;
