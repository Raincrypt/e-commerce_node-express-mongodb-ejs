const User = require("../model/User");

const getDashboard = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    
    if (!user) throw new Error("User does not exist");

    if (user.isAdmin) res.render("adminDashboard", { user });
    else res.render("userDashboard", { user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDashboard,
};