weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || 2;

	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
		callback: 'JSON_CALLBACK'}, { get: {method: 'JSONP'}});

	// It is ok to get my data from another website
	
	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

	$scope.convertToFahrenheit = function(degk){
		return Math.round((1.8 * (degk - 273)) + 32);
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);
	}

	console.log($scope.weatherResult)

}])