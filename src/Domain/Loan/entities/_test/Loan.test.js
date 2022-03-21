const Loan = require("../Loan");

describe("Loan entites", () => {
  it("should throw error when not contain needed property", () => {
    const payload = {
      loanId: "piutang-123",
      name: "Jono",
      description: "Pulsa 10k",
      total: 12000,
    };
    expect(() => new Loan(payload)).toThrowError(
      "LOAN.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });
  it("should throw error when not meet data type specification", () => {
    const payload = {
      loanId: "piutang-123",
      name: "Jono",
      description: "Pulsa 10k",
      total: "12000",
      paid: 0,
      paidOff: false,
    };
    expect(() => new Loan(payload)).toThrowError(
      "LOAN.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });
  it("should not throw error when data inputted correctly", () => {
    const payload = {
      loanId: "piutang-123",
      name: "Jono",
      description: "Pulsa 10k",
      total: 12000,
      paid: 12000,
      paidOff: true,
    };
    expect(() => new Loan(payload)).not.toThrowError(
      "LOAN.NOT_CONTAIN_NEEDED_PROPERTY"
    );
    expect(() => new Loan(payload)).not.toThrowError(
      "LOAN.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });
});
