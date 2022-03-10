class TransaksiRepository {
  async addTransaksi({ deskripsi, jumlah, tipe, userId }) {
    throw new Error("TRANSAKSI_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getTransaksis() {
    throw new Error("TRANSAKSI_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getTransaksiTotalMonthly(tipe) {
    throw new Error("TRANSAKSI_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getTransaksiByUserId(userId) {
    throw new Error("TRANSAKSI_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getTerbayarByContextId(contextId) {
    throw new Error("TRANSAKSI_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getTransaksiByMonth(date) {
    throw new Error("TRANSAKSI_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}
module.exports = TransaksiRepository;
