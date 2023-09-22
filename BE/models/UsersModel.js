const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    userName: {
      type: String,
      require: true,
      unique: true,
    },
    pw: {
      type: String,
      require: true,
    },
    scoresHG: {
      type: [{time: Date, score: Number}]
    },
    avgScoresHG: {
      type: Number,
      default: 0,
    },
    rankingHG: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      require: true
    },
  },
  { timestamps: true },
  { collection: "users" }
);

module.exports = mongoose.model("User", usersSchema);
