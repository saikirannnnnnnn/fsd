const express = require('express')
const { request } = require('http')
const alien = require('../model/alien')
const alien = require('../model/alien')
const router = express.router()
const alien=require('../models/alien')


router.get('/',async(req,res)=>
{
    try{
        const aliens=await alien.find()
        res.json(aliens)
    }
    catch(err)
    {
        res.send('error'+err)
    }

})
router.get('/:id',async(req,res)=>
{
    try{
        const alien=await alien.findById(request.params.id)
    }
    catch(err)
    {
        res.send('Error')
    }
})
router.patch('/:id',async(req,res)=>
{
    try{
        const alien = await alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err)
    {
        res.send('Error')
    }

})
module.exports = router