angular.module('blockbuster')
.service('movies', function($http) {
  this.getMovies = function(callback) {
    console.log('inside of get movies')
    $http.get('/api/movies')
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
})
