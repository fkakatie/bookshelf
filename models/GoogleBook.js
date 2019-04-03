const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoogleBookSchema = new Schema({
    googleId: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    // Title of the book
    title: {
        type: String,
        required: true,
        trim: true
    },
    // The books's author(s) as returned
    authors: [{
        type: String,
        required: true,
        trim: true
    }],
    // The book's description as returned
    description: {
        type: String,
        required: true,
        trim: true,
    }, 
    shortDesc: {
        type: String,
        required: true,
        trim: true
    }, 
    // The Book's thumbnail image as returned
    image: {   
        type: String,
        trim: true
    }, 
    // The Book's information link as returned
    link: {
        type: String,
        required: true,
        trim: true
    }
});

const GoogleBook = mongoose.model('GoogleBook', GoogleBookSchema);

module.exports = GoogleBook;