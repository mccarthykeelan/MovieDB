/* GET registeration page */

const register = function(req, res) {
    res.render("register", {
        title: "Register"
    });
};

module.exports = {
    register,
};
