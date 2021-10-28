const jwt=require('jsonwebtoken')
const User=require('../Models/Users')

const isAuth=async(req,res,next)=>{

    try{
        
const token = req.headers['auth-token']
        if(!token) return res.status(404).json({msg:'Problem Token'})
//decoder token

const decodedToken= await jwt.verify(token,process.env.PASS_TOKEN)
//chercher Utilisateur
const user = await User.findById(decodedToken.id)
//Verification Utilisateur

if (!user) return res.status(404).json({msg:'compte inexistant'})
//creation Utilisateur
req.user=user
next()




    } catch(error){
        res.status(400).json({msg:error.message})
    }
}

module.exports=isAuth