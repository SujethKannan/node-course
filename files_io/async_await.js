const fs = require('fs').promises;
const path = require('path');
const filepath=path.resolve(__dirname,'hello.txt');
(async()=>{
    try{
        const contents = await fs.readFile(filepath, { "encoding": "utf8" });
        console.log("File Contents:", contents);
    } catch (error) {
        console.error(error);
    }
})
()
