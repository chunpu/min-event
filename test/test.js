var assert = require('assert')
var Emitter = require('../')

describe('basic', function() {
	it('should on & emit', function(done) {
		var emitter = new Emitter
		var arr = []
		function returnTrue() {
			return true
		}
		var i = 1

		emitter.on(function(e) {
			arr.push(i++)
		})
		emitter.emit(returnTrue)
		emitter.emit(returnTrue)
		emitter.emit(returnTrue)
		assert.deepEqual([1, 2, 3], arr)
		setTimeout(function() {
			assert.deepEqual([1, 2, 3], arr)
			done()
		}, 10)
	})
})
