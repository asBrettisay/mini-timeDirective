angular.module('timeApp')
.directive('showTime', function() {
  return {
    restrict: 'E',
    scope: {
      format: '=',
      update: '&',
      newColor: '@'
    },
    template: '<strong><div>The current time is {{time | date: format}}</div><div>GMT time is {{gmtTime | date: format }}</div></strong>',
    link: function(scope, element, attrs) {
      var currentTime = new Date();

      element.css({
        color: scope.newColor
      })

      element.on('mousedown', function() {
        scope.time = new Date();
        scope.gmtTime = new Date(scope.time.toGMTString());
        scope.update();
        scope.$apply();
      })

      scope.time = currentTime;
      scope.gmtTime = new Date(currentTime.toGMTString());
    }
  }
})
