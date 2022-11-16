const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    required: true,
  },
  friendId: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
})

module.exports = mongoose.model("User", userSchema)
