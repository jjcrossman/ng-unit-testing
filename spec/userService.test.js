describe( "userService", () => {
  let userService, $httpBackend;

  beforeEach( module( "ngTests" ) );

  beforeEach( inject( function( _userService_, _$httpBackend_ ) {
    userService = _userService_;
    $httpBackend = _$httpBackend_;
  } ) );

  afterEach( () => {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  } );

  describe( "getUsers", () => {
    it( "makes a GET request to /api/users", () => {
      $httpBackend.expectGET( "/api/users" )
        .respond( 200, [ "Taryn", "Dontavious", "Joe" ] );

      userService.getUsers();

      $httpBackend.flush();
    } );


  } );
} );

// afterEach() runs after each test if performed.
// $httpBackend.verifyNoOutstandingRequest(); are we waiting on any requests that didn't come back? Timed out?

// _$httpBackend_ is a fake backend from angular-mocks
