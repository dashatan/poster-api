const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  images: [String],
  cityId: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  attributes: {
    type: Object,
    required: true,
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

module.exports = mongoose.model("Post", postSchema)
