exports.up = function (knex) {
    return knex.schema
        .createTable("users", (users) => {
            users.increments();
            users.string("first_name", 128).notNullable();
            users.string("last_name", 128).notNullable();
            users.string("email", 128).notNullable().unique();
            users.string("password", 128).notNullable();
        })
        .createTable("recipes", (recipes) => {
            recipes.increments("id");
            recipes.string("title", 255).notNullable();
            recipes.string("source", 255);
            recipes.string("category", 128).notNullable();
            recipes.integer("user_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("ingredients", (ingredients) => {
            ingredients.increments("id");
            ingredients.string("name", 128).notNullable();
            ingredients
                .integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })

        .createTable("instructions", (tbl) => {
            tbl.increments("id");
            tbl.string("step_number").notNullable();
            tbl.string("instructions", 256).notNullable();
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("recipes.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("instructions")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")
        .dropTableIfExists("users");
};
