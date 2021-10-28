const express=require('express')
const { model } = require('mongoose')
const router=express.Router()
let Dab =require('../Models/Dabs')

//Route http://localhost:5000/dab/registerDAB
//@role register
//public

router.post('/registerDAB',async(req,res)=>{
    const{affiliation,nomdab,agence,etat,responsable,codebanque}=req.body
    try {

        //verifier si le DAB exist déja

        let dab= await Dab.findOne({affiliation})
        if (dab) {return res.json({msg:`DAB exist déja`})}

//creation DAB
dab=new Dab({affiliation,nomdab,agence,etat,responsable,codebanque})
//Sauvegarder Utilisateur
await dab.save()

res.status(202).json({msg:`DAB Ajouté Avec Succes`,dab})

    }catch(error){
        res.status(500).json({msg:error.message})
    }
})

module.exports=router