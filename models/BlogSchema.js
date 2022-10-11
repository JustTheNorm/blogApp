const mongoose = require('mongoose')

//Create Schema
const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    author: {type: String, required: true},
    likes:{type: Number, default: 0},
    sponsored: {type: Boolean, default: false},
    
},
{ timestamps: { Created: 'created_at' } })

module.exports = mongoose.model(`blogModel`, blogSchema)