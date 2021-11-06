require("dotenv").config()

const server = require('./server')

// const { PORT } = require('./config')
const  PORT = process.env.PORT

server.listen( PORT,()=>{
    console.log(`Server listening in port ${PORT}`)
})