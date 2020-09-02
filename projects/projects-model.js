const db = require('../data/connection');

module.exports = {
    get,
    getById,
    add
}

function get() {
    return db('projects')
}

function getById(id) {
    return db('projects')
    .where({ id: id })
    .first()
}

function add(project) {
    return db('projects')
    .insert(project, 'id')
    .then(id => getById(id))
}