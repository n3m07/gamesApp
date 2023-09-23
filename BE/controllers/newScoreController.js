const mongoose = require("mongoose");
const User = require("../models/UsersModel");

exports.newScore = async (req, res) => {
    try {
      const { userName, time, score } = req.body;
  
      // Find the user by their username
      const user = await User.findOne({ userName });
  
      if (!user) {
        return res.status(404).json({ error: "User Not Found" });
      }
  
      // Update the user's score and time
      user.scoresHG.push({ time, score });
  
      // Save the updated user data
      await user.save();
  
      res.json({ message: "new score posted succesfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };