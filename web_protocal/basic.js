const http=require('http');
const HOSTNAME='Localhost';
const PORT='20202';
const data ={
    name:'Chris Evans',
    age:'39',
    designation:'senior developer'
}
const server=http.createServer((request,response)=>{
     //using 'application/jason' for an object, use 'plain/text' for a string
    response.writeHead(400,{"Content-Type":'application/jason'});      
    response.end(JSON.stringify(data));

})
server.listen(PORT,HOSTNAME,()=>{
    console.log(`server is running >http://${HOSTNAME}:${PORT}`);
 
})