angular.module('blockbusterApp.services', [])
.factory('factoryfunction', function($http) {
  let factory = {}

  factory.getMovies = function(callback) {
    $http.get('/api/movies')
      .then((result) => {
        callback(result.data)
      })
  }

  return factory
})
