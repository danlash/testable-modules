var assert = require("assert")
  , depends = require('../V1.Depends')

describe ('Simple', function(){
	it('has fun', function(){
		assert.equal('Not So Fun!', depends.Show())
	})
})