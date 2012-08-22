(function(root, require){
	var simple = require('V1.Simple')

	root.Show = function(){ return 'Not So ' + simple.Show() }

}).apply(this, 
	typeof V1 === 'undefined' ?
	[ module.exports, function(name) { return require('./' + name) } ]
	:
	[ V1.Depends = {} , V1.Uses ]
)
