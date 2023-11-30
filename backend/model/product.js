const mongoose = require("mongoose");

const products = new mongoose.Schema({
  pid: String,
  "product name": String,
  "product category": String,
  "image url": String,
  "product description": String,
});

module.exports = mongoose.model("product", products);
