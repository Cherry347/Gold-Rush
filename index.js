angular.module("firstApp",[])
angular.module("firstApp").controller("controller1", ["$scope", function($scope) {

//part one
    $scope.showMe= true;
    $scope.button = function () {
        $scope.showMe= !$scope.showMe;
    };
    $scope.listGone= true;
    $scope.list= function() {
        $scope.listGone= !$scope.listGone;
    };

//part two
    $scope.pinkyPie=false;
    $scope.pinkpara = function() {
        $scope.pinkyPie=!$scope.pinkyPie;
    };
    $scope.askUser= function() {
        var yesNo= confirm("You are leaving the Mr. Klaws's site, is that ok?");
        if(yesNo === false) {
            event.preventDefault();
            event.target.remove();
        }
    };

//part three
    $scope.noPop= true;
    $scope.popUp= function() {
        $scope.noPop= !$scope.noPop;
    };
}]);
