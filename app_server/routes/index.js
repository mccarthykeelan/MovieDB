const express = require('express');
const router = express.Router();


const ctrlMovies = require("../controllers/movies");
const ctrlOthers = require("../controllers/others");

/* Movies Pages */

router.get("", ctrlMovies.home);
router.get("/movie", ctrlMovies.movieInfo);
router.get("/movie/review/new", ctrlMovies.addReview);

/* Other Pages */
router.get("/about", ctrlOthers.about);


module.exports = router;
