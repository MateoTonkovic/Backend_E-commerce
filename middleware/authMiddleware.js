const jwt = require("jsonwebtoken");

const tokenVerification = (req, res, next) => {
  const tokenBearer = req.headers["authorization"];
  const bearer = tokenBearer.split(" ");
  const token = bearer[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(req.user)
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = tokenVerification;
