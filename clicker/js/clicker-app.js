angular.module("ClickerApp", [])
  .controller("CounterController", function($scope, $interval) {
    var click = 1
    var autoclick = 1;
    $scope.counter = 0;
    $scope.increment = function() {
      $scope.counter = $scope.counter + click;
    }
    $scope.decrement = function() {
      $scope.counter = $scope.counter - 1;
    };
    $scope.autoclick = function() {
      $interval(fn, delay, [count], [invokeApply], [Pass]);
      $scope.counter++;
    $interval.autoclicker($scope.autoclick, 1000);
    };
    $scope.usedthoughtpad = function() {
      click = click + 1;
      $scope.counter = $scope.counter - 15;
    };
  })
