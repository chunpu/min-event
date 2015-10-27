var _ = require('min-util')
var Emitter = require('./basic')

module.exports = Event

var key = 'emitter'

function Event() {
	if (!(this instanceof Event)) return new Event
	this[key] = new Emitter
}

var proto = Event.prototype

proto.on = function(type, fn) {
	return this[key].on(type, fn)
}

proto.once = function(type, fn) {
	return this[key].once(type, fn)
}

proto.emit = function(type) {
	return this[key].emit(type)
}

proto.off = function(type, fn) {
	return this[key].off(type, function(item) {
		return item.handler == fn
	})
}
