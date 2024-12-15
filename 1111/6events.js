// Importing events
const EventEmitter = require('events');
var eventEmitter = new EventEmitter();
eventEmitter.on('myEvent', (msg) => {
   console.log(msg);
}); 
eventEmitter.emit('myEvent', "First event");
eventEmitter.emit('myEvent', "Second event");
console.log("program ended...")