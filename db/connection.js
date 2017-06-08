const Sequelize = require('sequelize')
const { dbURL } = require('../config')

const db = new Sequelize(dbURL)

db.authenticate()
  .then(() => {
    console.log('Connected to the database')
  })
  .catch((err) => {
    console.log('Unable to connect to the database: ', err)
  })

module.exports = db
