angular.module('blockbuster')
  .directive('movieList', function() {
    return {
      scope: {
        movies: '<'
      },
      restrict: 'E',
      controller: function() {
        console.log('inside of movie list component')
      },
      controllerAs: 'movieListCtrl',
      bindToController: true,
      templateUrl:'src/templates/movieList.html'
    }
  })