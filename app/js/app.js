angular.module('F1FeederApp' , [
	'F1FeederApp.controllers',
	'F1FeederApp.services',
	'ngRoute'
	]).

config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
		when("/drivers/:id", {templateUrl: "partials/drivers.html", controller: "driversController"}).
		otherwise({redirectTo:'/drivers'});
}]);