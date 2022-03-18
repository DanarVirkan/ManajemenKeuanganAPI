const Users = require("../Users");

describe("Users entites", () => {
  it("should throw error when not contain needed property", () => {
    const payload = {
      userId: "user-123",
    };
    expect(() => new Users(payload)).toThrowError(
      "USERS.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });
  it("should throw error when not meet data type specification", () => {
    const payload = {
      userId: "user-123",
      name: "John Doe",
      balance: "0",
    };
    expect(() => new Users(payload)).toThrowError(
      "USERS.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });
  it("should not throw error when data inputted correctly", () => {
    const payload = {
      userId: "user-123",
      name: "John Doe",
      balance: 0,
    };
    expect(() => new Users(payload)).not.toThrowError(
      "USERS.NOT_CONTAIN_NEEDED_PROPERTY"
    );
    expect(() => new Users(payload)).not.toThrowError(
      "USERS.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });
});
