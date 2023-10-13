import express from "express";
import Item from "../db/models/Item.js";

const router = express.Router();

//get all items from todo database
router.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const newItem = await Item.create({ title });
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
