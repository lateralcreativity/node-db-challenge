const router = require('express').Router();
const Resources = require('./resources-model');

router.get('/', (req, res) => {
    Resources.get()
    .then(payload => {
        if(!payload[0]) {
            res.status(404).json({ error: 'No resources found' })
        } else {
            res.status(200).json(payload)
        }
    })
    .catch(error => handleError(error, res));
});

router.post('/', (req, res) => {
    const resource = req.body;

    if(!resource.name) {
        res.status(400).json({ error: 'Name is a required field' })
    } else {
        Resources.add(resource)
        .then(payload => {
            res.status(200).json(payload)
        })
        .catch(error => handleError(error, res));
    }
})

function handleError(error, res) {
    return res.status(500).json({ error: error })
}

module.exports = router;