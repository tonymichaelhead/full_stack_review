angular.module('blockbusterApp.controllers', ['blockbusterApp.services'])
.controller('homeController', ['$scope', function($scope) {
  $scope.appTitle = "Blockbuster"
}])
.controller('movieController', ['$scope', '$http', 'factoryfunction', function($scope, $http, factoryfunction) {
  let movies = factoryfunction.getMovies((result) => {
    $scope.movies = result
    console.log(result)
  })
}])
