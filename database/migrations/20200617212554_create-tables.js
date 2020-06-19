
exports.up = function(knex) {
  return knex.schema    
    .createTable('users', users => {
        users
            .increments();
        users
            .string('first_name', 128)
            .notNullable();
        users
            .string('last_name', 128)
            .notNullable();
        users
            .string('email', 128)
            .notNullable()
            .unique();
        users
            .string('password', 128)
            .notNullable();
    })
    .createTable('recipes', recipes => {
        recipes
            .increments();
        recipes
            .string('title', 255)
            .notNullable();
        recipes
            .string('source', 255)
        recipes
            .string('ingredients')
            .notNullable();
        recipes
            .string('instructions', 255)
            .notNullable();
        recipes
            .string('category', 128)
            .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('users');
};
