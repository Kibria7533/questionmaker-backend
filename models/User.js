const bcrypt = require("bcrypt");
const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      }
    ],
  },
  { timestamps: true }
);

// register
UserSchema.statics.register = async function (
  firstName,
  middleName,
  lastName,
  mobile,
  email,
  password
) {
  if (
    !firstName ||
    !middleName ||
    !lastName ||
    !email ||
    !mobile ||
    !password
  ) {
    throw new Error("Must fill name, email,password");
  }
  console.log(firstName, middleName, lastName, mobile, email, password);
  const existingUser = await this.findOne({ email });

  if (existingUser) {
    throw new Error("Email already exist");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Password must 8+ charm contains uppercase lowercase, number and special char"
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({
    firstName,
    middleName,
    lastName,
    mobile,
    email,
    password: hash,
  });
  return user;
};

// login method
UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("Must fill email and password");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Incorrect email or password");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Incorrect email or password");
  }

  return user;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
