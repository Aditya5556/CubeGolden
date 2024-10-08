const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        publicId: String,
        publicUrl: String
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('person', userSchema)