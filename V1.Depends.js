(function(root, simple){

	root.Show = function(){ return 'Not So ' + simple.Show() }

})
(typeof V1 === 'undefined' ? module.exports : V1.Depends = {}
, typeof V1 === 'undefined' ? require('./V1.Simple') : V1.Uses('V1.Simple'))
