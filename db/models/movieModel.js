const Sequelize = require('sequelize')
const db = require('../config')

const Movie = db.define('movies', {
  title: Sequelize.STRING,
  numberOfCopies: Sequelize.INTEGER,
  IMDBrating: Sequelize.INTEGER,
})

Movie.sync()

module.exports = Movie
