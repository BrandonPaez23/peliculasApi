import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = process.env.NAME_DB;
const user = process.env.USER_DB;
const pass = process.env.PASSWORD_DB;

const base = new Sequelize(db, user, pass, {
  dialect: "mysql",
  host: process.env.HOST_DB,
  port: +process.env.PORT_DB,
  logging: false,
});

export default base;
