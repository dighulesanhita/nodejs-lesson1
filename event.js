const fs = require('fs');
 
var file = fs.createReadStream('./sample.txt');
 
file.on('data', (data) => {
 console.log(data.toString());
})
 
file.on('error', (error) => {
 console.error(error);
})
 
file.on('end', () => {
 console.log("File reading is done!");
})
 
console.log("Program is done!");