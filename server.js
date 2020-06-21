const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Taufi's erver running on port 8080");
});

app.get("/health", (req, res, next) => {
  res.status(200).send("Hallo Taufi!");
});

