const { Router } = require("express")
const passport = require("../config/passport");
const {signupProcess,
        loginProcess,
       logoutProcess
} = require ("../controllers/auth.controller")
const router = Router()


router.post("/singup",signupProcess);

router.post("/login", loginProcess);

router.get("/logout", logoutProcess)

module.exports = router
