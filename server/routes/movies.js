const express = require("express");

const Movie = require("../models/Movie");
const { isLoggedIn } = require("../middleware/account-middleware");

const router = express.Router();

router.use(isLoggedIn());

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.aggregate([
      {
        $project: {
          title: 1,
          cover: 1
        }
      }
    ]);
  } catch (error) {
    next(error);
  }
});

router.post("/search", async (req, res, next) => {
  try {
    const { search } = req.body;
    var searchRegex = new RegExp("^" + search, "i");
    const movie = await Movie.findOne({ title: searchRegex });
    res.redirect(`/movies/${movie._id}`);
  } catch (error) {
    next(error);
  }
});

router.get("/genre/:genre", async (req, res, next) => {
  try {
    const genre = await Movie.find({
      genre: req.params.genre
    });
    res.send(genre);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findOne({
      _id: req.params.id
    }).populate({
      path: "reviews",
      populate: { path: "user", select: "username _id" }
    });
    res.render("movies/movie", { title: `${movie.title}`, movie });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
