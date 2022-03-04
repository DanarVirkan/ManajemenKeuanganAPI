const Transaksi = require("../../Domain/Transaksi");

class TransaksiUseCase {
  constructor({ transaksiRepository }) {
    this._transaksiRepository = transaksiRepository;
  }

  async addTransaksi({ deskripsi, jumlah, tipe, userId }) {
    return this._transaksiRepository.addTransaksi({
      deskripsi,
      jumlah,
      tipe,
      userId,
    });
  }

  async getTransaksis() {
    const transaksis = await this._transaksiRepository.getTransaksis();
    return transaksis.map(
      (payload) =>
        new Transaksi({
          transaksiId: payload.id,
          ...payload,
        })
    );
  }

  async getTransaksiByUserId(userId) {
    const transaksis = await this._transaksiRepository.getTransaksiByUserId(
      userId
    );
    return transaksis.map(
      (payload) =>
        new Transaksi({
          transaksiId: payload.id,
          ...payload,
        })
    );
  }

  async getTransaksiByMonth(date) {
    const transaksis = await this._transaksiRepository.getTransaksiByMonth(
      date
    );
    return transaksis.map(
      (payload) =>
        new Transaksi({
          transaksiId: payload.id,
          ...payload,
        })
    );
  }
}
module.exports = TransaksiUseCase;
