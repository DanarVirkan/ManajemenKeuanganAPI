class LoanRepository {
  async addLoan({ description, total, userId }) {
    throw new Error("LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getLoans(paidOff) {
    throw new Error("LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getLoanById(id) {
    throw new Error("LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getLoansByUserId(userId) {
    throw new Error("LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async setPaidOffById(id) {
    throw new Error("LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async deleteLoanById(id) {
    throw new Error("LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}
module.exports = LoanRepository;
