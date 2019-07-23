const User = require("../models/User");
const { createToken } = require("../config/jwt");

exports.postSignup = async (req, res, next) => {
	try {
		const { username, campus, course, image, password } = req.body;
		const user = await User.register({ username, campus, course, image }, password);
		res.status(201).json({ user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ err });
	}
};

exports.postLogin = async (req, res, next) => {
	try {
		const { user } = req;
		const [header, payload, signature] = createToken(user);
		res.cookie("headload", `${header}.${payload}.`, {
			// maxAge: 1000 * 60 * 30,
			// secure: true
		});
		res.cookie("signature", signature, {
			// httpOnly: true,
			// secure: true
		});
		res.status(200).json({ user });
	} catch (error) {
		console.error(error);
		res.status(401).json({ error });
	}
};

exports.getLogout = (req, res, next) => {
	res.clearCookie("headload");
	res.clearCookie("signature");
	res.status(200).json({ msg: "Logged out" });
};

exports.getLoggedIn = (req, res, next) => {
	res.status(200).json({ user: req.user, msg: "User is logged in!" });
};

exports.postEdit = async (req, res, next) => {
	try {
		// console.log("req.body", req.body);
		let { username, campus, course } = req.body;
		if (!username) username = req.user.username;
		if (!campus) campus = req.user.campus;
		if (!course) course = req.user.course;
		req.user = await User.findOneAndUpdate({ username: req.user.username }, { username, campus, course }, { new: true });
		res.status(200).json({ user: req.user, msg: "User updated!" });
	} catch (error) {
		console.error(error);
		res.status(401).json({ error });
	}
};

exports.postUpload = async (req, res, next) => {
	try {
		console.log('postUpload')
		console.log('req.user', req.user)
		console.log('req.file', req.file)
		console.log('req.body', req.body)

		req.user = await User.findByIdAndUpdate(req.user._id, { image: req.file.url }, { new: true });

		res.status(200).json({ user: req.user, msg: "Image uploaded" });
	} catch (error) {
		console.log(error)
	}
};
