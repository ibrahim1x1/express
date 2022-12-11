const express = require('express')

const app = express() 

const port = 5000

const MiddleWare=(req,res,next)=>{
    let date = new Date();
    let houre = date.getHours();
    let day = date.getDay();
    if (houre<9 || houre >17 || day>5 || day == 0) {
       return res.sendFile(__dirname+'/public/error.html')
    }
        return next() 
    

}

app.get('/Home',(req,res)=>{
    res.sendFile(__dirname+'/public/Home.html')
})

app.get('/Contact',MiddleWare,(req,res)=>{
    res.sendFile(__dirname+'/public/contactUs.html')
})

app.get('/Service',(req,res)=>{
    res.sendFile(__dirname+'/public/OurService.html')
})


app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/public/style.css')
})


app.listen(port,console.log(`Server is running on the port ${port}`))