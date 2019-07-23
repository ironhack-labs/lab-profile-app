require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.createToken = user => {
	return jwt
		.sign(
			{
				userId: user._id,
				username: user.username
			},
			process.env.SECRET,
			{
				expiresIn: "24h"
			}
		)
		.split(".");
};

exports.verifyToken = (req, res, next) => {
	const { headload, signature } = req.cookies;

	if (!headload || !signature) return res.status(401).json({ msg: "Unauthorized, missing token" });

	jwt.verify(headload + signature, process.env.SECRET, async (err, decoded) => {
		try {
      if (err) throw "Unauthorized, missing token";
    //   console.log('decoded.userId', decoded.userId)
      req.user = await User.findById(decoded.userId);
    //   console.log('req.user', req.user)
			next();
		} catch (error) {
			return res.status(401).json({ err });
		}
	});
};
