const db = require("../database/dbConfig.js");

function findrecipes() {
    return db("recipes");
}

function findingredients() {
    return db("ingredients");
}

function findinstructions() {
    return db("instructions");
}

//return recipes.title .source .category and where recipe id matches recipe id in the ingredients table join ingredientsname if ingredient.id is equal to ingredients.id return instructions.steps in order by step number if recipe id is equal to insturdctions . recipe_id

// function find() {
//     return db("recipes");
// }

// function findById(id) {
//     return db("recipes").where({ id });
// }

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
    findrecipes,
    findingredients,
    findinstructions,
    // findById,
    // add,
    // update,
    // remove,
};
