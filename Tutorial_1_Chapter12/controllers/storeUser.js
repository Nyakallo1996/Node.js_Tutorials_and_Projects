const User = require("../models/User.js");
const path = require("path");

module.exports = async (req, res) => {
    try {
        const user = await User.create(req.body);
        if (user) {
            res.redirect('/');
        } else {
            // Handle the case where user creation failed
            res.status(500).send('Internal server error');
        }
    } catch (error) {
        // Handle other errors (e.g., validation errors)
        console(error)
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
        req.session.validationErrors = validationErrors;
        res.redirect('/auth/register');
    }
};
