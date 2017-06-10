angular.module('blockbuster')
  .controller('AddMovieController', function(movieService) {
    this.movie = {}
    this.submitForm = (data) => {
      movieService.addMovie(data)
    }
  })
  .directive('addMovieForm', function() {
    return {
      scope: {
        
      },
      restrict: 'E',
      controller: 'AddMovieController',
      controllerAs: 'addMovieCtrl',
      bindToController: true,
      templateUrl:'src/templates/addMovieForm.html'
    }
  })
  