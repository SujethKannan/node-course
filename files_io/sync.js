const fs = require('fs');
const path = require('path');
const filepath=path.resolve(__dirname,'hello.txt');
// console.log(pathh.resolve(__dirname,'hello.txt'));
const content= fs.readFileSync(filepath,'utf-8');            // Read the contents of the file synchronously
const modifiedcontent=content.toUpperCase();                // Convert the contents to uppercase
 fs.writeFileSync(filepath,modifiedcontent,'utf-8');        // Write the updated contents back to the file synchronously

console.log(modifiedcontent);