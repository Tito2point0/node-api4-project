require('dotenv').config()
const express = require('express');
const cors = require('cors')
const server = express();
const PORT = process.env.PORT || 9000




server.use(express.json())
server.use(cors())

server.get("/api/hello", (req, res) => {
    res.json({ 
        message : 'api worked but hello world maybe this did work properly'
    })
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})
server.use('*', (req, res) => {
    res.send(`<h1> Hello world i am here with skills </h1>`)
})
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
}) 