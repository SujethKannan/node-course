const http=require('http');
const HOSTNAME='Localhost';
const PORT='20202';
const data = {
    name:'Chris Evans',
    age:'39',
    designation:'senior developer'
}
const server=http.createServer((request,response)=>{
   if(request.method==='GET'){
    response.writeHead(200,{"Content-Type":'application/json'});      
    return response.end(JSON.stringify(data));
   } else{
    response.writeHead(405,{"Content-Type":'application/json'});      
    response.end(JSON.stringify({message:'Only GET Method Is Allowed'}));

   }
})
server.listen(PORT,HOSTNAME,()=>{
    console.log(`server is running >http://${HOSTNAME}:${PORT}`);
 
})