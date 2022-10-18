const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HOLA MUNDO");
});

app.listen(3000, () => console.log("En el servidor 3000"));
