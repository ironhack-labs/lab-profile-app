"use strict";

const User = require("./../models/user");

exports.signUp = (req, res, next) => {
  console.log("THE REQUEST BODY IS: ", req.body);
  const { username, password, campus, course } = req.body;
  User.signUp({ username, password, campus, course })
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
  const { username, password } = req.body;
  User.signIn({ username, password })
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

exports.upload = (req, res, next) => {
  const { image } = req.body;
  // TODO: FINISH THIS, ADD /AUTH/EDIT CONTROLLER
};
