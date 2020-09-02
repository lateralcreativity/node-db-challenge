const router = require('express').Router();
const Projects = require('./projects-model');

router.get('/', (req, res) => {
    Projects.get()
    .then(payload => {
        if(!payload[0]) {
            res.status(404).json({ error: 'No projects found' })
        } else {
            res.status(200).json(payload)
        }
    })
    .catch(error => handleError(error, res));
});

router.post('/', (req, res) => {
    const project = req.body;

    if(!project.name) {
        res.status(400).json({ error: 'Name is a required field' })
    } else {
        Projects.add(project)
        .then(payload => {
            res.status(201).json(payload);
        })
        .catch(error => handleError(error, res));
    }
});

function handleError(error, res) {
    return res.status(500).json({ error: error })
}

module.exports = router;