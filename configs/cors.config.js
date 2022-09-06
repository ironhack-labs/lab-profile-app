const createError = require('http-errors');
const cors = require('cors');

const allowedOrigins = process.env.CORS_ORIGINS || [
  "http://localhost:3000"
]

module.exports = cors({
  origin: (origin, next) => {
    const allowed = !origin || allowedOrigins.indexOf(origin) !== -1;
    if (allowed) {
      next(null, allowed);
    } else {
      next(createError(401, 'Not allowed by CORS'));
    }
  },
  credentials: true
});