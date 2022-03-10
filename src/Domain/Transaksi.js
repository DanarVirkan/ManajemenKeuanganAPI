class Transaksi {
  constructor(payload) {
    const {
      transaksiId,
      deskripsi,
      jumlah,
      tipe,
      namaUser,
      tgl,
      deskripsiContext,
    } = payload;
    // this._verifyPayload(payload);

    this.transaksiId = transaksiId;
    if (deskripsiContext) {
      this.deskripsiContext = deskripsiContext;
    }
    this.deskripsi = deskripsi;
    this.jumlah = jumlah;
    this.tipe = tipe;
    this.namaUser = namaUser;
    this.tgl = tgl;
  }
  _verifyPayload({ transaksiId, deskripsi, jumlah, tipe, namaUser, tgl }) {
    if (
      !transaksiId ||
      !deskripsi ||
      jumlah !== undefined ||
      !tipe ||
      !namaUser ||
      !tgl
    ) {
      throw new Error("TRANSAKSI.NOT_CONTAIN_NEEDED_PROPERTY");
    }
    if (
      typeof transaksiId !== "string" ||
      typeof deskripsi !== "string" ||
      typeof jumlah !== "number" ||
      typeof tipe !== "string" ||
      typeof namaUser !== "string" ||
      typeof tgl !== "string"
    ) {
      throw new Error("TRANSAKSI.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
module.exports = Transaksi;
