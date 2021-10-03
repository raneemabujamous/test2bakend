"use strict";
const mongoose = require("mongoose");
const modelScheme = mongoose.Schema({
  instructions: { type: String },
  photo: { type: String },
  name: { type: String, unique: true },
  slug: { type: String, unique: true },
});
const ModelFlowerSchema = mongoose.model("collection", modelScheme);
module.exports = ModelFlowerSchema;
