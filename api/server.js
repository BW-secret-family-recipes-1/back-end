const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const recipeRouter = require('../recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => {
    res.send('Server Running');
});

module.exports = server;
