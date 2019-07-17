const mongoose = require('mongoose')
var Book = mongoose.model('Book',{
    title:String,
    coverImage:String,
    description:String,
    author:String,
    department:String,
    price:Number
})
module.exports = {Book}