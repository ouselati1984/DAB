//require mongoose
const mongoose = require('mongoose')
const router = require('../routes/dabs')
//require schema from mongoose
const Schema = mongoose.Schema
//create the user Schema affiliation,,,,,codebanque

const dabSchema=Schema({
    affiliation:{
    type:String,
    required:true
},
nomdab:{
    type:String,
    required:true
},
agence:{
    type:String,
    required:true,
    unique:true
},
etat:{
    type:String,
    required:true,
    
},responsable:{
    type:String,
    required:true,
    
},codebanque:{
    type:String,
    required:true,
    
}

})



module.exports= Dabs=mongoose.model('Dabs',dabSchema)