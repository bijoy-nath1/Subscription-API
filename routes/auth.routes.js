import {Router} from 'express'

const Authrouter = Router()
//sign-up
  Authrouter.post('sign-up',(req,res)=>{
    res.send({title:'sign-up'})
})
//sign-in
  Authrouter.post('sign-in',(req,res)=>{
  res.send({title:'sign-in'})
})
//sign-out
  Authrouter.post('sign-out',(req,res)=>{
  res.send({title:'sign-out'})
})
export default Authrouter;