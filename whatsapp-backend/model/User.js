import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  email_verified: {
    type: Boolean,
    required: true,
  },
  sub: {
    type: Number,
    required: true,
  },
  archived: {
    type: Boolean,
    required: true,
  },
  messages: {
    type: Array,
    required: true,
  },
});

const Users = mongoose.model("users", userSchema);
export default Users;
