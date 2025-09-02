const jwt = require("jsonwebtoken");
const user = require("../models/User");

const protect = (req, res, next) => {
  try {
    let token;

    // check if token exists in header
    if (
      req.headre.authorization &&
      req.headre.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
  } catch (error) {}
};
