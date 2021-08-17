const User = require("../models/User");

module.exports = {
  isNotHimself: async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (req.user.sub !== user.id) {
      next();
    } else {
      res.send("You don't have the necessary credentials.");
    }
  },
};
