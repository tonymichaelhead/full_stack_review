const Movies = require('../../db/models/movieModel')

module.exports = {
  getAllMovies: (req, res) => {
    Movies.find({}, (err, movies) => {
      if (err) {
        console.log(err)
        res.send(404)
      } else {
        res.status(201).send(movies)
      }
    })
  },
  addMovie: (req, res) => {
    let newMovie = new Movies({
      title: req.body.title,
      numberOfCopies: req.body.numberOfCopies,
      IMDBrating: req.body.IMDBrating
    })
    newMovie.save((err) => {
      if (err) {
        console.log(err)
        res.send(404)
      } else {
        res.status(200).send(req.body)
      }
    })
  }
}

