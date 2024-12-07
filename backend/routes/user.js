const express = require("express");
const router = express.Router();
const {User}= require("../db");
const validationMiddleware = require("../middlewares/inputValidationMiddleware");
const userMiddleware = require("../middlewares/userMiddleware");
const jwt = require("jsonwebtoken");

const {JWT_SECRET_KEY}= require("../config")

router.post("/signup",validationMiddleware, async(req, res) => {
    const { email, password, firstname, lastname } = req.body
    
    const existingUser = User.findOne({
       email : email
    })
    if (existingUser) {
        res.status(411).json({
            message: "email already registered , please choose a different one!"
        })
    }
    const user = await User.create({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
  
    })
    const userId = user._id
    const token = jwt.sign(userId,JWT_SECRET_KEY)
    res.json({
        message: "user registered sucessfully",
        token: token
        
  })
})

   



module.exports = router