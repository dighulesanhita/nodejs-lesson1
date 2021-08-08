//custom events
// event is triggered ¬ event is emitted
const events = require('events'); // importing events
const { EventEmitter } = require('stream');
let eventEmitter = new events.EventEmitter(); // creating an event emitter object
//defining my own event
// this block will be triggered only when this event is emitted
eventEmitter.on('open_connection', function(){
    console.log('Connection Open');
    eventEmitter.emit('data_received'); // dependency / chain of events - if connection is open only then data recieved can be triggered

    // event is registered on open connection and will be acessible only when connection is open
eventEmitter.on('data_received1', function(){
    console.log("Data Received successfully");
});
/* OUTPUT
C:\Projects>node event-emitter_4.js
Before Emitting event
Connection Open
Program Ended */
});

// event is registered on global scope
eventEmitter.on('data_received1', function(){
    console.log("Data Received successfully");
});

console.log('Before Emitting event');

eventEmitter.emit('open_connection');

// can be emitted here to eventEmitter.emit('data_received');

// event is registered on global scope with param
eventEmitter.on('data_received2', function(data){
    console.log("Data Received successfully " + data);
});
// emit event with param
eventEmitter.emit('data_received2', "Success!");

console.log('Program Ended');
