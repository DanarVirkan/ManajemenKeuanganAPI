const Users = require("../../Domain/Users");

class UserUseCase {
  constructor({ usersRepository }) {
    this._userRepository = usersRepository;
  }
  async addUser(nama) {
    return this._userRepository.addUser(nama);
  }

  async getUsers() {
    const users = await this._userRepository.getUsers();
    return users.map(
      (payload) =>
        new Users({
          ...payload,
          userId: payload.id,
        })
    );
  }

  async getUserById(id) {
    const user = await this._userRepository.getUserById(id);
    return new Users({
      userId: user.id,
      ...user,
    });
  }

  async getUsersWithBalance() {
    const users = await this._userRepository.getUsersWithBalance();
    return users.map(
      (payload) =>
        new Users({
          userId: payload.id,
          ...payload,
        })
    );
  }

  async editUserById(id, nama) {
    const user = await this._userRepository.editUserById(id, { nama });
    return user;
  }
}
module.exports = UserUseCase;
