const Users = require('../../db/models/userModel')

module.exports = {
  getAllUsers: (req, res) => {
    Users.find({}, (err, user) => {
      if (err) {
        console.log(err)
      } else {
        res.status(200).send(user)
      }
    })
  },
  getUser: (req, res) => {
    console.log(req.params.email)
    Users.findOne({ 
      email: req.params.email,
    }, (err, user) => {
      if (err) {
        console.log(err)
      } else {
        res.status(200).send(user)
      }
    })
  },
  addUser: (req, res) => {
    let newUser = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      age: req.body.age
    })
    newUser.save((err) => {
      if (err) {
        console.log(err)
      } else {
        res.status(201).send(req.body)
      }
    })
  }
}