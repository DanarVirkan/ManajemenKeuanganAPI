/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "VARCHAR(30)",
      primaryKey: true,
    },
    nama: "TEXT",
    balance: {
      type: "INT",
      default: 0,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("users");
};
