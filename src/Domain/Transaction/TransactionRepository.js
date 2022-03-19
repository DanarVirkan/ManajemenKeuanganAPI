class TransactionRepository {
  async addTransaction({ description, total, transactionType, userId }) {
    throw new Error("TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getTransactions() {
    throw new Error("TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getTransactionTotalMonthly(transactionType) {
    throw new Error("TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getTransactionByUserId(userId) {
    throw new Error("TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getPaidByLoanId(contextId) {
    throw new Error("TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getTransactionByMonth(date) {
    throw new Error("TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}
module.exports = TransactionRepository;
