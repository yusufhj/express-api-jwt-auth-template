const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const User = require('../models/user');

router.post('/signup', async (req, res) => {
    try {
        const userInDB = await User.findOne({ username: req.body.username });
        if (userInDB) throw new Error('Username already taken.');

        // if there is no error, create a new user
        const user = await User.create({
            username: req.body.username,
            hashedPassword: bcrypt.hashSync(req.body.password, parseInt(process.env.SALT_ROUNDS)),
        });

        res.status(201).json({ user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Something Went Wrong!' });
    }
    // res.json({ message: 'Signup route' });
});

module.exports = router;