const fs = require('fs');
const path = require('path');
const filepath=path.resolve(__dirname,'hello.txt');
fs.readFile(filepath,'utf-8',(err,data)=>{
    if (err){
        return console.log(err);
    }
    // console.log(data);
    const modifieddata=data.toLowerCase();
    fs.writeFile(filepath,modifieddata,(err)=>{  
        if(err){
            return console.log(err);
        }
        console.log('fileupdated');
        })
})