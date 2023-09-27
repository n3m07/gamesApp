const mongoose = require("mongoose");
const User = require("../models/UsersModel");

exports.deleteScore = async (req, res) => {
  const { userName, scoreId, index } = req.body;
  console.log(req.body)
  console.log(userName)

  try {

    const user = await User.findOne({ userName });
    console.log(`the user is ${user}`)
    const scoreToDelete = await user.scoresHG[index]
    
    if (!scoreToDelete) { return res.status(401).json({ error: "Score not found" }); }


    console.log(scoreToDelete)

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!scoreToDelete) {
      return res.status(401).json({ error: "an error occurred" });
    }

    res.json({scoreDeleted: scoreToDelete});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
