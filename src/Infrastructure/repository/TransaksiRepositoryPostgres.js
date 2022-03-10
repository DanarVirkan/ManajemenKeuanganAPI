const TransaksiRepository = require("../../Domain/TransaksiRepository");

class TransaksiRepositoryPostgres extends TransaksiRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addTransaksi({ deskripsi, jumlah, tipe, userId, contextId = null }) {
    const id = "tr-" + this._idGenerator();
    const query = {
      text: "INSERT INTO transaksi (id, deskripsi, jumlah, tipe, user_id, context_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
      values: [id, deskripsi, jumlah, tipe, userId, contextId],
    };

    const result = await this._pool.query(query);
    return result.rows;
  }

  async getTransaksis() {
    const query = {
      text: "SELECT * FROM transaksi",
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getTransaksiTotalMonthly(tipe) {
    const query = {
      text: "SELECT SUM(jumlah) as total FROM transaksi WHERE tipe = $1 AND EXTRACT(MONTH FROM tgl) = EXTRACT(MONTH FROM now())",
      values: [tipe],
    };
    const result = await this._pool.query(query);
    return parseInt(result.rows[0].total);
  }

  async getTransaksiByUserId(userId) {
    const query = {
      text: "SELECT * FROM transaksi WHERE user_id = $1",
      values: [userId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getTerbayarByContextId(contextId) {
    const query = {
      text: "SELECT SUM(jumlah) AS total FROM transaksi WHERE context_id = $1 AND tipe = 'IN'",
      values: [contextId],
    };
    const result = await this._pool.query(query);
    return parseInt(result.rows[0].total);
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
