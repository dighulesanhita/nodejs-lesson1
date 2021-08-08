// synchronous working of JS while working with FS
// example of blocking I/O request
// file system -> fs
let fs = require("fs"); // importing file system
// import -> require is used coz nodeJS had the importing well before ES2015
let data = fs.readFileSync("sample.txt"); // reads file synchronously

// blocking -> the program is blocked at this point

// will be printed first
console.log(data.toString());

//will be printed last
console.log("Program Ended");