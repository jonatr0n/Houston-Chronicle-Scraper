const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 module.exports = mongoose.model(
    "Comment",
    new Schema({
        comment: {
            type: String,
            required: ['Please input a comment.']
        }
    })
);
