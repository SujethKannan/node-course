const http=require('http');
const HOSTNAME='Localhost';
const PORT='2020';
const data = {
    name:'Chris Evans',
    age:'39',
    designation:'senior developer'
}
const server=http.createServer((request,response)=>{
   if (request.method==='GET'){
    response.writeHead(200,{"Content-Type":"application/json"});      
    return response.end(JSON.stringify(data));
   } else if (request.method === 'POST') {
    let body = "";
    request.on("data",(data)=>{
        body += data.toString();
    })
    request.on("end",()=>{
        response.writeHead(201, {"Content-Type":"application/json"});      
        response.end(JSON.stringify({data:JSON.parse(body)}));
    })

   }else {
    response.writeHead(405,{"Content-Type":'application/json'});      
    response.end(JSON.stringify({message:'Only GET and POST Method Is Allowed'}));

   }
})
server.listen(PORT,HOSTNAME,()=>{
    console.log(`server is running >http://${HOSTNAME}:${PORT}`);
 
})
// console.log(JSON.stringify(data))