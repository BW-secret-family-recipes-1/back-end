const db = require("../database/dbConfig.js");

function find() {
    return db("recipes").select("id", "title", "source", "category");
}

function findById(id) {
    return db("recipes")
        .where({ id })
        .select("id", "title", "source", "category");
}

function findIngredients(id) {
    return db("ingredients as in")
        .join("recipes as r", "r.id", "=", "in.recipe_id")
        .select("in.name")
        .where({ recipe_id: id });
}

function findInstructions(id) {
    return db("instructions as i")
        .join("recipes as r", "r.id", "=", "i.recipe_id")
        .select("r.title", "i.step_number", "i.instructions")
        .where({ recipe_id: id });
}

function add(recipe) {
    return db("recipes").insert(recipe);
}

function addIngredients(ingredients) {
    return db("ingredients").insert(ingredients);
}

function addInstructions(instruction) {
    return db("instructions").insert(instruction);
}

function update(changes, id) {
    return db("recipes").where({ id }).update(changes);
}

function updateIngredients(changes, id) {
    return db("ingredients").where({ id }).update(changes);
}

function updateInstructions(changes, id) {
    return db("instructions").where({ id }).update(changes);
}

function remove(id) {
    return db("recipes").where({ id }).del();
}

function removeIngredients(id) {
    return db("ingredients").where({ recipe_id: id }).del();
}

function removeInstructions(id) {
    return db("instructions").where({ recipe_id: id }).del();
}

module.exports = {
    find,
    findById,
    findInstructions,
    add,
    addIngredients,
    addInstructions,
    findIngredients,
    update,
    updateInstructions,
    updateIngredients,
    remove,
    removeIngredients,
    removeInstructions,
};
