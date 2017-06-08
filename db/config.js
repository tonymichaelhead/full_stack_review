const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.mURI, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connected to the blockbuster database')
  }
})

const db = mongoose.connection

module.exports = db;
