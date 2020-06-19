
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Bob', last_name: 'Jones', email: 'bobjones@gmail.com', password: 'password'}
      ]);
    });
};
