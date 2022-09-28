const mongoose = require('mongoos')
const { trusted } = require('mongoose')
const { stringify } = require('querystring')
const alienschema = new mongoose.schema
({
    name:
    {
        type : string,
        required:true
    },
    tech:
    {
        type:string,
        required : true
    },
    sub:
    {
        type : string,
        required: true
    }
})
module.exports = mongoose.model('alien',alienschema)