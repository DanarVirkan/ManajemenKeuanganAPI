const Hapi = require("@hapi/hapi");

const users = require("../../Interface/http/api/users");
const context = require("../../Interface/http/api/context");
const transaksi = require("../../Interface/http/api/transaksi");

const createServer = async (injections) => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register([
    {
      plugin: users,
      options: { injections },
    },
    {
      plugin: context,
      options: { injections },
    },
    {
      plugin: transaksi,
      options: { injections },
    },
  ]);

  return server;
};
module.exports = createServer;
