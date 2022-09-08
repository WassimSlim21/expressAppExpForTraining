const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "userName is required"],
  },
  email: {
    type: String,
    required: [true, "email field is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password field is required"],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: null,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});

const validate = (user) => {
  const schema = Joi.object({
    username: Joi.string().required("userName is required"),
    email: Joi.string().email().required("email is required"),
    password: Joi.string().length(6).required("password is required"),
  });
  return schema.validate(user);
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
