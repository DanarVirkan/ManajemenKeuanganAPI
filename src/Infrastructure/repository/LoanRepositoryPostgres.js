const LoanRepository = require("../../Domain/Loan/LoanRepository");

class LoanRepositoryPostgres extends LoanRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addLoan({ deskripsi, jumlah, userId }) {
    const id = "context-" + this._idGenerator();
    const query = {
      text: "INSERT INTO context (id, deskripsi, jumlah, user_id) VALUES ($1, $2, $3, $4) RETURNING id",
      values: [id, deskripsi, jumlah, userId],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async getLoans(lunas = false) {
    const query = {
      text:
        "SELECT context.id, nama AS nama_user, context.deskripsi, context.jumlah, CAST( COALESCE(child_table.terbayar, 0) AS INT) AS terbayar, lunas FROM context " +
        "JOIN users ON context.user_id = users.id " +
        "LEFT JOIN (SELECT SUM(jumlah) AS terbayar, context_id FROM transaksi WHERE tipe = 'IN' GROUP BY context_id) AS child_table ON child_table.context_id = context.id " +
        "WHERE lunas = $1",
      values: [lunas],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getLoanById(id) {
    const query = {
      text: "SELECT * FROM context WHERE id = $1",
      values: [id],
    };
    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async getLoansByUserId(userId) {
    const query = {
      text: "SELECT * FROM context WHERE user_id = $1",
      values: [userId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async setPaidOffById(id) {
    const query = {
      text: "UPDATE context SET lunas = true WHERE id = $1 RETURNING id",
      values: [id],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async deleteLoanById(id) {
    const query = {
      text: "DELETE FROM context WHERE id = $1 RETURNING id",
      values: [id],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }
}
module.exports = LoanRepositoryPostgres;
