const express = require("express");
const router = express.Router()
const { testUser, addClass, getClasses, askToWithdrawClass } = require("../controllers/user.controller");
router.post("/test",testUser);
router.post("/addClass",addClass);
router.get("/getClasses",getClasses);
router.post("/askToWithdrawClass",askToWithdrawClass);


module.exports = router;