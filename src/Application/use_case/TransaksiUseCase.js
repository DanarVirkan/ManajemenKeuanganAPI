const Transaksi = require("../../Domain/Transaksi");

class TransaksiUseCase {
  constructor({ usersRepository, transaksiRepository, contextRepository }) {
    this._usersRepository = usersRepository;
    this._transaksiRepository = transaksiRepository;
    this._contextRepository = contextRepository;
  }

  async addTransaksi(payload) {
    const { contextId, jumlah } = payload;
    if (contextId) {
      const hutang = await this._contextRepository.getContextById(contextId);
      const terbayar = await this._transaksiRepository.getTerbayarByContextId(
        contextId
      );
      const sisa = hutang.jumlah - terbayar;
      if (sisa == jumlah) {
        await this._contextRepository.setLunasById(contextId);
      }
      return this._transaksiRepository.addTransaksi(payload);
    }
    return this._transaksiRepository.addTransaksi(payload);
  }

  async getTransaksis() {
    const transaksis = await this._transaksiRepository.getTransaksis();
    return Promise.all(
      transaksis.map(async (payload) => {
        const user = await this._usersRepository.getUserById(payload.user_id);
        if (payload.context_id) {
          const context = await this._contextRepository.getContextById(
            payload.context_id
          );
          return new Transaksi({
            transaksiId: payload.id,
            deskripsiContext: context.deskripsi,
            namaUser: user.nama,
            ...payload,
          });
        } else {
          return new Transaksi({
            transaksiId: payload.id,
            namaUser: user.nama,
            ...payload,
          });
        }
      })
    );
  }

  async getTransaksiTotalMonthly(tipe = null) {
    if (tipe) {
      return this._transaksiRepository.getTransaksiTotalMonthly(tipe);
    }
    return (
      (await this._transaksiRepository.getTransaksiTotalMonthly("IN")) -
      (await this._transaksiRepository.getTransaksiTotalMonthly("OUT"))
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
