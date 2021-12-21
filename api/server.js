const express = require("express");
const helmet = require("helmet");
const server = express();
const userRouter = require("./users/users-router.js");
const authRouter = require("./auth/auth-router.js");

server.use(helmet());
server.use(express.json());

server.use("/api/users", userRouter)
server.use("/api/auth", authRouter)

// Error Handling
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
