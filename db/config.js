//TODO: set up your database configuration and connection here
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', { useMongoClient: true });
// ** remember to hide your db config information!


// **other files will need access to information in here**

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    'yeaaaaah buddy DB is connect'
});
console.log('wahooo')
 
//after making the db connection export it
module.exports = db;