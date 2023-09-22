const mongoose = require("mongoose");
const User = require("../models/UsersModel");
const RandomWord = require("../models/RandomWordsModel");

exports.randomWords = async (req, res) => {
    const data = await RandomWord.find({});
    const randomIndex = Math.floor(Math.random() * data[0].words.length);
   /*  console.log(randomIndex)
    console.log(data[0].words[randomIndex]) */
    const response= await data[0].words[randomIndex]
    res.json({response});
};
