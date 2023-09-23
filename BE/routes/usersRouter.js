const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");

const loginController = require("../controllers/loginController");
const randomWordsController = require("../controllers/randomWordsController");
const newScoreController = require("../controllers/newScoreController");
const deleteScoreController = require("../controllers/deleteScoreController");

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.postNewUser);
router.route("/login").post(loginController.loginUser).get();
router.route("/random-word").get(randomWordsController.randomWords);
router.route("/newScore").patch(newScoreController.newScore);
router.route("/deleteScore").delete(deleteScoreController.deleteScore)
router
  .route("/:id")
  .get(usersController.getUserById)
  .patch(usersController.modifyUserById)
  .delete(usersController.deleteUserById);

module.exports = router;
