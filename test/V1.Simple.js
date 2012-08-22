var assert = require("assert")
  , simple = require('../V1.Simple')

describe ('Simple', function(){
	it('has fun', function(){
		assert.equal('Fun!', simple.Show())
	})
})