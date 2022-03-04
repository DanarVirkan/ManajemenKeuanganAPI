const UsersRepository = require("../../Domain/UsersRepository");

class UsersRepositoryPostgres extends UsersRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }
  async addUser(nama) {
    const id = "user-" + this._idGenerator();
    const query = {
      text: "INSERT INTO users (id, nama) VALUES ($1, $2) RETURNING id",
      values: [id, nama],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async getUsers() {
    const query = {
      text: "SELECT * FROM users",
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getUserById(id) {
    const query = {
      text: "SELECT * FROM users WHERE id = $1",
      values: [id],
    };
    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async editUserById(id, { nama, balance }) {
    let query;
    if (nama) {
      query = {
        text: "UPDATE FROM users SET nama = $2 WHERE id = $1 RETURNING id",
        values: [id, nama],
      };
    }
    if (balance) {
      query = {
        text: "UPDATE FROM users SET balance = $2 WHERE id = $1 RETURNING id",
        values: [id, balance],
      };
    }
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async getUsersWithBalance() {
    const query = {
      text: "SELECT * FROM users WHERE balance > 0",
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}
module.exports = UsersRepositoryPostgres;
