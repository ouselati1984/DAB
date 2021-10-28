//require mongoose
const mongoose = require('mongoose')
const router = require('../routes/banques')
//require schema from mongoose
const Schema = mongoose.Schema


const banqueSchema=Schema({
    codebanque:{
    type:String,
    required:true,
    unique:true
},
abreviation:{
    type:String,
    required:true,
    unique:true
},
description:{
    type:String,
    required:true,
    unique:true
}

})



module.exports= Banques=mongoose.model('Banques',banqueSchema)