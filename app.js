const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT
const app = express();

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "Hello World"
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.listen(PORT,() => {
  console.log(`server is listening at http://localhost:${PORT}`);
});
