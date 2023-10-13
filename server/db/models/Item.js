import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Item = sequelize.define("item", {
  title: {
    type: DataTypes.STRING, 
    allowNull: false,
  }
});

export default Item;
