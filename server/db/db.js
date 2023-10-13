import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "misfit",
  port: 5432,
  database: "todo_db",
});

export default async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection to db has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}


