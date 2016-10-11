spec is short for "expect", yes, really.

Karma is the test runner, it spins up a server and runs the test.
Karma is built to work with Angular.
Mocha gives us the describe and it helper functions.
Chai let's us make assertions: expected return value to equal expected return value.

// KARMA //

Command Line Stuff

karma init karma.conf.js

Answers: mocha, no, Chrome, , src/**.js, spec/**.test.js, , , yes

Go in to karma.conf.js, add chai to frameworks array

Put 'node_modules' in exclude

// TESTING //

Think up weird edge cases to test your functions.

// CDNs //

https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.js

https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-mocks.js

mocks is for mocking an angular framework to test in, so you don't have to load up your entire application to test angular stuff.
