angular.module('blockbuster')
  .directive('movieListEntry', function() {
    return {
      scope: {
        movie: '<'
      },
      restrict: 'E',
      controller: function() {
        console.log('inside of movie list entry component')
      },
      controllerAs: 'movieListEntryCtrl',
      bindToController: true,
      templateUrl:'src/templates/movieListEntry.html'
    }
  })