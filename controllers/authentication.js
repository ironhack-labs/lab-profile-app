"use strict";

const User = require("./../models/user");

exports.signUp = (req, res, next) => {
  const { email, name, password } = req.body;
  User.signUp({ email, password, name })
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      res.json({ type: "success", data: { user } });
    })
    .catch(error => {
      next(error);
    });
};

exports.signIn = (req, res, next) => {
  const { email, password } = req.body;
  User.signIn({ email, password })
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      res.json({ type: "success", data: { user } });
    })
    .catch(error => {
      next(error);
    });
};

exports.signOut = (req, res, next) => {
  req.session.destroy();
  res.json({ type: "success" });
};

exports.verify = (req, res, next) => {
  res.json({
    type: "success",
    data: {
      ...(req.user && { user: req.user })
    }
  });
};
