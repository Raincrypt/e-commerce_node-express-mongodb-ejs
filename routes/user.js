const express = require("express");
const { signupUser, loginUser } = require("../controllers/user");
const router = express.Router();

router.post("/", signupUser);
router.get("/", loginUser);

module.exports = router;
