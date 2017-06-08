const mongoose = require('mongoose')
const config = require('../config')

console.log(config.mURI)

mongoose.connect(config.mURI, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connected to the blockbuster database')
  }
})

const db = mongoose.connection

module.exports = db;
