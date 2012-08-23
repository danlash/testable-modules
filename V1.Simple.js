(function(exports, require){

	exports.Show = function(){ return 'Fun!' }

}).apply(this, 
	typeof V1 === 'undefined' ?
	[ module.exports, function(name) { return require('./' + name) } ]
	:
	[ V1.Simple = {} , V1.Uses ]
)