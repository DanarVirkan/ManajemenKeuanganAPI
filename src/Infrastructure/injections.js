const pool = require("./database/postgress/pool");
const { nanoid } = require("nanoid");

const UsersRepositoryPostgres = require("./repository/UsersRepositoryPostgres");
const ContextRepositoryPostgres = require("./repository/ContextRepositoryPostgres");
const TransaksiRepositoryPostgres = require("./repository/TransaksiRepositoryPostgres");

const UserUseCase = require("../Application/use_case/UserUseCase");
const ContextUseCase = require("../Application/use_case/ContextUseCase");
const TransaksiUseCase = require("../Application/use_case/TransaksiUseCase");

const serviceInstance = {
  usersRepository: new UsersRepositoryPostgres(pool, nanoid),
  contextRepository: new ContextRepositoryPostgres(pool, nanoid),
  transaksiRepository: new TransaksiRepositoryPostgres(pool, nanoid),
};

const useCaseInstance = {
  usersUseCase: new UserUseCase({
    usersRepository: serviceInstance.usersRepository,
  }),
  contextUseCase: new ContextUseCase({
    contextRepository: serviceInstance.contextRepository,
  }),
  transaksiUseCase: new TransaksiUseCase({
    transaksiRepository: serviceInstance.transaksiRepository,
  }),
};

module.exports = {
  ...serviceInstance,
  ...useCaseInstance,
};
