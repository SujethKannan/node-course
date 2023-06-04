const fs = require('fs');
const file = fs.createReadStream('./file.txt');
file.on('data',(contents)=>{
    console.log("READ CHUNK:::",contents.toString());   //using .toString() to convert data from buffered value into sring
    file.pause();  
    setTimeout(()=>{
        console.log('Resming Stream');
        file.resume();
    },10000)
})