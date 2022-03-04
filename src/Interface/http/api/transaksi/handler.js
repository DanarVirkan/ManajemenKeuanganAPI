class TransaksiHandler {
  constructor({ transaksiUseCase }) {
    this._transaksiUseCase = transaksiUseCase;
  }

  async postTransaksi(req, h) {
    const { deskripsi, jumlah, tipe, userId } = req.payload;
    const transaksiId = await this._transaksiUseCase.addTransaksi({
      deskripsi,
      jumlah,
      tipe,
      userId,
    });
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
