const User = require("../models/User");

module.exports = {
  isHimself: async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (req.user.sub === user._id.toString()) {
      next();
    } else {
      res.send("You don't have the necessary credentials.");
    }
  },
};
