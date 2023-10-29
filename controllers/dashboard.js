const User = require("../model/User");

const getDashboard = async (req, res) => {
  res.render('dashboard', {user: req.user._doc})
};

module.exports = {
  getDashboard,
};