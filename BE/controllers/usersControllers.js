const mongoose = require("mongoose");
const User = require('../models/UsersModel')

const getAllUsers = async (req, res) => {
  res.status(200).json({
    msg: "get all scores",
  });
};

const postNewUser = async (req, res) => {
  const { userName, pw } = req.body
  /* console.log(userName) */
  try {
    const createNewUser = await User.create({userName, pw});
    res.status(200).json(createNewUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  res.status(200).json({
    msg: "get score by id",
  });
};

const modifyUserById = async (req, res) => {
  res.status(200).json({
    msg: "modify score by id",
  });
};

const deleteUserById = async (req, res) => {
  res.status(200).json({
    msg: "delete score by id",
  });
};

/* module.exports = {
    getAllScores,
    postNewScore,
    getScoreById,
    modifyScoreById,
    deleteScoreById,
  }; */
exports.getAllUsers = getAllUsers
exports.postNewUser = postNewUser
exports.getUserById = getUserById
exports.modifyUserById = modifyUserById
exports.deleteUserById = deleteUserById
  
