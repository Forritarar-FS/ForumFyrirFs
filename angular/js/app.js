var app = angular.module('HomeApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
 $routeProvider
<<<<<<< HEAD
.when('/Home', {
=======
 .when('/Home', {
>>>>>>> 60bafdeaa84601825b49a2d36a5bca66ebc74e40
   controller: 'TopicController',
   templateUrl: 'views/home.html'
 })
 .when('/Home/:id', {
   controller: 'PostController',
   templateUrl: 'views/post.html'
 })
 .when('/Login', {
<<<<<<< HEAD
   controller: 'LoginController',
   templateUrl: 'views/Login.html'
 })
 .when('/outbox/:id', {
   controller: 'EmailController',
   templateUrl: 'views/email.html'
 })
 .when('/register', {
   controller: 'EmailController',
   templateUrl: 'views/register.html'
 })
 .when('/resetpassword', {
   controller: 'EmailController',
   templateUrl: 'views/resetpassword.html'
 })
=======
  controller: 'LoginController',
  templateUrl: 'views/Login.html'
})
.when('/register', {
  controller: 'EmailController',
  templateUrl: 'views/register.html'
})
.when('/resetpassword', {
  controller: 'EmailController',
  templateUrl: 'views/resetpassword.html'
})
.when('/ucp', {
  controller: 'EmailController',
  templateUrl: 'views/ucp.html'
})
>>>>>>> 60bafdeaa84601825b49a2d36a5bca66ebc74e40
 .otherwise({
   redirectTo: '/Home'
 });
}]);
