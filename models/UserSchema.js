const mongoose = require('mongoose')

//Create Schema
const userSchema = new mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},    
},
{ timestamps: { Created: 'created_at' } })

module.exports = mongoose.model(`userModel`, userSchema)