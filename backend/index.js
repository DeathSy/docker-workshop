const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send({ status: "OK" });
});

app.listen(PORT, () =>
  console.log(`express server is running on: http://localhost:${PORT}`)
);
