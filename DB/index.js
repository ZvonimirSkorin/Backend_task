const DB_info = require("./knexfile");

const DB = require("knex")(DB_info.development);

module.exports = DB;
