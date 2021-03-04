const express = require('express');
const app = express();

// middleware configurations
require('./config/middleware.config')(app);

// mongodb
require('./config/db.config')();

const auth = require('./routes/auth.routes.js');
app.use('/', auth);

app.listen(4000, () => console.log('server running!'));
