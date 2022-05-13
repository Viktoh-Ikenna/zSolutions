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
    type: [
      {
        type: String,
      },
    ],
  },
  info: {
    type: [
      {
        type: String,
      },
    ],
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
    type: [
      {
        type: String,
      },
    ],
  },
  banner: {
    type: String,
  },
  favourite: {
    type: Boolean,
  },
  userId: {
    type: String,
  },
});
module.exports = mongoose.models.Cars || mongoose.model("Cars", Cars);
