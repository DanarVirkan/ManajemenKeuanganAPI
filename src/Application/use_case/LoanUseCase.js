const Loan = require("../../Domain/Loan/entities/Loan");

class LoanUseCase {
  constructor({ loanRepository, usersRepository, transactionRepository }) {
    this._loanRepository = loanRepository;
    this._usersRepository = usersRepository;
    this._transactionRepository = transactionRepository;
  }

  async addContext({ deskripsi, jumlah, userId }) {
    const contextId = await this._loanRepository.addLoan({
      deskripsi,
      jumlah,
      userId,
    });
    await this._transactionRepository.addTransaction({
      deskripsi: "Transaksi hutang " + deskripsi,
      jumlah,
      tipe: "OUT",
      userId,
      contextId,
    });
    return contextId;
  }

  async getContexts() {
    const contexts = await this._loanRepository.getLoans();
    return contexts.map((payload) => {
      return new Loan({
        ...payload,
        loanId: payload.id,
        name: payload.nama_user,
        description: payload.deskripsi,
        total: payload.jumlah,
        paid: payload.terbayar,
        paidOff: payload.lunas,
      });
    });
  }

  async getSisaPembayaran(contextId) {
    const hutang = await this._loanRepository.getLoanById(contextId);
    const terbayar = await this._transactionRepository.getPaidByLoanId(
      contextId
    );
    return hutang.jumlah - (terbayar || 0);
  }

  async getContextsByUserId(userId) {
    const contexts = await this._loanRepository.getLoansByUserId(userId);
    return contexts.map(
      (payload) =>
        new Loan({
          ...payload,
          loanId: payload.id,
          name: payload.nama_user,
          description: payload.deskripsi,
          total: payload.jumlah,
          paid: payload.terbayar,
          paidOff: payload.lunas,
        })
    );
  }

  async setLunasById(id) {
    return this._loanRepository.setPaidOffById(id);
  }

  async deleteContextById(id) {
    return this._loanRepository.deleteLoanById(id);
  }
}
module.exports = LoanUseCase;
