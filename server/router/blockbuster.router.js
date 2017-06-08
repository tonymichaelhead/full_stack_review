const router = require('express').Router()
const movieController = require('../controllers/movie.controller')

router.route('/movies')
  .get(movieController.getAllMovies)
  .post(movieController.addMovie)

module.exports = router
