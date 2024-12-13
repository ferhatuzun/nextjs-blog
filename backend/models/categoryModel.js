const mongoose = require('mongoose');

const categoryModel = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    // categoryLink:{
    //     type: String,
    //     required: true,
    // }
})


const Category = mongoose.model("Category", categoryModel);
module.exports = Category;