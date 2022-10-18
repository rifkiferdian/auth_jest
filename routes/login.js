const router = require("express").Router();
const UserController = require("../controllers/user");

router.post("/", UserController.loginUser);

module.exports = router;