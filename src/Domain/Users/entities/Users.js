class Users {
  constructor(payload) {
    const { userId, name, balance } = payload;
    this._verifyPayload(payload);

    this.userId = userId;
    this.name = name;
    this.balance = balance;
  }
  _verifyPayload({ userId, name, balance }) {
    if (!userId || !name || balance === undefined) {
      throw new Error("USERS.NOT_CONTAIN_NEEDED_PROPERTY");
    }
    if (
      typeof userId !== "string" ||
      typeof name !== "string" ||
      typeof balance !== "number"
    ) {
      throw new Error("USERS.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
module.exports = Users;
