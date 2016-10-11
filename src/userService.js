angular.module( 'ngTests' )

.service( 'userService', function ( $http ) {

  this.http = $http;

  this.getUsers = () => {
    $http.get( "/api/users" );
  };

} );
