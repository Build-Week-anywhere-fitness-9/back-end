const knex = require("knex");

const configs = require("../knexfile.js");

const { NODE_ENV } = require("../config/secrets.js");

module.exports = knex(configs[NODE_ENV]);
