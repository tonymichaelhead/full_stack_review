const db = require('../config')
const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title: String,
    copies: String,
    rating: String,
});

let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

// **other files will need access to information in here**