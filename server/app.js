const dotenv = require("dotenv");
const express = require("express");
// const mongoose = require("mongoose");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");
app.use(express.json());
//we link the router files to make our route easy
app.use(require("./router/auth"));

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Hello world from the app.js server`);
});

app.get("/about", (req, res) => {
  res.send(`Hello about world from the server`);
});

app.get("/contact", (req, res) => {
  res.send(`Hello contact world from the `);
});

app.get("/signin", (req, res) => {
  res.send(`Hello signin world from the `);
});

app.get("/signup", (req, res) => {
  res.send(`Hello signup world from the `);
});
app.post("/register", (req, res) => {
  console.log("from app.js", req.body);
});

app.listen(port, () => {
  console.log(`server is running at port No. ${port}`);
});
