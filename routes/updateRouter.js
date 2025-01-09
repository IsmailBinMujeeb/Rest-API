const router = require('express').Router({ mergeParams: true });
const userModel = require('../models/user-model');

router.put('/', async (req, res)=>{

    try {
        const updatedUser = await userModel.findOneAndUpdate({ _id: req.params.id }, { name: req.query.name, email: req.query.email }, { new: true });

        if (!updatedUser) return res.status(404).send({ message: 'User not found' });

        res.status(200).send(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = router;