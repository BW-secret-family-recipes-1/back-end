exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("instructions")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("instructions").insert([
                {
                    recipe_id: 1,
                    step_number: 1,
                    instructions: "Mix all ingredients in bowl",
                },
                { 
                    recipe_id: 1, 
                    step_number: 2, 
                    instructions: "Place on oven sheet ", 
                },
                {
                    recipe_id: 2,
                    step_number: 1,
                    instructions: "Place one unopened can of sweetened condensed milk in a pot of water, covering the can completely. Bring to a boil and cook for 4 hours. Make sure to add water as needed so the can stays submerged in water. This will make the dulce de leche sauce",
                },
                {
                    recipe_id: 2,
                    step_number: 2,
                    instructions: "Prepare milk mixture by combining a can of sweetened condensed milk, evaporated milk, and 1 c whole milk in a bowl and whisk together to combine and keep cool while cake cools.",
                },
                {
                    recipe_id: 2,
                    step_number: 3,
                    instructions: "Decorate with sliced strawberries if desired and allow to chill for at least 4 hours before serving",
                },
            ]);
        });
};
