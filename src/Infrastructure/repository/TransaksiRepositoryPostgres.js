const TransaksiRepository = require("../../Domain/TransaksiRepository");

class TransaksiRepositoryPostgres extends TransaksiRepository {
  async addTransaksi({ deskripsi, jumlah, tipe, userId }) {
    const query = {
      text: "INSERT INTO transaksi (deskripsi, jumlah, tipe, user_id) VALUES ($1, $2, $3, $4) RETURNING id",
      values: [deskripsi, jumlah, tipe, userId],
    };
    const result = await pool.query(query);
    return result.rows[0].id;
  }

  async getTransaksis() {
    const query = {
      text: "SELECT * FROM transaksi",
    };
    const result = await pool.query(query);
    return result.rows;
  }

  async getTransaksiByUserId(userId) {
    const query = {
      text: "SELECT * FROM transaksi WHERE user_id = $1",
      values: [userId],
    };
    const result = await pool.query(query);
    return result.rows;
  }

  async getTransaksiByMonth(date) {
    const query = {
      text: "SELECT * FROM transaksi WHERE MONTH(tgl) = MONTH($1)",
      values: [date],
    };
    const result = await pool.query(query);
    return result.rows;
  }
}
module.exports = TransaksiRepositoryPostgres;
