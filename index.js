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
	_.each(this.filter(filter), runner || basicRunner)
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
			wrapper = null
			fn.apply(this, arguments)
		}
		return me.on(wrapper)
	}
}

proto.off = function(filter) {
	this.cache = _.difference(this.cache, this.filter(filter))
}

proto.filter = function(filter) {
	return _.filter(this.cache, filter || _.noop)
}

function basicRunner(item) {
	item.handler()
}
