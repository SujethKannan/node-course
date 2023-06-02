const { log } = require('console');
const fs = require('fs');
// const file= process.cpuUsage();
const file= process.argv[2];
// console.log(file);
function printmetadata(file){
    try{
    const metadata=fs.statSync(file)
    console.log(metadata);
    }
    catch(error){
        console.log('error inspecting the file',error)
    }

}
printmetadata(file);