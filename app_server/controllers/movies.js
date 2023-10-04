/* GET 'home' page */
const home = function(req, res) {
    res.render("index", {
        title: "Home"
    });
};

/* GET 'Movie Info' page */
const movieInfo = function(req, res) {
    res.render("index", {
        title: "Movie Info"
    });
};

/* GET 'Add Review' page */
const addReview = function(req, res) {
    res.render("index", {
        title: "Add Review"
    });
};

module.exports = {
    home,
    movieInfo,
    addReview,
}