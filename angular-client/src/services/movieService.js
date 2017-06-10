angular.module('blockbuster')
.service('movieService', function($http) {
  this.getMovies = function() {
    return $http.get('/api/movies')
      .then((result) => {
        return result.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
  this.addMovie = function(data) {
    $http.post('/api/movies', data)
      .then((result) => {
        console.log(result)
      })
      .catch((err)=> {
        console.log(err)
      })

  }
})
