const fs=require('fs');
const rs=fs.createReadStream('./file.txt');
const ws=fs.createWriteStream('./pipe.txt');
rs.pipe(ws);    // pipe - puts rs data into ws