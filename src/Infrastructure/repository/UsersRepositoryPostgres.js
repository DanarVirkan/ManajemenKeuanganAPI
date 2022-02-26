const UsersRepository = require("../../Domain/UsersRepository");
const pool = require("../database/postgress/pool");

class UsersRepositoryPostgres extends UsersRepository {
  async addUser(nama) {
    const query = {
      text: "INSERT INTO users (nama) VALUES ($1) RETURNING id",
      values: [nama],
    };
    const result = await pool.query(query);
    return result.rows[0].id;
  }

  async getUsers() {
    const query = {
      text: "SELECT * FROM users",
    };
    const result = await pool.query(query);
    return result.rows;
  }

  async getUserById(id) {
    const query = {
      text: "SELECT * FROM users WHERE id = $1",
      values: [id],
    };
    const result = await pool.query(query);
    return result.rows[0];
  }

  async editUserById(id, { nama, balance }) {
    const query = {
      text: "UPDATE FROM users SET nama = $2, balance = $3 WHERE id = $1 RETURNING id",
      values: [id, nama, balance],
    };
    const result = await pool.query(query);
    return result.rows[0].id;
  }

  async getUsersWithBalance() {
    const query = {
      text: "SELECT * FROM users WHERE balance > 0",
    };
    const result = await pool.query(query);
    return result.rows;
  }
}
module.exports = UsersRepositoryPostgres;
