import { Sequelize } from "sequelize";

const sequelize = new Sequelize("a9infodb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  // logging: (msg) => {
  //   sqlLogger.debug(msg);
  // },
});

export default sequelize;
