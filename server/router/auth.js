const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");

require("../db/conn");

router.get("/", (req, res) => {
  res.send(`Hello world from the server router js`);
  console.log("hello world");
});

router.post("/register", async (req, res) => {
  console.log("from auth.js", req.body);

  // const name = req.body.name;// this is a headtack, repeatitive way to for taking valuees of input
  const { name, email, phone, work, password, cpassword } = req.body; //08.00

  if (!name || !email || !phone || !work || !password || !cpassword) {
    //validation -> if not filed any feild then
    return res.status(422).json({ error: "Plz fill the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      //user aleardy exist then send error
      return res.status(422).json({ error: "Email already Exist " });
    }
    //if user is not exist, means they haven't register prior so we need to create there document in the collection
    const user = new User({ name, email, phone, work, password, cpassword }); //19.10

    //after geting the user's document from above we need to save it in the collections
    const userRegister = await user.save();

    if (userRegister) {
      res.status(201).json({ message: "user registered successfuly" });
    } else {
      res.status(500).json({ error: "Failed to registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      //if email or password are wrong then fill the form again
      return res.status(400).json({ error: "plz fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);

    if (!userLogin) {
      return res.status(400).json({ error: "Email already Exist" });
    } else {
      res.status(201).json({ message: "user registered successfuly" });
    }
    // const user = new User({ name, email, phone, work, password, cpassword });
    // await user.save();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;