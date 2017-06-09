// angular.module('blockbusterApp', ['blockbusterApp.services', 'blockbusterApp.controllers'])

angular.module('blockbuster')
  .controller('AppController', function(movies) {
    this.appTitle = 'Blockbuster'
    this.getAllMovies = () => {
      console.log('inside of set movies')
      this.movies = movies.getMovies()
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