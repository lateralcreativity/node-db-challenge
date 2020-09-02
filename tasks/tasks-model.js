const db = require('../data/connection');

module.exports = {
    get,
    getById,
    add
}

function get() {
    return db('tasks')
    .join('projects', 'projects.id', 'tasks.projects_id')
    .select('tasks.*', 'projects.name', 'projects.description')
}

function getById(id) {
    return db('tasks')
    .where({ id: id })
    .first()
}

function add(task) {
    return db('tasks')
    .insert(task, 'id')
    .then(id => getById(id))
}