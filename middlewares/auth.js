const { getUser } = require("../services/auth");

async function restrictToLoggedUserOnly (req, res, next) {
    const userUid = req.cookies?.uid;

    if(!userUid) return res.redirect("/signup");

    const user = getUser(userUid)
    if(!user) return res.redirect("/signup")

    req.user = user;

    next();
}

module.exports = {
    restrictToLoggedUserOnly,
}