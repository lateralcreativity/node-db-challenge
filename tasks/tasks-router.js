const router = require('express').Router();
const Tasks = require('./tasks-model');

router.get('/', (req, res) => {
    Tasks.get()
    .then(payload => {
        res.status(200).json(payload)
    })
    .catch(error => handleError(error, res));
});

router.post('/', (req, res) => {
    const task = req.body;
    if(!task.projects_id || !task.description) {
        res.status(400).json({ error: 'projects_id and description are required' })
    } else {
        Tasks.add(task)
        .then(payload => {
            res.status(200).json(payload)
        })
        .catch(error => handleError(error, res));
    }
})

function handleError(error, res) {
    return res.status(500).json({ error: error.message })
}

module.exports = router;