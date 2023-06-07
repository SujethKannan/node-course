const express = require('express');
const app = express();        // assigning express as function in the module 'app'
const router=express.Router(); //method to create a router object that can be used to define API endpoints
app.use(express.json());       // configure to get json 
app.use('/api',router);               // configure to get router

router.get('/', (request, response) => {
    response.json({"message": "hello world"});
})

var array=[
    {id:111,name:'sujeth'},
    {id:112,name:'sujeth1'},
    {id:113,name:'sujeth2'}
]
router.get('/array',(req,res)=>{
    res.status(200).json({items:array});    // responded total elements in array of object using GET method
})
router.get('/array/:id',(req,res)=>{
    const id =req.params.id;                 
    const items =[...array].find(e=>{
         if(e.id == id){
           return e
    }
})
    res.status(200).json(items);              // responded one elements in array of object using GET method
})
router.post('/array',(req,res)=>{
    const body=req.body;
    array.push(body);
    res.status(201).json({message:'element added succesfully'});

})
router.put('/array/:id',(req,res)=>{
    const id =req.params.id;                 
    const body =req.body;
    [...array].find(e=>{
         if(e.id == id){
            e.name=body.name;
    }
})
    res.status(200).json({message:'element updated succesfully'});  
})
router.delete('/array/:id',(req,res)=>{
    const id =req.params.id;
    array=[...array].filter(e=>{
         return e.id != id
})
    res.status(200).json({message:'element deleted succesfully'});  
})


app.listen(8000, () => {
    console.log('server is running in port:8000');
})
// const nums=[1,2,3]
// console.log(nums)
// nums.push(10)
// nums.unshift(10)
// nums.pop()
// console.log(nums)
