const fs = require('fs');

let content = 'My file writing example.';

fs.writeFile('example.txt', content, function(err){
    // function has only err as param coz after writing data it wont give you the data
    if(err){
        return console.log(err)
    }

    console.log('File written successfully');

    console.log('Program Ended');
});