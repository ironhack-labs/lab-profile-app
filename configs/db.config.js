const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => {
        console.log('connected to mongodb!')
    })
    .catch(err => console.error(err));