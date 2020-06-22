const bcryptjs = require('bcryptjs');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

const Users = require('../users/users-model.js');
const { isValid } = require('../users/users-service.js');

router.post('/register', (req, res) => {
    const credentials = req.body;

    if (isValid(credentials)) {
        const hash = bcryptjs.hashSync(credentials.password, 10);
        credentials.password = hash;

        Users.add(credentials)
            .then(user => {
                res.status(201).json({ data: user });
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            })
    } else {
        res.status(400).json({ message: "Please provide an email and password" });
    }
});

// router.post('/login', (req, res) => {

// });

function generateToken(user) {
    const payload = {
        subject: user.id,
        email: user.email
    }

    const options = {
        expiresIn: '3h'
    };

    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;