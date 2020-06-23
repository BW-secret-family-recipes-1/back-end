exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("ingredients")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("ingredients").insert([
                { name: "1/2 cup ofchocolate chips"},
                { name: "1 cup of sugar"},
                { name: "1 cup of flour"},
                { name: "2 - 14oz cans of sweetened condensed milk"},
                { name: "1 butter recipe moist cake mix"},
                { name: "4 oz salted butter (softened)"},
                { name: "1 2/3  cup whole milk (divided)"}
            ]);
        });
};
