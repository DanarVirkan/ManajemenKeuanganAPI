const routes = (handler) => [
  {
    method: "POST",
    path: "/user",
    handler: handler.postUser,
  },
  {
    method: "GET",
    path: "/user",
    handler: handler.getUsers,
  },
  {
    method: "GET",
    path: "/user/{userId}",
    handler: handler.getUserById,
  },
  {
    method: "GET",
    path: "/user/haveBalance",
    handler: handler.getUserWithBalance,
  },
  {
    method: "UPDATE",
    path: "/user/{userId}",
    handler: handler.updateUserById,
  },
];
module.exports = routes;
