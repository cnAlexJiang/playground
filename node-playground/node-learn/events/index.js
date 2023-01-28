var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.emit('error', new Error('something bad happened'));

emitter.on('error', function(err) {
    console.error('出错：' + err.message);
  })