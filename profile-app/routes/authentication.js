'use strict';

const { Router } = require('express');
const router = new Router();
const User = require('./../models/user');
const bcryptjs = require('bcryptjs');

router.post('/signup', async (req, res, next) => {
  const { username, password, campus, course } = req.body;

  try {
    const hash = await bcryptjs.hash(password, 10);
    const user = await User.create({
      username,
      passwordHash: hash,
      campus,
      course
    });
    req.session.user = user._id;
    console.log(req.session.user);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).exec();
    if (!user) throw new Error(`There's no user with that username.`);
    const result = await bcryptjs.compare(password, user.passwordHash);
    if (!result) throw new Error(`Wrong Password`);
    req.session.user = user._id;
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

const multerMiddleware = require('./../middleware/multer-configuration');

router.post(
  '/upload',
  multerMiddleware.single('image'),
  async (req, res, next) => {
    try {
      const data = {
        image: req.file.url
      };
      const user = await User.findByIdAndUpdate(req.session.user._id, data);
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id', async (req, res, next) => {
  const { username, campus, course } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      ...(username && { username }),
      ...(campus && { campus }),
      ...(course && { course })
    }).exec();
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.get('/loggedin', async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.session.id).exec();
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.post('/logout', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

module.exports = router;
