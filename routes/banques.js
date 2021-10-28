const express=require('express')
const { model } = require('mongoose')
const router=express.Router()
let Banque =require('../Models/Banques')

//Route http://localhost:5000/banque/registerbanque
//@role register
//public

router.post('/registerBanque',async(req,res)=>{
    const{codebanque,abreviation,description}=req.body
    try {

        //verifier si le DAB exist déja

        let banque= await Banque.findOne({codebanque})
        if (banque) {return res.json({msg:`Banque exist déja`})}

//creation DAB
banque=new Banque({codebanque,abreviation,description})
//Sauvegarder Utilisateur
await banque.save()

res.status(202).json({msg:`Banque Ajouté Avec Succes`,banque})

    }catch(error){
        res.status(500).json({msg:error.message})
    }
})

module.exports=router