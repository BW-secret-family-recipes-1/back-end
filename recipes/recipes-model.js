const db = require("../database/dbConfig.js");

// function findrecipes() {
//     return db("recipes");
// }

// function findingredients() {
//     return db("ingredients");
// }

// function findinstructions() {
//     return db("instructions");
// }

//return recipes.title .source .category and where recipe id matches recipe id in the ingredients table join ingredientsname if ingredient.id is equal to ingredients.id return instructions.steps in order by step number if recipe id is equal to insturdctions . recipe_id

function find() {
    return db("recipes")
        .select('id', 'title', 'source', 'category');
}

function findById(id) {
    return db("recipes")
        .where({ id })
        .select('id', 'title', 'source', 'category');
}

function findInstructions(id) {
    return db('instructions as i')
        .join('recipes as r', 'r.id', '=', 'i.id')
        .select('i.id', 'r.title', 'i.step_number', 'i.instructions')
        .where({ recipe_id: id });
}

// function add(recipeData) {
//     return db("recipes").insert(recipeData);
// }

// function update(changes, id) {
//     return db("recipes").where({ id }).update(changes);
// }

// function remove(id) {
//     return db("recipes").where({ id }).del();
// }

module.exports = {
    find,
    findById,
    findInstructions
    // findrecipes,
    // findingredients,
    // findinstructions,
    // add,
    // update,
    // remove,
};
