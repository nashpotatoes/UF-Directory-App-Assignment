angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
		$scope.name = "";
		$scope.code="";
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
      display listing
     */
    $scope.addListings =function(){
      $scope.listings.push({
				code: $scope.code,
				name: $scope.name,
        address: $scope.address
			});

      $scope.code = "";
      $scope.name = "";
      $scope.address = "";
    };
    $scope.showDetails = function(index){
     $scope.details = index;
    };
    $scope.deleteListing = function (index) {
      var index = $scope.listings.indexOf(index);
      $scope.listings.splice(index, 1);

		};
}]);
