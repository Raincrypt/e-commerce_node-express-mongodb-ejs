const User = require("../model/User");

const createUser = async (req, res) => {
  const { username, password } = req.body;

  const user = User.findOne({ username });
  if (user.username) return res.json({ authFailed: "User Already Exists" });

  const newUser = new User({ username, password });
  try {
    newUser.save();
    res.status(201);
  } catch (error) {
    console.log("error in user creation server: ", error);
  }
};

const getUser = (req, res) => {
    const { username, password } = req.body;
  
    try {
        const user = User.findOne({ username, password });
        if (!user) return res.json({ authFailed: "Invalid Credentials" });

        res.json(user)
    } catch (error) {
      console.log("error in user creation server: ", error);
    }
};

module.exports = {
  getUser,
  createUser,
};
