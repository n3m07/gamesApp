const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//specifying the collection was needed in order to make the model correspond to the pre-existing atlas collection
const randomWordsSchema = new Schema(
  {
    words: Array,
  },
  {
    collection: 'randomWords'
  }
);

module.exports = mongoose.model("RandomWord", randomWordsSchema);
