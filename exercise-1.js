/*
write a file with some text inside
after successfully writing a file, emit custom event 'FILE_WRITING_OVER'
then start to read the file asynchronously
after reading successfully, emit 'FILE_READ'
and within FILE_READ, display the content
*/

const fs = require('fs');
const events = require('events');
const { EventEmitter } = require('stream');
let eventEmitter = new events.EventEmitter();

let content = 'This is my first exercise.';
let myfile = 'first-exercise.txt';

// event handlers
eventEmitter.on('FILE_WRITING_OVER', function () {
    console.log('File written sucessfully');
    //after reading successfully, emit 'FILE_READ'
    eventEmitter.emit('FILE_READ');
});
eventEmitter.on('FILE_READ', function (err, data) {
    console.log('File read sucessfully');
    //then start to read the file asynchronously
    fs.readFile(myfile, function (err, data) {
        if (err) {
            console.log(err)
        }
        //and within FILE_READ, display the content
        console.log(data.toString());
    });
});


//write a file with some text inside
fs.writeFile(myfile, content, function (err) {
    if (err) {
        return console.log(err)
    }
    //after successfully writing a file, emit custom event 'FILE_WRITING_OVER'
    eventEmitter.emit('FILE_WRITING_OVER');
});


