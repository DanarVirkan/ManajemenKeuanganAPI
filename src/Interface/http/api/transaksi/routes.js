const routes = (handler) => [
  {
    method: "POST",
    path: "/transaksi",
    handler: handler.postTransaksi,
  },
  {
    method: "GET",
    path: "/transaksi",
    handler: handler.getTransaksis,
  },
  {
    method: "GET",
    path: "/transaksi/{userId}",
    handler: handler.getTransaksiByUserId,
  },
];
module.exports = routes;
