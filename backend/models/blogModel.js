const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
    ,
    date:{
        type: String,
        default: ()=>{
            const now = new Date();
            const date = `${now.getDate() <9 ? `0${now.getDate()}`:now.getDate()}.${now.getMonth()+1 <9 ? `0${now.getMonth()+1}`:now.getMonth()+1}.${now.getFullYear()}`
            return date
        }
    }
})


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;