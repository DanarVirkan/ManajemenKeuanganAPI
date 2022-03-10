const createServer = require("./Infrastructure/http/createServer");
const injections = require("./Infrastructure/injections");

require("dotenv").config();
const start = async () => {
  const server = await createServer(injections);
  await server.start();
  console.log(`Server start at ${server.info.uri}`);
};
start();
