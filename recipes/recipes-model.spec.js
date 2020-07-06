const db = require("../database/dbConfig");
const Recipes = require("./recipes-model");
const { expectCt } = require("helmet");

describe("recipes model", () => {
    beforeEach(async () => {
        await db("recipes").truncate();
    });

    describe("add function", () => {
        it("add recipes into the db", async () => {
            let recipesNumber;
            recipesNumber = await db("recipes");
            expect(recipesNumber).toHaveLength(0);
            await Recipes.add({
                title: "a recipe",
                source: "maw",
                category: "a recipe",
                user_id: 1,
            });
            recipesNumber = await db("recipes");
            expect(recipesNumber).toHaveLength(1);
        });

        it("add ingredients in the db", async () => {
            let ingredientsNumber;
            ingredientsNumber = await db("ingredients");
            expect(ingredientsNumber).toHaveLength(0);
            await Recipes.addIngredients({
                name: "ingredient",
                recipe_id: 2,
            });
            ingredientsNumber = await db("ingredients");
            expect(ingredientsNumber).toHaveLength(1);
        });

        it("add instructions in the db", async () => {
            let instructionsNumber;
            instructionsNumber = await db("instructions");
            expect(instructionsNumber).toHaveLength(0);
            await Recipes.addInstructions({
                recipe_id: 2,
                step_number: 1,
                instructions:
                    "Place one unopened can of sweetened condensed milk in a pot of water, covering the can completely. Bring to a boil and cook for 4 hours. Make sure to add water as needed so the can stays submerged in water. This will make the dulce de leche sauce",
            });
            instructionsNumber = await db("instructions");
            expect(instructionsNumber).toHaveLength(1);
        });

        beforeEach(async () => {
            await db("instructions").truncate();
            await db("ingredients").truncate();
            await db("recipes").truncate();
        });
    });
});
