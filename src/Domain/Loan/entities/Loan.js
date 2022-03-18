class Loan {
  constructor(payload) {
    const { loanId, name, description, total, paid, paidOff } = payload;

    this._verifyPayload(payload);
    this.loanId = loanId;
    this.name = name;
    this.description = description;
    this.total = total;
    this.paid = paid;
    this.paidOff = paidOff;
  }

  _verifyPayload({ loanId, name, description, total, paid, paidOff }) {
    if (
      !loanId ||
      !name ||
      !description ||
      total === undefined ||
      paid === undefined ||
      paidOff === undefined
    ) {
      throw new Error("PIUTANG.NOT_CONTAIN_NEEDED_PROPERTY");
    }
    if (
      typeof loanId !== "string" ||
      typeof name !== "string" ||
      typeof description !== "string" ||
      typeof total !== "number" ||
      typeof paid !== "number" ||
      typeof paidOff !== "boolean"
    ) {
      throw new Error("PIUTANG.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
module.exports = Loan;
