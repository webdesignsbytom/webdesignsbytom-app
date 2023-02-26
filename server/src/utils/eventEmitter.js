const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter {}
const myEmitter = new MyEventEmitter();

module.exports = {
    myEmitter
}