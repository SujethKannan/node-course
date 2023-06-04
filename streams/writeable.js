const fs = require('fs');
const file = fs.createWriteStream('./file.txt');    // ./=curent directory
for(i=0;i<5000;i++){
    file.write("Node.js is a javascript runtime engine runs on google chrome's V8 Javascript engine.\n");
}