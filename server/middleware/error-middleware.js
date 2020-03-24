const Sentry = require("@sentry/node");

Sentry.init({ dsn: process.env.SENTRY_DSN });

const error = (err, req, res, next) => {
  console.error("ERROR", req.method, req.path, err);

  // Sentry.captureException(err);

  if (!res.headersSent) {
    res.status(500);
  }
};

const notFound = (req, res, next) => {
  res.status(404);
};

module.exports = {
  error,
  notFound
};
