require("dotenv").config()

const { PORT } = require('./config')
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")


const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('*',(req,res)=>{
    res.status(500).json({
        message:"Incorrect path"
    })
})

server.listen( PORT,()=>{
    console.log(`Server listening in port ${PORT}`)
})