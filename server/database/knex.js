const knex = require("knex")

const connectedKnex = knex({
    client: "sqlite3",
    connection: { filename: "./sqlite/db.sqlite" },
    useNullAsDefault: true
  });
  
  module.exports = connectedKnex;