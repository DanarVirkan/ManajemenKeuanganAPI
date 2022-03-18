const Transaction = require("../Transaction");

describe("Transaction entites", () => {
  it("should throw error when not contain needed property", () => {
    const payload = {
      transactionId: "tr-123",
      name: "Peno",
      loanDescription: "Pulsa 10k",
      description: "Bayar 4k",
    };
    expect(() => new Transaction(payload)).toThrowError(
      "TRANSACTION.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });
  it("should throw error when not meet data type specification", () => {
    const payload = {
      transactionId: "tr-123",
      name: "Peno",
      loanDescription: "Pulsa 10k",
      description: "Bayar 4k",
      total: "4000",
      transactionType: "IN",
      date: "2017-10-10T14:00:00",
    };
    expect(() => new Transaction(payload)).toThrowError(
      "TRANSACTION.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });
  it("should not throw error when data inputted correctly", () => {
    const payload = {
      transactionId: "tr-123",
      name: "Peno",
      loanDescription: "Pulsa 10k",
      description: "Bayar 4k",
      total: 4000,
      transactionType: "IN",
      date: "2017-10-10T14:00:00",
    };
    expect(() => new Transaction(payload)).not.toThrowError(
      "TRANSACTION.NOT_CONTAIN_NEEDED_PROPERTY"
    );
    expect(() => new Transaction(payload)).not.toThrowError(
      "TRANSACTION.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });
});
