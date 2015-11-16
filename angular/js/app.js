var app = angular.module('HomeApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
 $routeProvider
 .when('/Home', {
   controller: 'TopicController',
   templateUrl: 'views/home.html'
 })
 .when('/Home/:id', {
   controller: 'EmailController',
   templateUrl: 'views/email.html'
 })
 .otherwise({
   redirectTo: '/Home'
 });
}]);
