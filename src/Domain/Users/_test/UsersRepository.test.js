const UsersRepository = require("../UsersRepository");

describe("Users Repository", () => {
  it("should throw error when not implemented", () => {
    const usersRepo = new UsersRepository();
    expect(usersRepo.addUser("")).rejects.toThrowError(
      "USERS_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(usersRepo.getUsers()).rejects.toThrowError(
      "USERS_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(usersRepo.getUserById("")).rejects.toThrowError(
      "USERS_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(usersRepo.getUsersWithBalance()).rejects.toThrowError(
      "USERS_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(usersRepo.editUserById("", {})).rejects.toThrowError(
      "USERS_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
  });
});
