var app = angular.module('TravisApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'TypeView', 'appCtrl', 'scrollDirective', 'duScroll', 'ngParallax']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/public/views/home.html',
    controller: 'HomeCtrl'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');
}]);