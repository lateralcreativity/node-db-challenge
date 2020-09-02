const express = require('express');
const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).json({message: 'API UP'})
});

module.exports = server;