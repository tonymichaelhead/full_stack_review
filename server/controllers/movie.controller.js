// Pull in your db model
Movie = require('../../db/models/movieModel.js')

module.exports = {
  getAllMovies: (req, res) => {
    Movie.find()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.send(err);
      })
  },
  // addMovie: (req, res) => {
  //   // TODO: FILL ME IN
    
  // }
}

