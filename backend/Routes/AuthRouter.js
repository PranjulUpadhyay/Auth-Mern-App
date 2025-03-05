const {signupValidation} = require('../Middlewares/AuthValidation');
const {loginValidation} = require('../Middlewares/AuthValidation');
const {signup} = require('../Controllers/AuthController');
const {login} = require('../Controllers/AuthController');

const express = require("express");
const router = express.Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;  