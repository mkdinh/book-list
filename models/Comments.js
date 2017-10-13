// import mongoose dependecy
const mongoose = require('mongoose');

// create comment schema with mongoose
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

// create new model with mongoose schema
const Commentary = mongoose.model('Comment', CommentSchema);

// export new model
module.exports = Commentary;