const pool = require("../../database/postgress/pool");
const UsersRepository = require("../../../Domain/Users/UsersRepository");
const UsersRepositoryPostgres = require("../UsersRepositoryPostgres");

describe("UsersRepositoryPostgres", () => {
  it("should instance of UsersRepository", () => {
    const repo = new UsersRepositoryPostgres({}, {});
    expect(repo).toBeInstanceOf(UsersRepository);
  });

  describe("behaviour test", () => {
    afterEach(async () => {
      // TODO
    });
    afterAll(async () => {
      await pool.end();
    });
    describe("addUser function", () => {
      it("should add user to database", async () => {
        // TODO
      });
    });
    describe("getUsers function", () => {
      it("should fetch users data from database", async () => {
        // TODO
      });
    });
    describe("getUserById function", () => {
      it("should fetch user data by it's id from database", async () => {
        // TODO
      });
    });
    describe("editUserById function", () => {
      it("should update user data by it's id from database", async () => {
        // TODO
      });
    });
    describe("getUsersWithBalance function", () => {
      it("should fetch users data with balance from database", async () => {
        // TODO
      });
    });
  });
});
