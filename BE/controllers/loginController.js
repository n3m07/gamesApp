const mongoose = require("mongoose");
const User = require("../models/UsersModel");
const jwt = require('jsonwebtoken');


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
    
      /* const token = jwt.sign({ userName: userName }, "your-secret-key", {
        expiresIn: "1h",
      }); */
        const auth0= true
    
      res.json({ auth0, user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
};