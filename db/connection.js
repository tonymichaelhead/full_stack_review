const Sequelize = require('sequelize')
const dbURL = 'postgres://uthfplqm:dpU3MgFlmbBd0enjNyE9WM08_n5kOkXs@stampy.db.elephantsql.com:5432/uthfplqm'

const db = new Sequelize(dbURL)

db.authenticate()
  .then(console.log('Connected to the database'))
  .catch((err) => {
    console.log('Unable to connect to the database: ', err)
  })

module.exports = db
