const express=require('express')
const app=express()
const cors=require('cors')
//import the connect
//dotenv
require('dotenv').config()
const connectDB=require('./config/connectDB')
connectDB()
//middleware

app.use(express.json())
app.use(cors())
app.use('/api/auth',require('./routes/users'))
app.use('/dab',require('./routes/dabs'))
app.use('/banque',require('./routes/banques'))






const Port=5000
app.listen(Port,(err)=>{
    err? console.log(err): console.log(`the server is runnin on ${Port}`)
})
