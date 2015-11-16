app.controller('EmailController', ['$scope', 'directory', '$routeParams', function($scope, directory, $routeParams) {
  directory.success(function(data) {
    $scope.email = data[$routeParams.id];
  });
}]);
