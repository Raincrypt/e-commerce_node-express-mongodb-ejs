const User = require("../model/User");
const { setUser } = require("../services/auth");

const signupUser = async (req, res) => {
  const { username, password } = req.body;

  const user = User.findOne({ username });
  if (user.username) return res.json({ authFailed: "User Already Exists" });

  const newUser = new User({ username, password });

  try {
    newUser.save();

    const token = setUser(newUser);
    res.cookie("uid", token);

    return res.redirect("/");
  } catch (error) {
    console.log("error in user creation server: ", error);
  }
};

const loginUser = (req, res) => {
  const { username, password } = req.body;

  try {
    const user = User.findOne({ username, password });
    if (!user) return res.json({ authFailed: "Invalid Credentials" });

    const token = setUser(sessionId, user);
    res.cookie("uid", token);

    return res.redirect("/");
  } catch (error) {
    console.log("error in user creation server: ", error);
  }
};

module.exports = {
  loginUser,
  signupUser,
};
