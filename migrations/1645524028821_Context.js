/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("context", {
    id: {
      type: "VARCHAR(30)",
      primaryKey: true,
    },
    user_id: {
      type: "VARCHAR(30)",
      notNull: true,
      references: "users",
    },
    deskripsi: "TEXT",
    jumlah: "INT",
    lunas: "BOOLEAN",
  });
  pgm.createIndex("context", "user_id");
};

exports.down = (pgm) => {
  pgm.dropIndex("context", "user_id");
  pgm.dropTable("context");
};
