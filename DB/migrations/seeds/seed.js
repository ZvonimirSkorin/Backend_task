/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("friends").insert([
    { first_name: "Pero", last_name: "Peric", nickname: "Perks" },
    { first_name: "Marko", last_name: "Markic", nickname: "Marks" },
    { first_name: "Ilija", last_name: "Ilić", nickname: "Ilks" },
  ]);
};
