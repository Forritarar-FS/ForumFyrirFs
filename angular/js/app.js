var app = angular.module('HomeApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
 $routeProvider
 .when('/Home', {
   controller: 'TopicController',
   templateUrl: 'views/home.html'
 })
 .when('/Home/:id', {
   controller: 'PostController',
   templateUrl: 'views/post.html'
 })
 .otherwise({
   redirectTo: '/Home'
 });
}]);
