min-event
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-event.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-event
[downloads-image]: http://img.shields.io/npm/dm/min-event.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-event
[david-image]: http://img.shields.io/david/chunpu/min-event.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-event


Basic event lib

Installation
---

```sh
npm i min-event
```

Usage
---

```js
var Emitter = require('min-event')

var emitter = new Emitter
```

Basic event lib, if you are confused, see [example/events] just like the node.js style events based on `min-event`

Proto Api
---

#### on

```js
var event = emitter.on(listener)
```

accept one function argument, return a object

```json
{
	handler: listener
}
```

#### off

```js
emitter.off(filter)

// e.g.

emitter.off(function(event) {
	return event.type = 'event-type'
})
```

accept one function argument, remove events filtered by filter


#### emit

```js
emitter.emit(filter, runner)

// e.g.
emiter.emit(function(event) {
	return event.type = 'mytype'
}, function(event) {
	event.handler() // run the handler, it is absent runner
})
```

accept two function arguments, filter events and run events

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-event.svg?style=flat-square
[license-url]: #
