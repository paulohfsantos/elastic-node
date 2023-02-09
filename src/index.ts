import { config } from "dotenv";
import { router } from "./routes/";
import express from "express";

config();

const app = express();
app.use(express.json());

app.use("/api/elastic", router);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
