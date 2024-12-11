const express = require("express");
const router = express.Router();
const { User, Account } = require("../db");
const zod = require("zod")
const validationMiddleware = require("../middlewares/inputValidationMiddleware");
const jwt = require("jsonwebtoken");

const {JWT_SECRET_KEY}= require("../config");
const authMiddleware = require("../middlewares/middleware");

router.post("/signup",validationMiddleware, async(req, res) => {
    const { email, password, firstname, lastname } = req.body
    
    const existingUser = await User.findOne({
       email : email
    })
    if (existingUser) {
        return res.status(411).json({
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

    await Account.create({
        userId: userId,
        balance:1+ Math.random()*10000
    })
    const token = jwt.sign({userId},JWT_SECRET_KEY)
    res.json({
        message: "user registered sucessfully",
        token:token
        
  })
})

const signinBody = zod.object({
    email: zod.string(),
    password: zod.string(),
})
router.post("/signin", async  (req, res) => {
    const { email, password } = req.body;
    const success = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message:"invalid inputs , try again"
        })
    }
    const user = await User.findOne({
        email: email,
        password:password
    })
   
    if (!user) {
        return res.status(401).json({ message: "invalid email or password" });
    }
    const userId = user._id;
    const token = jwt.sign({ userId }, JWT_SECRET_KEY)
    res.json({
        message: "user logged in sucessfully",
        token: token
    })
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname:zod.string().optional()
})
router.put("/update", authMiddleware,async (req, res) => {
  
    const {success} = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message:"Invalid inputs"
        })
    }
    try {
        await User.updateOne({_id:req.userId},req.body)
    } catch (e) {
        res.status(500).json({
            message:"updating user failed"
        })
    }
    
    res.json({
        message: "user updated sucessfully",
    })

})
router.get("/filter", async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [
            {
                firstname: {
                    $regex: filter
                },
            },
            {
                lastname: {
                    $regex: filter
                }
            }
        ]
    })
    res.json({
        user: users.map(user =>( {
            email: user.email,
            firstname : user.firstname,
            lastname: user.lastname,
            _id : user._id
        }))
    })
})
router.get("/findone/", async (req, res) => {
    c
})

   



module.exports = router