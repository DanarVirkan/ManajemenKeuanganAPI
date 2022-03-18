const TransactionRepository = require("../TransactionRepository");

describe("Transaction Repository", () => {
  it("should throw error when not implemented", () => {
    const transactionRepo = new TransactionRepository();
    expect(transactionRepo.addTransaction({})).rejects.toThrowError(
      "TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(transactionRepo.getTransactions()).rejects.toThrowError(
      "TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(transactionRepo.getTransactionTotalMonthly("")).rejects.toThrowError(
      "TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(transactionRepo.getTransactionByUserId("")).rejects.toThrowError(
      "TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(transactionRepo.getPaidOffByLoanId("")).rejects.toThrowError(
      "TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(transactionRepo.getTransactionByMonth("")).rejects.toThrowError(
      "TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
  });
});
