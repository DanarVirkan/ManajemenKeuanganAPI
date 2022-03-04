const TransaksiHandler = require("./handler");
const routes = require("./routes");

module.exports = {
  name: "transaksi",
  register: async (server, { injections }) => {
    const transaksiHandler = new TransaksiHandler(injections);
    server.route(routes(transaksiHandler));
  },
};
