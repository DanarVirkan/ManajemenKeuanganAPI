const Context = require("../../Domain/Context");

class ContextUseCase {
  constructor({ contextRepository, usersRepository, transaksiRepository }) {
    this._contextRepository = contextRepository;
    this._usersRepository = usersRepository;
    this._transaksiRepository = transaksiRepository;
  }

  async addContext({ deskripsi, jumlah, userId }) {
    const contextId = await this._contextRepository.addContext({
      deskripsi,
      jumlah,
      userId,
    });
    await this._transaksiRepository.addTransaksi({
      deskripsi: "Transaksi hutang " + deskripsi,
      jumlah,
      tipe: "OUT",
      userId,
      contextId,
    });
    return;
  }

  async getContexts() {
    const contexts = await this._contextRepository.getContexts();
    return Promise.all(
      contexts.map(async (payload) => {
        const user = await this._usersRepository.getUserById(payload.user_id);
        const total = await this._transaksiRepository.getTerbayarByContextId(
          payload.id
        );
        return new Context({
          ...payload,
          contextId: payload.id,
          userId: payload.user_id,
          terbayar: total,
          nama: user.nama,
        });
      })
    );
  }

  async getSisaPembayaran(contextId) {
    const hutang = await this._contextRepository.getContextById(contextId);
    const terbayar = await this._transaksiRepository.getTerbayarByContextId(
      contextId
    );
    return hutang.jumlah - (terbayar || 0);
  }

  async getContextsByUserId(userId) {
    const contexts = await this._contextRepository.getContextsByUserId(userId);
    return contexts.map(
      (payload) =>
        new Context({
          ...payload,
          contextId: payload.id,
          userId: payload.user_id,
        })
    );
  }

  async setLunasById(id) {
    return this._contextRepository.setLunasById(id);
  }

  async deleteContextById(id) {
    return this._contextRepository.deleteContextById(id);
  }
}
module.exports = ContextUseCase;
