require("dotenv").config();

const server = require("./api/server.js");

const { PORT } = require("./config/secrets.js");

server.listen(PORT, () => {
  console.log(`..server listening on PORT ${PORT}..`);
});
