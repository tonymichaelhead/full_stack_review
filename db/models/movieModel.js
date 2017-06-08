const Sequelize = require('sequelize')
const db = require('../connection')

const Movie = db.define('movie', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numberOfCopies: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  IMDBrating: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Movie
