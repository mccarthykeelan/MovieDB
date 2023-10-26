/* GET home page */

const about = function(req, res) {
    res.render("index", {
        title: "About"
    });
};

const register = function(req, res) {
    res.render("register", {
        title: "Register"
    });
};

module.exports = {
    about,
    register,
};