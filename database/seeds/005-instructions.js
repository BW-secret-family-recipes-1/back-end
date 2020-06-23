exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("instructions")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("instructions").insert([
                {
                    step: "Mix all ingredients in bowl",
                    step_order: 1,
                    recipe_id: 1,
                },
                { step: "Place on oven sheet ", step_order: 2, recipe_id: 1 },
                {
                    step:
                        "Place one unopened can of sweetened condensed milk in a pot of water, covering the can completely. Bring to a boil and cook for 4 hours. Make sure to add water as needed so the can stays submerged in water. This will make the dulce de leche sauce",
                    step_order: 1,
                    recipe_id: 2,
                },
                {
                    step:
                        "Prepare milk mixture by combining a can of sweetened condensed milk, evaporated milk, and 1 c whole milk in a bowl and whisk together to combine and keep cool while cake cools.",
                    step_order: 2,
                    recipe_id: 2,
                },
                {
                    step:
                        "Decorate with sliced strawberries if desired and allow to chill for at least 4 hours before serving",
                    step_order: 3,
                    recipe_id: 2,
                },
            ]);
        });
};
