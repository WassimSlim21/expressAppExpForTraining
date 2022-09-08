var express = require("express");
var router = express.Router();
var userCtl = require("../controllers/user");
/* GET users listing. */
router.get("/", userCtl.getUser);
router.post("/", userCtl.addUser);
router.post("/many", userCtl.addUsers);

module.exports = router;
