const db = require('../database/dbConfig.js');

function add(user) {
    return db('users')
        .insert(user);
}

function find() {
    return db('users')
        .select('id', 'email');
}

function findBy(filter) {
    return db('users')
        .where(filter);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

module.exports = {
    add,
    find,
    findBy,
    findById
}