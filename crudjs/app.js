const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')   
const url = 'mongodb://localhost/CBIT'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
con.on('open',()=>
{
    console.log('connected...')
})
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000,()=>
{
    console.Console.log('server started')

})