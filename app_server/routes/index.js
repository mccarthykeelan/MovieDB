const express = require('express');
const router = express.Router();


const ctrlMovies = require("../controllers/movies");


/* Movies Pages */

router.get("/", ctrlMovies.home);
router.get('/movie/:id', ctrlMovies.movieInfo);
router.get("/movie/favourite", ctrlMovies.favouriteMovies)

/* Other Pages */



module.exports = router;


