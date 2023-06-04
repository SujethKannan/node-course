const fs = require('fs');
const file = fs.createReadStream('./file.txt');
file.on('data',(contents)=>{
    console.log(contents.toString());        //using .toString() to convert data from buffered value into sring
})
file.on('end',()=>{
    console.log('No more data to read');
})