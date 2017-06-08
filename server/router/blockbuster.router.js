const router = require('express').Router()
const movieController = require('../controllers/movie.controller')
const userController = require('../controllers/user.controller')

router.route('/movies')
  .get(movieController.getAllMovies)
  .post(movieController.addMovie)

router.route('/users')
  .get(userController.getAllUsers)
  .post(userController.addUser)

router.route('/users/:email')
  .get(userController.getUser)

module.exports = router
