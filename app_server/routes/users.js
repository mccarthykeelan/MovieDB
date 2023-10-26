let express = require('express');
let router = express.Router();

const ctrlOthers = require("../controllers/others");

/* GET Registeration page */
router.get("/register", ctrlOthers.register);

module.exports = router;
