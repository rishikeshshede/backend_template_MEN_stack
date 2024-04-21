const jwt = require("jsonwebtoken");
const { blockedUsersCache } = require("../utils/cache.util");
const { JWT_SECRET } = require("../configs/server.config");

const authToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(400)
      .json({ message: "No token provided.", success: false });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      return res
        .status(401)
        .json({ message: "Invalid token.", success: false });
    }
    req.user = decoded;
    if (blockedUsersCache.get(req.user.userId)) {
      console.error("You are temporarily blocked. Please try again later.");
      return res.status(401).json({
        message: "You are temporarily blocked. Please try again later.",
        success: false,
      });
    }
    // console.info(req.user);

    next();
  });
};

module.exports = authToken;
