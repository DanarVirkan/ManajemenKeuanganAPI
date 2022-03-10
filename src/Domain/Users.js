class Users {
  constructor(payload) {
    const { userId, nama, balance } = payload;
    this._verifyPayload(payload);

    this.userId = userId;
    this.nama = nama;
    this.balance = balance;
  }
  _verifyPayload({ userId, nama, balance }) {
    if (!userId || !nama ) {
      throw new Error("USERS.NOT_CONTAIN_NEEDED_PROPERTY");
    }
    if (
      typeof userId !== "string" ||
      typeof nama !== "string" ||
      typeof balance !== "number"
    ) {
      throw new Error("USERS.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
module.exports = Users;
