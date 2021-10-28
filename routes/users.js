const express=require('express')
const { model } = require('mongoose')
const router=express.Router()
let User=require('../Models/Users')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const isAuth = require('../middlewares/isAuth')
//Route http://localhost:5000/api/auth/register
//@role register
//public
router.get('/test',(req,res)=>{
    res.send('goooooooood')
})
router.post('/register',async(req,res)=>{
    const{nom,prenom,email,password,idrole,codebanque}=req.body
    try {

        //verifier si l'utilisateur exist déja

        let user= await User.findOne({email})
        if (user) {return res.json({msg:`Email exist déja`})}
//cryptage mot de passe
const passcrypt= await bcrypt.hash(password,7)
//creation Utilisateur
user=new User({nom,prenom,email,password:passcrypt,idrole,codebanque})
//Sauvegarder Utilisateur
await user.save()
//connexion Utilisateur
const token=jwt.sign({id:user._id},process.env.PASS_TOKEN,{expiresIn:'1 day'})
res.status(202).json({msg:`Utilisateur Ajouté Avec Succes`,user,token})

    }catch(error){
        res.status(500).json({msg:error.message})
    }
})
//Route http://localhost:5000/api/auth/login
//@role login
//public


router.post('/login',async(req,res) =>{
    const {email,password}= req.body
    try {
        
        //verification si l'utilisateur exist
        let user = await User.findOne({email});
        if (!user) return res.json({msg:"Parametre de connexion incorrect"})
       
        //verification mot de passe
        
        const validPw = await bcrypt.compare(password,user.password) 
if (!validPw) return res.status(400).json({msg:"Bad Params"})

//connexion Utilisateur
const token =jwt.sign({id: user._id},process.env.PASS_TOKEN, { expiresIn: "7 days",})
        
        res.status(202).json({msg:"Succes de connexion",user,token})
    }catch(error){
        res.status(500).json({msg:error.message})
    }
    
})
//Route http://localhost:5000/api/auth/user
//@role Get User
//Private

router.get("/user",isAuth,(req,res)=>{
    res.status(200).json({msg:'Bienvenue'})
})
//Route http://localhost:5000/api/auth/all
//@role Get User
//Private

router.get("/all",async(req,res)=>{
try {
    const users=await User.find()
    res.status(200).json({msg:'Bienvenue ALL'})
}catch(error){
    res.status(500).json({msg:error.message})
}
    
})
module.exports=router