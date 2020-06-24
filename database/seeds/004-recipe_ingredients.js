.createTable("recipe_ingredients", tbl => {
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredients.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.primary(['recipe_id', 'ingredient_id']);
})