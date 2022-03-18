const LoanRepository = require("../LoanRepository");

describe("Loan Repository", () => {
  it("should throw error when not implemented", () => {
    const loanRepo = new LoanRepository();
    expect(loanRepo.addLoan({})).rejects.toThrowError(
      "LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(loanRepo.getLoans("")).rejects.toThrowError(
      "LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(loanRepo.getLoanById("")).rejects.toThrowError(
      "LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(loanRepo.getLoansByUserId("")).rejects.toThrowError(
      "LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(loanRepo.setPaidOffById("")).rejects.toThrowError(
      "LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
    expect(loanRepo.deleteLoanById("")).rejects.toThrowError(
      "LOAN_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
  });
});
