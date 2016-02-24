angular.module('timeApp')
.controller('mainCtrl', function($scope) {
  $scope.name = 'Brett'
  $scope.format = "medium";

  $scope.updateFormat = function() {
    if ($scope.format === 'medium') {
      $scope.format = 'short'
    } else {
      $scope.format = 'medium'
    }
  }
});
