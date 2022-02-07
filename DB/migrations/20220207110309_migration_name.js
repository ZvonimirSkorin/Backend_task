/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("friends", function (t) {
    t.increments("id").unsigned().primary();
    t.string("first_name").notNullable();
    t.string("last_name").notNullable();
    t.string("nickname").nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
