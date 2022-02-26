class ContextRepository {
  async addContext({ deskripsi, jumlah, userId }) {
    throw new Error("CONTEXT_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getContexts() {
    throw new Error("CONTEXT_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getContextsByUserId(userId) {
    throw new Error("CONTEXT_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async setLunasById(id) {
    throw new Error("CONTEXT_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
  
  async deleteContextById(id) {
    throw new Error("CONTEXT_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}
module.exports = ContextRepository;
