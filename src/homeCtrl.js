angular.module( 'ngTests' )

.controller( 'homeCtrl', function ( $scope ) {
  this.scope = $scope;

  $scope.setUser = user => {
    $scope.user = user;
  }

} );

// this.scope = $scope; is needed for unit testing
