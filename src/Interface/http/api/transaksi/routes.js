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
    path: "/transaksi/total/in",
    handler: handler.getTransaksiTotalIn,
  },
  {
    method: "GET",
    path: "/transaksi/total/out",
    handler: handler.getTransaksiTotalOut,
  },
  {
    method: "GET",
    path: "/transaksi/total",
    handler: handler.getTransaksiTotal,
  },
  {
    method: "GET",
    path: "/transaksi/{userId}",
    handler: handler.getTransaksiByUserId,
  },
];
module.exports = routes;
