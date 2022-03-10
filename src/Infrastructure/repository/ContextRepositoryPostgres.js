const ContextRepository = require("../../Domain/ContextRepository");

class ContextRepositoryPostgres extends ContextRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addContext({ deskripsi, jumlah, userId }) {
    const id = "context-" + this._idGenerator();
    const query = {
      text: "INSERT INTO context (id, deskripsi, jumlah, user_id) VALUES ($1, $2, $3, $4) RETURNING id",
      values: [id, deskripsi, jumlah, userId],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async getContexts(lunas = false) {
    const query = {
      text: "SELECT * FROM context WHERE lunas = $1",
      values: [lunas],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getContextById(id) {
    const query = {
      text: "SELECT * FROM context WHERE id = $1",
      values: [id],
    };
    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async getContextsByUserId(userId) {
    const query = {
      text: "SELECT * FROM context WHERE user_id = $1",
      values: [userId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async setLunasById(id) {
    const query = {
      text: "UPDATE context SET lunas = true WHERE id = $1 RETURNING id",
      values: [id],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async deleteContextById(id) {
    const query = {
      text: "DELETE FROM context WHERE id = $1 RETURNING id",
      values: [id],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }
}
module.exports = ContextRepositoryPostgres;
