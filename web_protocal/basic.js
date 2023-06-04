const http=require('http');
const HOSTNAME='Localhost';
const PORT='20202';
const data ={
    name:'Chris Evans',
    age:'39',
    designation:'senior developer'
}
const server=http.createServer((request,response)=>{
    response.writeHead(200,{"Content_Type":'JASON'});
    response.end(JSON.stringify(data));

})
server.listen(PORT,HOSTNAME,()=>{
    console.log(`server is running >http://${HOSTNAME}:${PORT}`)
 
})