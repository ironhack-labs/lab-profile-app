require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../models/User');
const { users } = require('./data');

mongoose
  .connect('mongodb://localhost/server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

async function seedDB(collecName, data) {
	const count = await collecName.collection.countDocuments({});

	try {
		if (count !== 0) {
			await collecName.collection.drop();
			console.log('emptied database');
		}

		const celebCollection = await collecName.create(data);

		console.log(`Seed database with ${celebCollection}`);
	} catch (error) {
		console.log(`Something went wrong: ${error}`);
	} finally {
		mongoose.disconnect();

		console.log('Disconnected from database');
	}
}

seedDB(User, users);