
import express from 'express';
const app = express()
app.get('/',(req,res)=>{
  res.send(body:'hello world')
})
app.listen(3000,()=>{
  console.log('server started at localhost:3000')
})