//dependencies
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

//create an instance of our express server
const app = express()

const port = 3000
const db = require('../db/config')

//add middleware
app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, 'localhost', () => {
  console.log('Blockbuster listening on port: ', port)
})
