import express from "express";
import { testDbConnection } from "./db/db.js";
import Item from "./db/models/Item.js";

const app = express();
const port = 3005;

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cannot retrieve items from the database" });
  }
});

app.post("/", async (req, res) => {
  try {
    Item.sync();
    const newItem = await Item.create({
      title: req.body.title,
    });
    res.status(200).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cannot create new item in the database" });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    await Item.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Item has been deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cannot delete item from the database" });
  }
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
  testDbConnection();
});
