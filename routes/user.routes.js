import {Router} from 'express'
const userRouter = Router()

// GET users

userRouter.get('/',(req,res)=>{
  res.send({title:'GET users'})
})
//GET specific user
userRouter.get('/:id',(req,res)=>{
  res.send({title:'GET specific user'})
})
//create specific user
userRouter.post('/',(req,res)=>{
  res.send({title:'create new user'})
})
//update specific user 
userRouter.put('/:id',(req,res)=>{
  res.send({title:'update specific user'})
})

// delete a specific user
userRouter.delete('/:id',(req,res)=>{
  res.send({title:'delete specific user'})
})
export default userRouter;