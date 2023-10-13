import express from "express";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();
const port = 3005;

app.use('api/items', itemRoutes);

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

