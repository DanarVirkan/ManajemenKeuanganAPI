const Context = require("../../Domain/Context");

class ContextUseCase {
  constructor({ contextRepository }) {
    this._contextRepository = contextRepository;
  }

  async addContext({ deskripsi, jumlah, userId }) {
    return this._contextRepository.addContext({ deskripsi, jumlah, userId });
  }

  async getContexts() {
    const contexts = await this._contextRepository.getContexts();
    return contexts.map(
      (payload) =>
        new Context({
          ...payload,
          contextId: payload.id,
          userId: payload.user_id,
        })
    );
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
