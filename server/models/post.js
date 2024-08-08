const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    date: String,
    content: String
});

module.exports = mongoose.model('Post', postSchema);
