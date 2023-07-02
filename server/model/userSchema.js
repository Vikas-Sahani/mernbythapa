const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    //12.30
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//we are hashing the password
userSchema.pre("save", async function (next) {
  if (this.isModified()) {
    // agr user apne psword ko change karta h to hi change ho other wise agr save() method call ho to password change na ho
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// we are generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let tokenVikas = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: tokenVikas });
    await this.save();
    return tokenVikas;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("USER", userSchema);

module.exports = User;
