const Users = require("../../Domain/Users/entities/Users");

class UsersUseCase {
  constructor({ usersRepository }) {
    this._usersRepository = usersRepository;
  }
  async addUser(nama) {
    return this._usersRepository.addUser(nama);
  }

  async getUsers() {
    const users = await this._usersRepository.getUsers();
    return users.map(
      (payload) =>
        new Users({
          ...payload,
          userId: payload.id,
          name: payload.nama,
        })
    );
  }

  async getUserById(id) {
    const user = await this._usersRepository.getUserById(id);
    return new Users({
      userId: user.id,
      name: user.nama,
      ...user,
    });
  }

  async getUsersWithBalance() {
    const users = await this._usersRepository.getUsersWithBalance();
    return users.map(
      (payload) =>
        new Users({
          userId: payload.id,
          name: payload.nama,
          ...payload,
        })
    );
  }

  async editUserById(id, nama) {
    const user = await this._usersRepository.editUserById(id, { nama });
    return user;
  }
}
module.exports = UsersUseCase;
