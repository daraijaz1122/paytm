const zod = require("zod")
const validationMiddleware = (req, res, next) => {
   
    const validationSchema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(5,"password cannot be empty").max(10),
        firstname: zod.string().min(2,"firstname is required"),
        lastname: zod.string().min(2,"lastname is required"),
        
    })
    const result = validationSchema.safeParse(req.body)
    if (!result.success) {
        return res.status(403).json({
            message: "Invalid inputs",
            error:result.error.issues
        })
    } else {
        next();
    }
    
}

module.exports = validationMiddleware;