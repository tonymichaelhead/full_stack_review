angular.module('blockbuster')
  .controller('AddMovieController', function(movieService) {
    this.movie = {}
    this.submitForm = () => {
      console.log('hi')
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
      templateUrl:'src/templates/movieList.html'
    }
  })
  