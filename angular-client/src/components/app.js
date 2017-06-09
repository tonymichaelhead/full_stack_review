// angular.module('blockbusterApp', ['blockbusterApp.services', 'blockbusterApp.controllers'])

angular.module('blockbuster')
  .controller('AppController', function(movies) {
    this.fetchedMovies = false
    this.appTitle = 'Blockbuster'
    this.getAllMovies = () => {
      movies.getMovies()
        .then((result) => {
          this.movies = result
        })
        .then(() => {
          this.fetchedMovies = true
        })
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