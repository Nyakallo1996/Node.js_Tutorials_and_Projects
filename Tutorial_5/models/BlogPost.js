const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    tilte: String,
    body: String
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost