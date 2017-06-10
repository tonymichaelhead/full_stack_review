// angular.module('blockbusterApp', ['blockbusterApp.services', 'blockbusterApp.controllers'])

angular.module('blockbuster')
  .controller('AppController', function(movieService) {
    this.fetchedMovies = false
    this.displayForm = false
    this.appTitle = 'Blockbuster'

    this.getAllMovies = () => {
      movieService.getMovies()
        .then((result) => {
          this.movies = result
        })
        .then(() => {
          this.fetchedMovies = true
          this.displayForm = false
        })
    }
    
    this.displayAddMovieForm = () => {
      this.displayForm = true
      this.fetchedMovies = false
    }

  })
  .directive('app', function() {
    return {
      scope: {},
      restrict: 'E',
      controller: 'AppController',
      controllerAs: 'appCtrl',
      bindToController: true,
      templateUrl:'src/templates/app.html'
    }
  })