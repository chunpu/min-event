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
