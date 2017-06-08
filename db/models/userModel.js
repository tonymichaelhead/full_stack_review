const Sequelize = require('sequelize')
const db = require('../connection')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = User
