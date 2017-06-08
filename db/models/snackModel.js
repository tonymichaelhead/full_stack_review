const Sequelize = require('sequelize')
const db = require('../connection')

const Snack = db.define('snack', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Snack
