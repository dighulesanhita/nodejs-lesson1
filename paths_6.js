const path = require('path');

const filename = __filename; // prints the filename with directory
console.log(filename);

const extension = path.extname(filename); // gives you the file extension with dot prefix
console.log(extension);

const basename = path.basename(filename); // check if such filename is present or not
console.log(basename);