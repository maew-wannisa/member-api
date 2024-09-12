const express = require("express");
const morgan = require("cors");
const cors = require("cors");
const bodyParse = require("body-parser");
const { readdirSync } = require("fs");

const connectDB = require("./config/db");

const port = 3000;
const app = express();

connectDB();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParse.json({ limit: "10mb" }));
app.use(express.json());

readdirSync("./routes").map((file) => {
  return app.use("/api", require("./routes/" + file));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
