const pool = require("../../database/postgress/pool");
const LoanRepository = require("../../../Domain/Loan/LoanRepository");
const LoanRepositoryPostgres = require("../LoanRepositoryPostgres");

describe("LoanRepositoryPostgres", () => {
  it("should instance of LoanRepository", () => {
    const repo = new LoanRepositoryPostgres({}, {});
    expect(repo).toBeInstanceOf(LoanRepository);
  });

  describe("behaviour test", () => {
    afterEach(async () => {
      // TODO
    });
    afterAll(async () => {
      await pool.end();
    });
    describe("addLoan function", () => {
      it("should add loan to database", async () => {
        // TODO
      });
    });
    describe("getLoans function", () => {
      it("should fetch loans data from database", async () => {
        // TODO
      });
    });
    describe("getLoanById function", () => {
      it("should fetch loan data by it's id from database", async () => {
        // TODO
      });
    });
    describe("getLoansByUserId function", () => {
      it("should fetch loans data by it's userId from database", async () => {
        // TODO
      });
    });
    describe("setPaidOffById function", () => {
      it("should update loan data to be paidOff by it's id from database", async () => {
        // TODO
      });
    });
    describe("deleteLoanById function", () => {
      it("should delete loan data by it's id from database", async () => {
        // TODO
      });
    });
  });
});
