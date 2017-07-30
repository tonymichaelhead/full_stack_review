const db = require('../config')

const movieSchema = mongoose.Schema({
    title: String,
    copies: Number,
    rating: Number,
});

let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;



// **other files will need access to information in here**