const jwt = require("jsonwebtoken")
const { JWT_SECRET_KEY } = require("../config")

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({
            message:"invalid token"
        })
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY)
        req.userId = decoded.userId;
        next()
    } catch (e) {
        return res.status(403).json({
            message:"unauthorized user"
        })
    }
}



module.exports = authMiddleware