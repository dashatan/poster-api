const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    state: String,
    city: String,
    street: String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    bestfriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
})

module.exports = mongoose.model('User', userSchema)