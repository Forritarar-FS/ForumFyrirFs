app.factory('emails', ['$http', function($http) {
  return $http.get('js/services/cars.html')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
