const routes = (handler) => [
  {
    method: "POST",
    path: "/context",
    handler: handler.postContext,
  },
  {
    method: "GET",
    path: "/context",
    handler: handler.getContexts,
  },
  {
    method: "GET",
    path: "/context/{userId}",
    handler: handler.getContextsByUserId,
  },
  {
    method: "GET",
    path: "/context/{contextId}/sisa",
    handler: handler.getSisaPembayaran,
  },
  {
    method: "UPDATE",
    path: "/context/{contextId}/lunas",
    handler: handler.updateContextLunas,
  },
  {
    method: "DELETE",
    path: "/context/{contextId}",
    handler: handler.deleteContextById,
  },
];
module.exports = routes;
