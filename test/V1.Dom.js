var assert = require("assert")
  , dom = require('../V1.Dom')

describe ('Dom', function(){
	it('adds to inner text', function(){
		var el = { innerText: 'Its '}
		dom.Show(el, 0)
		assert.equal('Its Really Fun!!!', el.innerText)
	})
})