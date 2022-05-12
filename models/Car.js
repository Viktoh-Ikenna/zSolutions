const mongoose = require("mongoose");

const Cars = new mongoose.Schema({
  name: {
    type: String,
  },
  brand: {
    type: Array,
  },
  prize: {
    type: Number,
  },
  avatar: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  specs: {
    type: [Object],
  },
  info: {
    type: Array,
  },
  description: {
    type: String,
  },
  country: {
    type: String,
  },
  sold: {
    type: Boolean,
  },
  imgs: {
    type: Array,
  },
  banner: {
    type: String,
  },
  favourite: {
    type: Boolean,
  },
});
module.exports =
  mongoose.models.Cars || mongoose.model("Cars", Cars);
