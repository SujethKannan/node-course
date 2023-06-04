const {createReadStream,createWriteStream} = require('fs');
const {Transform}=require('stream');              // importn class {Transform} in module ('stream')
const rs=createReadStream('./file.txt');  // ./=curent directory
const ws=createWriteStream('./transform.txt');

// ES5 SYNTAX
// const uppercase =new Transform({
//     transform(chunk,encoding,callback){
//         callback(null,chunk.toString().toUpperCase())  //using .toString() to convert data from buffered value into sring
//     }
// })
// rs.pipe(uppercase).pipe(ws)

// ES6 SYNTAX
class UpperCaseTransform extends Transform{                     //inherits childclass from baseclass
    constructor(){
    super();
    }

    _transform(chunk,encoding,callback){                           // _ indicates baseclass
        const modifieddata=chunk.toString().toUpperCase();
        this.push(modifieddata);
        callback();
    }

}
const obj=new UpperCaseTransform();
rs.pipe(obj).pipe(ws);