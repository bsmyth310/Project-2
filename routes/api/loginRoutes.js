var express = require("express");
var router = express.Router();

const credential = {
    email: "gitfit33@gmail.com",
    password: "33admin33"
}

// login user
router.post('login', (req, res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email;
        res.redirect('dashboard');
    } else {
        res.end("Invalid Username")
    }
});

// route for dashboard
router.get('dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', { user: req.body.session })
    } else {
        res.send("Unauthorize User")
    }
})
