(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checklunch = function () {
    var num = count($scope.name);
    $scope.message = message(num);
  };

  function count(name) {
    var c = 0;
    if (name) {
      var array = name.split(',');
      for (var idx in array) {
        if (array[idx].trim().length != 0) {
          c++;
        }
      }
    }
    return c;
  }

  function message(num) {
    if (num === 0) {
      return 'Please enter data first';
    }
    else if (num <= 3) {
      return 'Enjoy!';
    }
    else {
      return 'Too much!';
    }
  }
}

})();
