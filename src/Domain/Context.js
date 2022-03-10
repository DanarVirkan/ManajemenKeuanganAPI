class Context {
  constructor(payload) {
    const { contextId, userId, nama, deskripsi, jumlah, terbayar, lunas } =
      payload;
    // this._verifyPayload(payload);

    this.contextId = contextId;
    this.userId = userId;
    this.nama = nama;
    this.deskripsi = deskripsi;
    this.jumlah = jumlah;
    this.terbayar = terbayar;
    this.lunas = lunas;
  }
  _verifyPayload({ contextId, userId, deskripsi, jumlah, lunas }) {
    if (!contextId || !userId || !deskripsi) {
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
