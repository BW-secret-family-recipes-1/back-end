const db = require("../database/dbConfig.js");

// function findrecipes() {
//     return db("recipes");
// }

// function findingredients() {
//     return db("ingredients");
// }

//return recipes.title .source .category and where recipe id matches recipe id in the ingredients table join ingredientsname if ingredient.id is equal to ingredients.id return instructions.steps in order by step number if recipe id is equal to insturdctions . recipe_id

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
        .join("recipes as r", "r.id", "=", "i.id")
        .select("i.id", "r.title", "i.step_number", "i.instructions")
        .where({ recipe_id: id });
}

function add(recipe) {
    return db("recipes").insert(recipe);
}

function addInstructions(instruction) {
    return db("instructions")
        .insert(instruction, "id")
        .then((ids) => {
            const [id] = ids;
            return findById(id);
        });
}

// function update(changes, id) {
//     return db("recipes").where({ id }).update(changes);
// }

function remove(id) {
    return db("recipes").where({ id }).del();
}

function removeIngredients(id) {
    return db("ingredients").where({ recipe_id: id }).del();
}

function removeRecipe_Ingredients(id) {
    return db("recipe_ingredients").where({ recipe_id: id }).del();
}
function removeInstructions(id) {
    return db("instructions").where({ recipe_id: id }).del();
}

module.exports = {
    find,
    findById,
    findInstructions,
    add,
    addInstructions,
    // findinstructions,
    // findrecipes,
    findIngredients,
    // update,
    remove,
    removeIngredients,
    removeRecipe_Ingredients,
    removeInstructions,
};
