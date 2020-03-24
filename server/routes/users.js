const express = require("express");

const User = require("../models/User");
const Movie = require("../models/Movie");
const Review = require("../models/Review");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.user._id })
      .populate({
        path: "reviews",
        populate: { path: "movie", select: "title _id" }
      })
      .populate("favs");
    return res.render("users/profile", { user });
  } catch (error) {
    next(error);
  }
});

router.get("/editprofile", async (req, res, next) => {
  try {
    return res.render("users/edit");
  } catch (error) {
    next(error);
  }
});

router.post("/editprofile", async (req, res, next) => {
  try {
    await User.updateOne(
      {
        _id: req.user._id
      },
      {
        email: req.body.email,
        username: req.body.username
      }
    );
    res.redirect("/users");
  } catch (error) {
    next(error);
  }
});

router.post("/search", async (req, res, next) => {
  try {
    const { search } = req.body;
    const user = await User.findOne({
      $or: [{ email: search }, { username: search }]
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.get("/addfav", async (req, res, next) => {
  try {
    const { movie } = req.query;
    await User.updateOne(
      {
        _id: res.locals.user._id
      },
      {
        $addToSet: {
          favs: movie
        }
      }
    );
    res.redirect(`/movies/${movie}`);
  } catch (error) {
    next(error);
  }
});

router.get("/removefav", async (req, res, next) => {
  try {
    const { movie } = req.query;
    await User.updateOne(
      {
        _id: req.user._id
      },
      {
        $pull: {
          favs: movie
        }
      }
    );
    res.redirect(`/movies/${movie}`);
  } catch (error) {
    next(error);
  }
});

router.get("/followuser", async (req, res, next) => {
  try {
    const { user } = req.query;
    await User.updateOne(
      {
        _id: res.locals.user._id
      },
      {
        $addToSet: {
          follows: user
        }
      }
    );
    res.redirect("/users");
  } catch (error) {
    next(error);
  }
});

router.get("/unfollowuser", async (req, res, next) => {
  try {
    const { user } = req.query;
    await User.updateOne(
      {
        _id: res.locals.user._id
      },
      {
        $pull: {
          follows: user
        }
      }
    );
    res.redirect("/users");
  } catch (error) {
    next(error);
  }
});

router.post("/review", async (req, res, next) => {
  try {
    const { idMovie } = req.query;
    const { review } = req.body;
    const newReview = await Review.create({
      review,
      movie: idMovie,
      user: req.user._id
    });
    await User.updateOne(
      { _id: req.user._id },
      {
        $addToSet: {
          reviews: newReview._id
        }
      }
    );
    await Movie.updateOne(
      { _id: idMovie },
      {
        $addToSet: {
          reviews: newReview._id
        }
      }
    );
    res.redirect(`/movies/${idMovie}`);
  } catch (error) {
    next(error);
  }
});

router.post("/answer", async (req, res, next) => {
  try {
    const { idReview, idMovie } = req.query;
    const { review } = req.body;
    const newReview = await Review.create({ review });
    await Review.updateOne(
      { _id: idReview },
      {
        $addToSet: {
          answers: newReview._id
        }
      }
    );
    await User.updateOne(
      { _id: req.user._id },
      {
        $addToSet: {
          reviews: newReview._id
        }
      }
    );
    res.redirect(`/movies/${idMovie}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
