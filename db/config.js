const Sequelize = require('sequelize')
const config = require('../config')

const db = new Sequelize(config.dbURL)

db.authenticate()
  .then(() => {
    console.log('Successfully connected to the blockbuster database')
  })
  .catch((err) => {
    console.log('Error connecting: ', err)
  })

module.exports = db
