const net= require('net');
const HOSTNAME='localhost';
const PORT= 5200;
net.createServer((socket)=>{
    console.log('client connected');
    socket.on("data",(name)=>{
        socket.write(`hello ${name}`);
    })    
}).listen(PORT,HOSTNAME)