const router = require('express').Router();
const Users = require('./model-users')

router.get('/users', async (req,res) =>{
    try{
        const users = await Users.find()
        res.status(200).json(users)
    } catch(error){
        res.status(500).json({
            // message: "Error Message"
            next(error);
        })
    }
})


router.use( (err,req,res,next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router;