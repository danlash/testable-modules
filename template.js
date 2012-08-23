/*  
Template for creating a module that can be used in browser via V1.Uses
 as well as in mocha tests (node)

To use:
1) pick a good name for your module, lets say V1.MyModule
2) make a file in /web/scripts called V1.MyModule.js 
3) copy this template into the file
4) change the name near the bottom to match the file name
5) use 'require' to load dependencies, do NOT assume V1.SomeDependency exists, require it
6) add public methods to 'exports', that is your interface
7) make a file in /web/scripts/tests called V1.MyModule.js
8) use require to load your module and test it
9) ...
10) profit!

//*/

(function(exports, require){
	var myDependency = require('V1.SomeDependency')

	function privateMethod () {}

	exports.PublicMethod = function(){ privateMethod() }

}).apply(this, 
	typeof V1 === 'undefined' ?
	[ module.exports, function(name) { return require('./' + name) } ]
	:
	[ V1.MyModule = {} , V1.Uses ]
)
