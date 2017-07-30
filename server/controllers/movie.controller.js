// Pull in your db model
Movie = require('../../db/models/movieModel.js')

module.exports = {
  getAllMovies: (req, res) => {
    Movie.find()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.send(err);
      })
  },
  addMovie: (req, res) => {
    let newMovie = new Movie({
        title: req.body.title,
        copies: req.body.copies,
        rating: req.body.rating,
    })
    newMovie.save((err, newMovie) => {
      if(err) return console.error(err);
      console.log(`saved ${newMovie.title}`);
    })
    .then(result => {
      res.status(201).send(result);
    })
  }
}

