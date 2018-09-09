angular.module("ClickerApp", [])
    .controller("CounterController", function($scope) {
        $scope.counter = 0;
        $scope.decrement = function() {
            $scope.counter--;
        };
})

    .controller('AutoClick', function($scope, $timeout) {
        var timer;
        $scope.counter = 0;
        $scope.stopCounter = function() {
            $timeout.cancel(timer);
        };
        var updateCounter = function() {
            $scope.counter++;
            timer = $timeout(updateCounter, 1000);
        };
        updateCounter();
    });

    angular.module('App', ['ui.bootstrap'])
.controller('MainCtrl', function($scope, $interval) {
  $scope.version = angular.version.full;
  // The main controller maintains the current time for all stopwatch instances.
  $scope.sharedTime = new Date();
  $interval(function() {
    $scope.sharedTime = new Date();
  }, 500);
})
.directive('stopwatch', function() { return {
  restrict: 'AE',
  templateUrl: 'stopwatch.html',
  scope: {
    // Set title in the isolate scope from the title attribute on the directive's element.
    title: '@title',
    // Set up a bi-directional binding between currentTime on the local scope and the parent
    // scope's variable containing the current time that's the value of the time attribute.
    currentTime: '=time'
  },

  link: function(scope, element, attrs, ctrl) {
  },

  controllerAs: 'swctrl',
  controller: function($scope, $interval) {
    console.log("Creating the directive's controller");
    var self = this;
    var totalElapsedMs = 0;
    var elapsedMs = 0;
    //var time;
    var startTime;
    var timerPromise;

    self.start = function() {
      if (!timerPromise) {
        startTime = new Date();
        timerPromise = $interval(function() {
          var now = new Date();
          //$scope.time = now;
          elapsedMs = now.getTime() - startTime.getTime();
        }, 31);
      }
    };

    self.stop = function() {
      if (timerPromise) {
        $interval.cancel(timerPromise);
        timerPromise = undefined;
        totalElapsedMs += elapsedMs;
        elapsedMs = 0;
      }
    };

    self.reset = function() {
      startTime = new Date();
      totalElapsedMs = elapsedMs = 0;
    };

    self.getTime = function() {
      return time;
    };

    self.getElapsedMs = function() {
      return totalElapsedMs + elapsedMs;
    };
  }
}});
