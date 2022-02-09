// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "secret",
      database: "postgres",
      charset: "utf8",
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/migrations/seeds",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "postgres",
      user: "postgres",
      password: "secret",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "localost",
      database: "postgres",
      user: "postgres",
      password: "secret",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
