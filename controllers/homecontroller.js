weatherApp.controller('homeController', ['$scope', '$log', 'cityService', function($scope, $log, cityService) {

	$scope.city = cityService.city;
	
	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});

}]);