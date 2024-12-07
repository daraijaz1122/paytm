const express = require('express');
const cors = require("cors")
const app = express();
const UserRouter = require("./routes/user")
const AccountRouter = require("./routes/Accounts")
const port = 3000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/user", UserRouter)
app.use("/account/v1", AccountRouter)


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})