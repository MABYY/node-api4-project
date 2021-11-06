const express = require("express")
const router = require('./api/router-users')
const cors = require('cors')
const helmet = require('helmet')
const { logger } = require('./api/middleware')


const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use('/api',logger,router)

server.use('*',(req,res)=>{
    res.status(500).json({
        message:"Incorrect path"
    })
})

exports.module = server