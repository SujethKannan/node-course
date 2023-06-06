const express = require('express');
const app = express();        // assigning express as function in the module 'app
app.use(express.json())       // configure to get json 

app.get('/', (request, response) => {
    response.status(200).json({
        "message": "hello world"
    });
})
// '/' - endpoint
app.get('/home', (request, response) => {
    response.status(200).json({
        "message": "welcome to my home"
    });
})
app.get('/shop', (request, response) => {
    response.status(200).json({
        "message": "welcome to my shop"
    });
})

app.post('/shop', (request, response) => {
    const data = request.body;
    response.status(200).json({
        "message": data
    });
})

app.listen(8000, () => {
    console.log('server is running in port:8000');
})
