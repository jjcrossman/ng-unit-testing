describe( "returnOne", () => {
  it( "returns the number 1", () => {
    expect( returnOne() ).to.equal( 1 );
    expect( returnOne() ).to.not.equal( "1" );
  } );
} );

// describe and it are from mocha
// expect is from chai

describe( "flatten", () => {
  it( "flattens multi-dimensional arrays", () => {
    expect( flatten( [ 1, 2, [ 3, 4, 5, 6 ] ] ) ).to.eql( [ 1, 2, 3, 4, 5, 6 ] );
    // expect( flatten( [ [ "a" ] ] ).to.eql( [ "a" ] ) );
    // expect( flatten( [ "a", 2, [ false, undefined ] ] ) ).to.eql( "a")
  } );
} );

// equal method translates as ===, basically.
// [ 1 ] === [ 1 ], returns false because JS doesn't look in to these arrays to make sure they're equal or not, it sees they're two different arrays and thus returns false.


// eql method means "are these the same"
