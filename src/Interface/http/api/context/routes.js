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
