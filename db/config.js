//TODO: set up your database configuration and connection here

const mongoose = require('mongoose');
// ** remember to hide your db config information!
const config = require('../config') 

// **other files will need access to information in here**
mongoose.connect('mongodb://localhost/movies');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    'yeaaaaah buddy DB is connect'
});
 