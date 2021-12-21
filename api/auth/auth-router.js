const router = require("express").Router();
const bcrypt = require("bcryptjs");

const { BCRYPT_ROUNDS } = require("../../config/secrets.js");
const User = require("../users/users-model.js");

// [POST] register // creates a user into the database
router.post("/register", async (req, res, next) => {
  const { username, email, password, role_id } = req.body;
  const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS);
  const user = await User.create({
    username: username,
    email: email,
    password: hash,
    role_id: role_id,
  });
  try {
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
