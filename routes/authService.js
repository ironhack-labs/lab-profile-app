const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const router = Router();

router.post('/auth/signup', async (req, res) => {
    const { username, password, campus, course } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    try {

        const user = await User.create({ username, passwordHash, campus, course })
        res.status(201).json({ name: user.username, campus: user.campus, course: user.course })

    } catch (error) { res.status(500).json({ message: 'server side error on create a new user' }) }
})




router.post('/auth/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        const validateHash = bcrypt.compareSync(password, user.passwordHash);

        if (validateHash) {
            const payload = {
                name: user.username,
                id: user.id,
            };

            const token = jwt.sign(payload, process.env.JWT_PASS, { expiresIn: '1h' });
            console.log(token)
            res.status(200).json({ payload, token });
        }

    } catch (error) {
        res.status(500).json({ message: 'Erro ao logar' });
    }
})




router.post('/auth/upload', async (req, res) => {

})

router.post('/auth/edit', async (req, res) => {

})

router.post('/auth/logout', async (req, res) => {

})

module.exports = router;
