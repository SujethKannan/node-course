const net= require('net');
const HOSTNAME='localhost';
const PORT= 5200;
const socket=net.connect(PORT,HOSTNAME);
socket.write('sujeth')
socket.on('data',(data)=>{
    console.log(data.toString())
})