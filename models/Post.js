const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  categories: {
    type: [String], // Array of strings for categories
    required: true,
  },
  tags: {
    type: [String], // Array of strings for tags
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Path to the image
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the current date when created
  },
});

module.exports = mongoose.model("Post", postSchema);
