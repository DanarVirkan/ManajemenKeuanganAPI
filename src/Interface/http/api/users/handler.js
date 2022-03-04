class UsersHandler {
  constructor({ usersUseCase }) {
    this._userUseCase = usersUseCase;

    this.postUser = this.postUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.getUserWithBalance = this.getUserWithBalance.bind(this);
    this.updateUserById = this.updateUserById.bind(this);
  }

  async postUser(req, h) {
    const { nama } = req.payload;
    const userId = await this._userUseCase.addUser(nama);
    return h
      .response({
        message: "success",
        data: {
          userId,
        },
      })
      .code(201);
  }

  async getUsers(_, h) {
    const users = await this._userUseCase.getUsers();
    return h
      .response({
        message: "success",
        data: {
          users,
        },
      })
      .code(200);
  }

  async getUserById(req, h) {
    const { userId } = req.params;
    const user = await this._userUseCase.getUserById(userId);
    return h
      .response({
        message: "success",
        data: {
          user,
        },
      })
      .code(200);
  }

  async getUserWithBalance(_, h) {
    const users = await this._userUseCase.getUsersWithBalance();
    return h
      .response({
        message: "success",
        data: {
          users,
        },
      })
      .code(200);
  }

  async updateUserById(req, h) {
    const { userId } = req.params;
    const user = await this._userUseCase.editUserById(userId);
    return h
      .response({
        message: "success",
        data: {
          userId: user,
        },
      })
      .code(200);
  }
}
module.exports = UsersHandler;
