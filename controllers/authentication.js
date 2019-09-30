"use strict";

const User = require("./../models/user");

exports.signUp = (req, res, next) => {
  const { username, password, campus, course } = req.body;
  User.signUp({ username, password, campus, course })
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      res.json({ type: "success", data: { user } });
    })
    .catch(error => {
      console.log(error);
    });
};

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  User.login({ username, password })
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      res.json({ type: "success", data: { user } });
    })
    .catch(error => {
      console.log(error);
    });
};
