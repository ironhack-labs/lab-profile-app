const isLoggedIn = () => (req, res, next) => {
    if (req.user) {
        return next();
    } else {
        return res.status(401).json({ status: 'Content is private, please login ' });
    }
};

module.exports = {
    isLoggedIn
};
