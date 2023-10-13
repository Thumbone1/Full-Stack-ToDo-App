import bodyParser from "body-parser";
import express from "express";
import testConnection from "./db/db.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Express server running on port ${port}!`);
});

testConnection()
  .then(() => {
    //test express server code
    console.log("Testing connection Express server running on port 3000!");
  })
  .catch((err) => {
    console.error("database connection failed", err);
  });
