//require mongoose
const mongoose = require('mongoose')
const router = require('../routes/users')
//require schema from mongoose
const Schema = mongoose.Schema
//create the user Schema

const userSchema=Schema({
nom:{
    type:String,
    required:true
},
prenom:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    
},idrole:{
    type:String,
    required:true,
    
},codebanque:{
    type:String,
    required:true,
    
}

})



module.exports= Users=mongoose.model('User',userSchema)