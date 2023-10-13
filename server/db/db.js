import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config({path:'dev.env'});

export const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

export async function testConnection() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database in db.js:", error);
  }
}

export default sequelize;

