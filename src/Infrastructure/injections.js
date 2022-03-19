const pool = require("./database/postgress/pool");
const { nanoid } = require("nanoid");

const UsersRepositoryPostgres = require("./repository/UsersRepositoryPostgres");
const LoanRepositoryPostgres = require("./repository/LoanRepositoryPostgres");
const TransactionRepositoryPostgres = require("./repository/TransactionRepositoryPostgres");

const UsersUseCase = require("../Application/use_case/UsersUseCase");
const LoanUseCase = require("../Application/use_case/LoanUseCase");
const TransactionUseCase = require("../Application/use_case/TransactionUseCase");

const serviceInstance = {
  usersRepository: new UsersRepositoryPostgres(pool, nanoid),
  loanRepository: new LoanRepositoryPostgres(pool, nanoid),
  transactionRepository: new TransactionRepositoryPostgres(pool, nanoid),
};

const useCaseInstance = {
  usersUseCase: new UsersUseCase({
    usersRepository: serviceInstance.usersRepository,
  }),
  contextUseCase: new LoanUseCase({
    loanRepository: serviceInstance.loanRepository,
    usersRepository: serviceInstance.usersRepository,
    transactionRepository: serviceInstance.transactionRepository,
  }),
  transaksiUseCase: new TransactionUseCase({
    usersRepository: serviceInstance.usersRepository,
    transactionRepository: serviceInstance.transactionRepository,
    loanRepository: serviceInstance.loanRepository,
  }),
};

module.exports = {
  ...serviceInstance,
  ...useCaseInstance,
};
