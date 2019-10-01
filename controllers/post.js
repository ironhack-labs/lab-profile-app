"use strict";

const Post = require("./../models/post");

exports.list = (req, res, next) => {
  Post.find()
    .sort({ createdAt: -1 })
    .populate("user")
    .then(posts => {
      res.json({ type: "success", data: { posts } });
    })
    .catch(error => {
      next(error);
    });
};

exports.create = (req, res, next) => {
  const { title, body } = req.body;
  Post.create({
    title,
    body,
    user: req.user._id
  })
    .then(post => {
      res.json({ type: "success", data: { post } });
    })
    .catch(error => {
      next(error);
    });
};

exports.load = (req, res, next) => {
  const id = req.params.id;
  Post.findById(id)
    .populate("user")
    .then(post => {
      res.json({ type: "success", data: { post } });
    })
    .catch(error => {
      next(error);
    });
};

exports.edit = (req, res, next) => {
  const id = req.params.id;
  const { title, body } = req.body;
  Post.findOneAndUpdate(
    {
      _id: id,
      user: req.user._id
    },
    {
      ...(title && { title }),
      ...(body && { body })
    },
    { new: true }
  )
    .then(post => {
      if (post) {
        res.json({ type: "success", data: { post } });
      } else {
        next(new Error("POST_COULD_NOT_BE_EDITED"));
      }
    })
    .catch(error => {
      next(error);
    });
};

exports.remove = (req, res, next) => {
  const id = req.params.id;
  Post.findOneAndDelete({
    _id: id,
    user: req.user._id
  })
    .then(post => {
      if (post) {
        res.json({ type: "success" });
      } else {
        next(new Error("POST_COULD_NOT_BE_DELETED"));
      }
    })
    .catch(error => {
      next(error);
    });
};
