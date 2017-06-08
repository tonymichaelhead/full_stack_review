const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  numberOfCopies: Number,
  IMDBrating: Number,
  imageUrl: String
})

const Movies = mongoose.model('Movie', movieSchema)

module.exports = Movies;
