const express=require('express')
const path=require('path')
const app=express()

app.get('/',function(req,res){
    res.send('Avanthika')
})

app.get('/about',(req,res)=> res.send('about'))

app.listen(3000,function(){
    console.log(__filename)
    console.log('server started')
})