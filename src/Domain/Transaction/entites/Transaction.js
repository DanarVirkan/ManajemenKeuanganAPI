class Transaction {
  constructor(payload) {
    const {
      transactionId,
      name,
      loanDescription,
      description,
      total,
      transactionType,
      date,
    } = payload;
    this._verifyPayload(payload);

    this.transactionId = transactionId;
    this.name = name;
    if (loanDescription) {
      this.loanDescription = loanDescription;
    }
    this.description = description;
    this.total = total;
    this.transactionType = transactionType;
    this.date = date;
  }
  _verifyPayload({
    transactionId,
    name,
    description,
    total,
    transactionType,
    date,
  }) {
    if (
      !transactionId ||
      !name ||
      !description ||
      total === undefined ||
      !transactionType ||
      !date
    ) {
      throw new Error("TRANSACTION.NOT_CONTAIN_NEEDED_PROPERTY");
    }
    if (
      typeof transactionId !== "string" ||
      typeof name !== "string" ||
      typeof description !== "string" ||
      typeof total !== "number" ||
      typeof transactionType !== "string" ||
      typeof date !== "string"
    ) {
      throw new Error("TRANSACTION.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
module.exports = Transaction;
