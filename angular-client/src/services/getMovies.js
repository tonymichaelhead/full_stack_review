angular.module('blockbuster')
.service('movies', function($http) {
  this.getMovies = function() {
    return $http.get('/api/movies')
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
})
