const fs = require('fs');
const path = require('path');
const filepath=path.resolve(__dirname,'async_await.js');
const metadata= fs.statSync(filepath);
console.log(metadata);