const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/secrets.js");
const User = require("../users/users-model.js");

const restrict = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({
      status: 401,
      message: "token required",
    });
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      next({
        status: 401,
        message: "token invalid",
      });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === undefined) {
    next({
      status: 400,
      message: "email is required",
    });
  } else {
    next();
  }
};

const checkUsernameFree = async (req, res, next) => {
  const { username } = req.body;
  const user = await User.getBy({ username: username });
  if (user.length) {
    next({
      status: 422,
      message: "username taken",
    });
  } else {
    next();
  }
};

const validateUsername = async (req, res, next) => {
  const [user] = await User.getBy({ email: req.body.email });
  if (!user) {
    next({ status: 401, message: "Invalid credentials" });
  } else {
    req.user = user;
    next();
  }
};

module.exports = {
  restrict,
  checkUsernameFree,
  validateUsername,
  validateEmail,
};
