const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  email: Number,
  phoneNumber: Number,
  age: Number
})

const Users = mongoose.model('User', userSchema)

module.exports = Users;

