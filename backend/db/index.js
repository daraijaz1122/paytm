const mongoose = require("mongoose")
const {CONNECTION_STRING_DB}=   require("../config")
mongoose.connect(CONNECTION_STRING_DB)

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 5,
        maxLength: 20,
        lowercase:true
       },
    password: {
        type: String,
        required: true,
        minLength:6
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength:20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength:20
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = {User}