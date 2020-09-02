const express = require('express');
const server = express();
const projectsRouter = require('../projects/projects-router');
const resourcesRouter = require('../resources/resources-router');
const tasksRouter = require('../tasks/tasks-router');

server.use(express.json());
server.use('/projects', projectsRouter);
server.use('/resources', resourcesRouter);
server.use('/tasks', tasksRouter);


server.get('/', (req, res) => {
    res.status(200).json({message: 'API UP'})
});

module.exports = server;