const router = require('express').Router({ mergeParams: true });
const userModel = require('../models/user-model');

router.delete('/', async (req, res)=>{

    try {
        const deletedUser = await userModel.findOneAndDelete({ _id: req.params.id });

        if (!deletedUser) return res.status(404).send({ message: 'User not found.' });

        res.status(200).send({ deletedUser });
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = router;