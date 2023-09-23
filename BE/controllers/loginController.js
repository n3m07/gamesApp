const mongoose = require("mongoose");
const User = require("../models/UsersModel");


exports.loginUser = async (req, res) => {

    try {
      const { userName, pw } = req.body;
    
      const user = await User.findOne({ userName });
    
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
    
      if (user.pw != pw) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
    
      
        const auth0= true
    
      res.json({ auth0, user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
};