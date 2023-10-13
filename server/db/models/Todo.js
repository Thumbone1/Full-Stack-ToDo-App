import { DataTypes } from "sequelize";
import { sequelize } from "../db";

const Item = sequelize.define("item", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Item;