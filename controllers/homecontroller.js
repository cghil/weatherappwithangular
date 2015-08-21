weatherApp.controller('homeController', ['$scope', '$log', '$http', 'cityService', function($scope, $log, $http, cityService) {

	$scope.city = cityService.city;

	$http.get('http://ipinfo.io/json')
		.then(function(response){
			$scope.city = response.data.city + ', ' + response.data.region;
		});
	
	$scope.$watch('city', function(){

		cityService.city = $scope.city;
	});

}]);