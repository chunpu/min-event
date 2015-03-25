var _ = require('min-util')

var is = _.is

module.exports = Emitter

function Emitter() {
	this.cache = []
	this.hook = {}
}

var proto = Emitter.prototype

proto.on = function(fn) {
	if (is.fn(fn)) {
		var item = {}
		item.handler = fn
		this.cache.push(item)
		return item
	}
}

proto.emit = function(filter, runner) {
	if (is.fn(filter)) {
		_.each(_.filter(this.cache, filter).slice(), runner || basicRunner)
	}
}

proto.once = function(fn) {
	if (is.fn(fn)) {
		var fired
		var me = this
		function wrapper() {
			if (fired) return
			fired = true
			me.off(function(item) {
				return item.handler == wrapper
			})
			fn.apply(this, arguments)
		}
		return me.on(wrapper)
	}
}

proto.off = function(filter) {
	if (is.fn(filter)) {
		var cache = this.cache
		for (var i = cache.length - 1; i >= 0; i--) {
			if (filter(cache[i])) {
				cache.splice(i, 1)
			}
		}
	}
}

function basicRunner(item) {
	item.handler()
}
