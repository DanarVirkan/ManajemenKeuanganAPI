const pool = require("../../database/postgress/pool");
const TransactionRepository = require("../../../Domain/Transaction/TransactionRepository");
const TransactionRepositoryPostgres = require("../TransaksiRepositoryPostgres");

describe("TransactionRepositoryPostgres", () => {
  it("should instance of TransaksiRepository", () => {
    const repo = new TransactionRepositoryPostgres({}, {});
    expect(repo).toBeInstanceOf(TransactionRepository);
  });

  describe("behaviour test", () => {
    afterEach(async () => {
      // TODO
    });
    afterAll(async () => {
      await pool.end();
    });
    describe("addTransaction function", () => {
      it("should add transaction to database", async () => {
        // TODO
      });
    });
    describe("getTransactions function", () => {
      it("should fetch transactions data from database", async () => {
        // TODO
      });
    });
    describe("getTransactionTotalMonthly function", () => {
      it("should fetch transaction total monthly from database", async () => {
        // TODO
      });
    });
    describe("getTransactionByUserId function", () => {
      it("should fetch transactions data by it's userId from database", async () => {
        // TODO
      });
    });
    describe("getPaidByLoanId function", () => {
      it("should fetch transactions where the type is IN by it's loanId from database", async () => {
        // TODO
      });
    });
    describe("getTransactionByMonth function", () => {
      it("should fetch transactions data by month from database", async () => {
        // TODO
      });
    });
  });
});
