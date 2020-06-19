const db = require("../database/dbConfig.js");

function find() {
    return db("recipes");
}

function findById(id) {
    return db("recipes").where({ id });
}

function add(recipeData) {
    return db("recipes").insert(recipeData);
}

function update(changes, id) {
    return db("recipes").where({ id }).update(changes);
}

function remove(id) {
    return db("recipes").where({ id }).del();
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};
