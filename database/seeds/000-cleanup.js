const cleaner = require('knex-cleaner');

exports.seed = function cleanTables(knex) {
  // Deletes ALL existing entries
  return cleaner
    .clean(knex, {
      mode: "truncate",
      restartIdentity: true,
      ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
    })
};
