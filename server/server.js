const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = 3000
const db = require('../db/config')
const blockbusterRouter = require('./router/blockbuster.router')

//create an instance of our express server
const app = express()

// depending on which front end framework you're using, 
// comment out the one you're not using
// app.use(express.static('react-client'))
app.use(express.static('angular-client'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(morgan('dev'))
  .use('/api', blockbusterRouter)

app.listen(port, 'localhost', () => {
  console.log('Blockbuster listening on port: ', port)
})
