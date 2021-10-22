import "./Admin";
import "./Car";
import "./Event";
import "./Map";
import "./Season";
import sequelize from "./db";

sequelize.sync({ alter: true }).then(() => console.log("modules sync"));
