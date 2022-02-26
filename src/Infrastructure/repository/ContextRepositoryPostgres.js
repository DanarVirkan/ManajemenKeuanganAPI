const ContextRepository = require("../../Domain/ContextRepository");
const pool = require("../database/postgress/pool");

class ContextRepositoryPostgres extends ContextRepository {
  async addContext({ deskripsi, jumlah, userId }) {
    const query = {
      text: "INSERT INTO context (deskripsi, jumlah, user_id) VALUES ($1, $2, $3) RETURNING id",
      values: [deskripsi, jumlah, userId],
    };
    const result = await pool.query(query);
    return result.rows[0].id;
  }

  async getContexts() {
    const query = {
      text: "SELECT * FROM context",
    };
    const result = await pool.query(query);
    return result.rows;
  }

  async getContextsByUserId(userId) {
    const query = {
      text: "SELECT * FROM context WHERE user_id = $1",
      values: [userId],
    };
    const result = await pool.query(query);
    return result.rows;
  }

  async setLunasById(id) {
    const query = {
      text: "UPDATE FROM context SET lunas = true WHERE id = $1 RETURNING id",
      values: [id],
    };
    const result = await pool.query(query);
    return result.rows[0].id;
  }

  async deleteContextById(id) {
    const query = {
      text: "DELETE FROM context WHERE id = $1 RETURNING id",
      values: [id],
    };
    const result = await pool.query(query);
    return result.rows[0].id;
  }
}
module.exports = ContextRepositoryPostgres;
