const jwt = require("jsonwebtoken");

function setUser(user) {
  const payload = {
    ...user,
  };
  try {
    return jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
  } catch (error) {
    console.log(error)
  }
}

function getUser(token) {
  if (!token) return;
  try {
    return jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  } catch (error) {
    console.log("getUser:-", error)
  }
}

module.exports = {
  setUser,
  getUser,
};
