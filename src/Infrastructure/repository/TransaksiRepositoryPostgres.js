const TransaksiRepository = require("../../Domain/TransaksiRepository");

class TransaksiRepositoryPostgres extends TransaksiRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addTransaksi({ deskripsi, jumlah, tipe, userId }) {
    const id = "transaksi-" + this._idGenerator();
    const query = {
      text: "INSERT INTO transaksi (id, deskripsi, jumlah, tipe, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING id",
      values: [id, deskripsi, jumlah, tipe, userId],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async getTransaksis() {
    const query = {
      text: "SELECT * FROM transaksi",
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getTransaksiByUserId(userId) {
    const query = {
      text: "SELECT * FROM transaksi WHERE user_id = $1",
      values: [userId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getTransaksiByMonth(date) {
    const query = {
      text: "SELECT * FROM transaksi WHERE MONTH(tgl) = MONTH($1)",
      values: [date],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}
module.exports = TransaksiRepositoryPostgres;
