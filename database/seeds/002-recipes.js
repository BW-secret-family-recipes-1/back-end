exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("recipes")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("recipes").insert([
                { title: "Cookies", source: "grandmaw sally", category: "desert", user_id: 1 },
                { title: "Tres Leches with Dulce de Leche Sauce", source: "jill", category: "desert", user_id: 1 }
            ]); 
        });
};
