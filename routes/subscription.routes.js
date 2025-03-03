import {Router} from 'express'
const subscriptionRouter = Router()

// GET all subscriptions
subscriptionRouter.get('/',(req,res)=>{
  res.send({title:'GET all subscriptions'})
})
//Get subscription by id
subscriptionRouter.get('/:id',(req,res)=>{
  res.send({title:'GET subscription by id'})
})
// create Subscription

subscriptionRouter.post('/',(req,res)=>{
  res.send({title:'create new subscription'})
})
// update Subscription
subscriptionRouter.put('/:id',(req,res)=>{
  res.send({title:'update subscription'})
})
// delete Subscription
subscriptionRouter.delete('/:id',(req,res)=>{
  res.send({title:'delete subscription'})
})

// GET all the subscriptions of a specific user
subscriptionRouter.get('/user/:id',(req,res)=>{
  res.send({title:'GET all subscriptions of a specific user'})
})

// cencel subscription 
subscriptionRouter.put('/:id/cancel',(req,res)=>{
  res.send({title: 'cancel subscription'})
  })
//GET upcoming renewals
subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
  res.send({title:'GET all upcoming renewals'})
})

export default subscriptionRouter