exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("ingredients")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("ingredients").insert([
                { name: "1/2 cup ofchocolate chips", recipe_id: 1 },
                { name: "1 cup of sugar", recipe_id: 1 },
                { name: "1 cup of flour", recipe_id: 1 },
                {
                    name: "2 - 14oz cans of sweetened condensed milk",
                    recipe_id: 2,
                },
                { name: "1 butter recipe moist cake mix", recipe_id: 2 },
                { name: "4 oz salted butter (softened)", recipe_id: 2 },
                { name: "1 2/3  cup whole milk (divided)", recipe_id: 2 },
            ]);
        });
};
