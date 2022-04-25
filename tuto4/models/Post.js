//create model/ schema for database

const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title: {
type: String,
required: true
    },
    content: {
type: String,
required : false
    }
})

//creert zelf in mongoDB "collection: posts"
module.exports = mongoose.model('Post', postSchema)