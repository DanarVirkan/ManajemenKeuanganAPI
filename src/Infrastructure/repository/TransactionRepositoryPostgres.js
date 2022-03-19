const TransactionRepository = require("../../Domain/Transaction/TransactionRepository");

class TransactionRepositoryPostgres extends TransactionRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addTransaction({ deskripsi, jumlah, tipe, userId, contextId = null }) {
    const id = "tr-" + this._idGenerator();
    const query = {
      text: "INSERT INTO transaksi (id, deskripsi, jumlah, tipe, user_id, context_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
      values: [id, deskripsi, jumlah, tipe, userId, contextId],
    };

    const result = await this._pool.query(query);
    return result.rows;
  }

  async getTransactions() {
    const query = {
      text:
        "SELECT context.deskripsi AS deskripsi_context, transaksi.id, transaksi.deskripsi, transaksi.jumlah, tipe, users.nama AS nama_user, tgl FROM transaksi " +
        "JOIN users ON users.id = transaksi.user_id " +
        "JOIN context ON transaksi.context_id = context.id " +
        "ORDER BY tgl DESC " +
        "LIMIT 20",
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getTransactionTotalMonthly(tipe) {
    const query = {
      text: "SELECT SUM(jumlah) as total FROM transaksi WHERE tipe = $1 AND EXTRACT(MONTH FROM tgl) = EXTRACT(MONTH FROM now())",
      values: [tipe],
    };
    const result = await this._pool.query(query);
    return parseInt(result.rows[0].total);
  }

  async getTransactionByUserId(userId) {
    const query = {
      text: "SELECT * FROM transaksi WHERE user_id = $1",
      values: [userId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getPaidByLoanId(contextId) {
    const query = {
      text: "SELECT SUM(jumlah) AS total FROM transaksi WHERE context_id = $1 AND tipe = 'IN'",
      values: [contextId],
    };
    const result = await this._pool.query(query);
    return parseInt(result.rows[0].total);
  }

  async getTransactionByMonth(date) {
    const query = {
      text: "SELECT * FROM transaksi WHERE MONTH(tgl) = MONTH($1)",
      values: [date],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}
module.exports = TransactionRepositoryPostgres;
