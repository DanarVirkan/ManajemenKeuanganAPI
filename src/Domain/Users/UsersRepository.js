class UsersRepository {
  async addUser(name) {
    throw new Error("USERS_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getUsers() {
    throw new Error("USERS_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getUserById(id) {
    throw new Error("USERS_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getUsersWithBalance() {
    throw new Error("USERS_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async editUserById(id, { name, balance }) {
    throw new Error("USERS_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}
module.exports = UsersRepository;
