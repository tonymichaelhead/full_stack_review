const router = require('express').Router()
const controller = require('../controllers/movie.controller.js')
router.route('/movies')
  .get((req, res) => {
    console.log('GET GOT');
    controller.getAllMovies(req, res);
  })
  
  .post((req, res) => {
    console.log('POST GOT');
    controller.addMovie(req, res);
  })

// **other files will need access to information in here**
module.exports = router;