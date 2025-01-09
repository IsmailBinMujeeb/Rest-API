const router = require('express').Router({ mergeParams: true });
const userModel = require('../models/user-model');

router.get('/', async (req, res)=>{
    
    try {
        const user = await userModel.findOne({ _id: req.params.id });

        if (!user) return res.status(404).send({ error: 'User not found.' });

        res.status(200).send(user);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = router;