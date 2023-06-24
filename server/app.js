const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const db =
  "mongodb+srv://vikassahani1110:z29OCPxXAOHGbT2j@cluster0.yn7fin3.mongodb.net/mernstack?retryWrites=true&w=majoritymongodb+srv://<username>:<password>@cluster0.yn7fin3.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db)
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(`no connection`));

app.get("/", (req, res) => {
  res.send(`Hello world from the server`);
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

app.listen(3000, () => {
  console.log(`server is running at port No. 3000`);
});
