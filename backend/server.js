const express = require("express");
const app = express();
const chats = require("./data/data");
require("dotenv").config();
const PORTNO = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const response = chats.find((c) => c._id === req.params.id);
  res.send(response);
});

app.listen(PORTNO, console.log(`Server is running on PORT ${PORTNO}`));
