const router = require('express').Router();
const userModel = require('../models/user-model');

router.get('/', async (req, res)=>{

    try {
        const users = await userModel.find({ });

        if (!users) {
            res.status(404).send({ error: 'Users not found.' });
        }

        res.status(200).send(users);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = router;