const ContextHandler = require("./handler");
const routes = require("./routes");

module.exports = {
  name: "context",
  register: async (server, { injections }) => {
    const contextHandler = new ContextHandler(injections);
    server.route(routes(contextHandler));
  },
};
