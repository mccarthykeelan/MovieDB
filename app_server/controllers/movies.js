/* GET 'home' page */
const home = function(req, res) {
    res.render("index", {
        title: "Home"
    });
};

/* GET 'Movie Info' page */
const movieInfo = function(req, res) {
    res.render("movie-detail", {
        title: "Movie Info"
    });
};

/* GET 'Add Review' page */
const addReview = function(req, res) {
    res.render("add-review", {
        title: "Add Review"
    });
};

module.exports = {
    home,
    movieInfo,
    addReview,
}