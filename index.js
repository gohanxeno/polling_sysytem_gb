
require('./configs/mongoose');
const express=require('express');
const PORT=5000;
const app=express();

//Read  json format
app.use(express.json());


//Routes
app.use('/',require('./routes/index'));

//Listen App on Port 
app.listen(PORT,()=>{
    console.log(`link is ready:  http://localhost:${PORT}`)
})