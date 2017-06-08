const Movie = require('../../db/models/movieModel')

module.exports = {
  getMovies: (req, res) => {
    console.log('inside of movie controller get')
    Movie.findAll({}, (err, movie) => {
      if (err) {
        console.log(err)
      } else {
        console.log('inside of movie controller')
        res.json(movie)
      }
    })
  },
  addMovie: (req, res) => {
    Movie.create({
      title: req.body.title,
      numberOfCopies: req.body.numberOfCopies,
      IMDBrating: req.body.IMDBrating
    }).then((err, movie) => {
      if (err) { console.log(err) }
      res.send(movie)
    })
  }
}

