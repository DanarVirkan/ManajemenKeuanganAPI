const Transaction = require("../../Domain/Transaction/entites/Transaction");

class TransactionUseCase {
  constructor({ usersRepository, transactionRepository, loanRepository }) {
    this._usersRepository = usersRepository;
    this._transactionRepository = transactionRepository;
    this._loanRepository = loanRepository;
  }

  async addTransaksi(payload) {
    const { contextId, jumlah } = payload;
    if (contextId) {
      const hutang = await this._loanRepository.getLoanById(contextId);
      const terbayar = await this._transactionRepository.getPaidByLoanId(
        contextId
      );
      const sisa = hutang.jumlah - (terbayar || 0);
      if (sisa == jumlah) {
        await this._loanRepository.setPaidOffById(contextId);
      }
      return this._transactionRepository.addTransaction(payload);
    }
    return this._transactionRepository.addTransaction(payload);
  }

  async getTransaksis() {
    const transaksis = await this._transactionRepository.getTransactions();
    return transaksis.map((payload) => {
      return new Transaction({
        transactionId: payload.id,
        name: payload.nama_user,
        loanDescription: payload.deskripsi_context,
        description: payload.deskripsi,
        total: payload.jumlah,
        transactionType: payload.tipe,
        date: payload.tgl.toISOString(),
        ...payload,
      });
    });
  }

  async getTransaksiTotalMonthly(tipe = null) {
    if (tipe) {
      return this._transactionRepository.getTransactionTotalMonthly(tipe);
    }
    return (
      (await this._transactionRepository.getTransactionTotalMonthly("IN")) -
      (await this._transactionRepository.getTransactionTotalMonthly("OUT"))
    );
  }

  async getTransaksiByUserId(userId) {
    const transaksis = await this._transactionRepository.getTransactionByUserId(
      userId
    );
    return transaksis.map(
      (payload) =>
        new Transaction({
          transactionId: payload.id,
          name: payload.nama_user,
          loanDescription: payload.deskripsi_context,
          description: payload.deskripsi,
          total: payload.jumlah,
          transactionType: payload.tipe,
          date: payload.tgl.toISOString(),
          ...payload,
        })
    );
  }

  async getTransaksiByMonth(date) {
    const transaksis = await this._transactionRepository.getTransactionByMonth(
      date
    );
    return transaksis.map(
      (payload) =>
        new Transaction({
          transactionId: payload.id,
          name: payload.nama_user,
          loanDescription: payload.deskripsi_context,
          description: payload.deskripsi,
          total: payload.jumlah,
          transactionType: payload.tipe,
          date: payload.tgl.toISOString(),
          ...payload,
        })
    );
  }
}
module.exports = TransactionUseCase;
