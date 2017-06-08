const router = require('express').Router()
const movieController = require('../controllers/movie.controller')

router.route('/users')
  .get(movieController.getMovies)
  .post(movieController.addMovie)

module.exports = router
