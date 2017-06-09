const Movie = require('../../db/models/movieModel')

module.exports = {
  getAllMovies: (req, res) => {
    Movie.findAll({})
      .then((movies) => {
        res.status(200).send(movies)
      })
      .catch((err) => {
        res.send(err)
      })
  },
  addMovie: (req, res) => {
    Movie.create({
      title: req.body.title,
      numberOfCopies: req.body.numberOfCopies,
      IMDBrating: req.body.IMDBrating
    })
    .then(movie => {
      res.status(201).send(movie)
    })
    .catch(err => {
      res.send(404)
    })
  }
}

