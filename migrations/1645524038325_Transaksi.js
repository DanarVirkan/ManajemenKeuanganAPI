/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("transaksi", {
    id: {
      type: "VARCHAR(30)",
      primaryKey: true,
    },
    context_id: {
      type: "VARCHAR(30)",
      references: "context",
    },
    deskripsi: "TEXT",
    jumlah: "INT",
    tipe: "TEXT",
    user_id: {
      type: "VARCHAR(30)",
      references: "users",
      notNull: true,
    },
    tgl: {
      type: "TIMESTAMP",
      default: pgm.func("current_timestamp"),
    },
  });
  pgm.createIndex("transaksi", "context_id");
  pgm.createIndex("transaksi", "user_id");
};

exports.down = (pgm) => {
  pgm.dropIndex("transaksi", "context_id");
  pgm.dropIndex("transaksi", "user_id");
  pgm.dropTable("transaksi");
};
