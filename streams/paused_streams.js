const fs = require('fs');
const file = fs.createReadStream('./file.txt');
file.on('data',(contents)=>{
    console.log("READ CHUNK:::",contents.toString());   //using .toString() to convert data from buffered value into sring
    file.pause();  
    setTimeout(()=>{
        console.log('Resuming Stream');
        file.resume();
    },10000)
})
file.on('end',()=>{
    console.log("No more data to read");
})