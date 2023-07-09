const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

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

router.post("/login", async (req, res) => {
  // console.log(req.body);
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      //if email or password are wrong then fill the form again
      return res
        .status(400)
        .json({ error: "plz fill the correct infromation" });
    }
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log("from auth.js -> ", token);

      //storing the token(named -> jwtoken) in side browser
      res.cookie("jwtoken", token, {
        //2.30
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true, //5.10
      });

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Cridentials due to P" });
      } else {
        res.status(201).json({ message: "user login successfuly" });
      }
    } else {
      res.status(400).json({ error: "Invalid Cridentials due to E" });
    }

    // const user = new User({ name, email, phone, work, password, cpassword });
    // await user.save();
  } catch (err) {
    console.log(err);
  }
});

// about us ka page
router.get("/about", authenticate, (req, res) => {
  console.log("hello my about");
  res.send(req.rootUser);
});

// get user data for contact us & home page
router.get("/getdata", authenticate, (req, res) => {
  console.log("hello my contact-us");
  res.send(req.rootUser);
});

//contact us page's router
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    res.json({ msg: message });
    //this is used here to check that is msg comming from frontend or not?

    if (!name || !email || !phone || !message) {
      console.log("error in contact form");
      return res.json({ error: "pls fill the contact form" });
    }

    const userContact = await User.findOne({ _id: req.userId });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      // now we need to define this addMessage() method in userSchema.js

      await userContact.save();
      res.status(201).json({ message: "user Contact-us successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

//Logout page
router.get("/logout", (req, res) => {
  console.log("Logout:- Hello my logout page");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).json({ message: "User logout successful" });
});

module.exports = router;
