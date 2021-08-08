let fs = require("fs");

fs.readFile("sample.txt", function(err, data){
// NodeJS will always have err first callback -> convention
// err is always the first param
if(err){
    //show the error -> suppose you dont have permissions, err will then have some error
    console.log(err)
}
console.log(data.toString());
});

console.log('Program Ended');

//output
/*C:\Projects>node non-blocking_3.js
Program Ended
This is a Sample text.*/
//file reading is happening in parallel