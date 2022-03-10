class TransaksiHandler {
  constructor({ transaksiUseCase }) {
    this._transaksiUseCase = transaksiUseCase;

    this.postTransaksi = this.postTransaksi.bind(this);
    this.getTransaksis = this.getTransaksis.bind(this);
    this.getTransaksiTotalIn = this.getTransaksiTotalIn.bind(this);
    this.getTransaksiTotalOut = this.getTransaksiTotalOut.bind(this);
    this.getTransaksiTotal = this.getTransaksiTotal.bind(this);
    this.getTransaksiByUserId = this.getTransaksiByUserId.bind(this);
  }

  async postTransaksi(req, h) {
    const transaksiId = await this._transaksiUseCase.addTransaksi(req.payload);
    return h
      .response({
        message: "success",
        data: {
          transaksiId,
        },
      })
      .code(201);
  }

  async getTransaksis(_, h) {
    const transaksis = await this._transaksiUseCase.getTransaksis();
    return h
      .response({
        message: "success",
        data: {
          transaksis,
        },
      })
      .code(200);
  }

  async getTransaksiTotalIn(_, h) {
    const total = await this._transaksiUseCase.getTransaksiTotalMonthly("IN");
    return h
      .response({
        message: "success",
        data: {
          total,
        },
      })
      .code(200);
  }

  async getTransaksiTotalOut(_, h) {
    const total = await this._transaksiUseCase.getTransaksiTotalMonthly("OUT");
    return h
      .response({
        message: "success",
        data: {
          total,
        },
      })
      .code(200);
  }

  async getTransaksiTotal(_, h) {
    const total = await this._transaksiUseCase.getTransaksiTotalMonthly();
    return h
      .response({
        message: "success",
        data: {
          total,
        },
      })
      .code(200);
  }

  async getTransaksiByUserId(req, h) {
    const { userId } = req.params;
    const transaksis = await this._transaksiUseCase.getTransaksiByUserId(
      userId
    );
    return h
      .response({
        message: "success",
        data: {
          transaksis,
        },
      })
      .code(200);
  }
}
module.exports = TransaksiHandler;
