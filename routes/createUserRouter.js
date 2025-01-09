const router = require('express').Router();
const userModel = require('../models/user-model');

router.post('/', async (req, res)=>{

    try {
        const { name, email } = req.query;
        
        const newUser = await userModel.create({ name, email });

        if (!newUser) return res.status(500).send({ message: 'User not created' });

        res.status(200).send(newUser)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = router;