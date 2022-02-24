class Context {
  constructor(payload) {
    const { contextId, userId, deskripsi, jumlah, lunas } = payload;
    this._verifyPayload(payload);

    this.contextId = contextId;
    this.userId = userId;
    this.deskripsi = deskripsi;
    this.jumlah = jumlah;
    this.lunas = lunas;
  }
  _verifyPayload({ contextId, userId, deskripsi, jumlah, lunas }) {
    if (
      !contextId ||
      !userId ||
      !deskripsi ||
      jumlah !== undefined ||
      lunas !== undefined
    ) {
      throw new Error("CONTEXT.NOT_CONTAIN_NEEDED_PROPERTY");
    }
    if (
      typeof contextId !== "string" ||
      typeof userId !== "string" ||
      typeof deskripsi !== "string" ||
      typeof jumlah !== "number" ||
      typeof lunas !== "boolean"
    ) {
      throw new Error("CONTEXT.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
module.exports = Context;
