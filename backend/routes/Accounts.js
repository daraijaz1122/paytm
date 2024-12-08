const express = require("express");
const mongoose = require("mongoose")
const { Account, User } = require("../db");
const authMiddleware =require ("../middlewares/middleware")
const router = express.Router();
router.get("/",async (req, res) => {
    const accounts = await Account.find();
    res.json(accounts);
})

router.get("/balance", authMiddleware,async (req, res) => {
    const Id = req.userId
    const accountExits = await Account.findOne({userId:Id})
    if (!accountExits) {
        return res.status(411).json({
            message:"no account linked with the user found"
        })
    }
    const balance = await Account.findOne({ userId: Id })
    res.json({
        message:"balance fetched sucessfully",
        balance:balance.balance
    })
})
router.post("/transfer", authMiddleware,async (req, res) => {
    const { amount, to } = req.body;
    const session = await mongoose.startSession();
    session.startTransaction();
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message:"Insufficient Funds"
        })
    }
    const recipient = await Account.findOne({ userId: to }).session(session)
    if (!recipient) {
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid recipient account"
        })
    }
    await Account.updateOne({ userId: req.userId }, {
        $inc: { balance: -amount },
    }).session(session);

    await Account.updateOne({ userId: to }, {
        $inc: { balance: amount },
    }).session(session)

    await session.commitTransaction();
    res.json({
        message: "Transfer successful",
    })
})
module.exports = router;
