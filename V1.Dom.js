(function(exports, require){
	var depends = require('V1.Depends')

	exports.Show = function(el, seconds){ 
		el.innerText = el.innerText + depends.Show() + "!!";
	}

}).apply(this, 
	typeof V1 === 'undefined' ?
	[ module.exports, function(name) { return require('./' + name) } ]
	:
	[ V1.Dom = {} , V1.Uses ]
)
