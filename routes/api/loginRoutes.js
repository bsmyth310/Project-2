

// login user
router.post('login', (req, res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email;
        res.redirect('dashboard');
    } else {
        res.end("Invalid Username")
    }
});


