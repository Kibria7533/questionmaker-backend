const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token,process.env.JWT_KEY);
    return payload;
  } catch (error) {
    throw new Error("Token verification failed");
  }
};

module.exports = verifyToken
