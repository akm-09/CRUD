const mongoose = require('mongoose');
let { Schema } = mongoose;

let Post = new Schema({
    author: {type: String, requiered: true},
    title: {type: String, required: true},
    content: {type: String, required: true}
})

module.exports = mongoose.model('Post', Post);