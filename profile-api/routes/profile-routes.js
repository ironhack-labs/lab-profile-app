const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyToken } = require('../helpers/auth-helper');
const uploader = require('../helpers/multer-helper');

router.post('/upload')