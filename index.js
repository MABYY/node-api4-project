require("dotenv").config()

const express = require("express")
const { PORT } = require('./config')
const cors = require("cors")
const helmet = require("helmet")

const router = require('./api/router-users');
// const { logger } = require('./api/middleware');

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use('/api', router);

server.get('*', (req, res) => {
    res.send(`<h1>Deploting now</h1>`);
});

server.listen( PORT,()=>{
    console.log(`Server listening in ${PORT}`)
})