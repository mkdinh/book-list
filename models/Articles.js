// import mongoose dependency
const mongoose = require('mongoose');

// create new schema with mongoose
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    byline: {
        type: String,
        require: true
    },

    date: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        require: true
    },
    url: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    } 
});

// create a model with mongoose schema
const Article =  mongoose.model('Article', ArticleSchema);

// export model
module.exports = Article;