const Tweet = require("../models/Tweet");

module.exports = {
	isAuthor: async (req, res, next) => {
		const tweet = await Tweet.findById(req.body._id);
		if (req.user.sub === tweet.author._id.toString()) {
			next();
		} else {
			res.send("You don't have the necessary credentials.");
		}
	},
};
