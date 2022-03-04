class ContextHandler {
  constructor({ contextUseCase }) {
    this._contextUseCase = contextUseCase;

    this.postContext = this.postContext.bind(this);
    this.getContexts = this.getContexts.bind(this);
    this.getContextsByUserId = this.getContextsByUserId.bind(this);
    this.updateContextLunas = this.updateContextLunas.bind(this);
    this.deleteContextById = this.deleteContextById.bind(this);
  }

  async postContext(req, h) {
    const { deskripsi, jumlah, userId } = req.payload;
    const contextId = await this._contextUseCase.addContext({
      deskripsi,
      jumlah,
      userId,
    });
    return h
      .response({
        message: "success",
        data: {
          contextId,
        },
      })
      .code(201);
  }

  async getContexts(_, h) {
    const contexts = await this._contextUseCase.getContexts();
    return h
      .response({
        message: "success",
        data: {
          contexts,
        },
      })
      .code(200);
  }

  async getContextsByUserId(req, h) {
    const { userId } = req.params;
    const contexts = await this._contextUseCase.getContextsByUserId(userId);
    return h
      .response({
        message: "success",
        data: {
          contexts,
        },
      })
      .code(200);
  }

  async updateContextLunas(req, h) {
    const { contextId } = req.params;
    const context = await this._contextUseCase.setLunasById(contextId);
    return h
      .response({
        message: "success",
        data: {
          contextId: context,
        },
      })
      .code(200);
  }

  async deleteContextById() {
    const { contextId } = req.params;
    const context = await this._contextUseCase.deleteContextById(contextId);
    return h
      .response({
        message: "success",
        data: {
          contextId: context,
        },
      })
      .code(200);
  }
}

module.exports = ContextHandler;
