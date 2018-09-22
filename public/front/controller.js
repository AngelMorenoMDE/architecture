app.controller('myCtrl', function($scope, $http, $window) {
    $scope.id = 4000;
    $scope.find = function () {
      if ($scope.request === "2") {
        $window.location.href="http://www.google.es";
      }
        $http.get("/?id=" + $scope.request)
              .then(function(response) {
                  $scope.myWelcome = response.data;
                  $scope.result = response.data.id;



                  $scope.$emit('childEvent', response.data);
              });
    }
}).controller('myCtrlChild', function($scope) {
      console.log($scope.result);
      $scope.$on('childEvent', function(event, data){
        $scope.result = data.id;
      });
});
