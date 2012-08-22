var assert = require("assert")
  , depends = require('../V1.Depends')

describe ('Depends', function(){
	it('has lots of fun', function(){
		assert.equal('Really Fun!', depends.Show())
	})
})