const Blog = require('../models/blogModel');


exports.newBlog = async (req, res) => {
    const {blogTitle,blogAuthor,blogContent,blogCategory} = req.body;

    if(!blogTitle || !blogAuthor || !blogContent){
        res.status(400).json({message:"Tüm alanlar doldurulmalıdır!"})
    }
    try{
        const newBlog = new Blog({title:blogTitle,author:blogAuthor,content:blogContent,category:blogCategory});
        const blog = await newBlog.save()
        res.status(200).json({message:"Başarıyla kaydedildi."})
    }catch (err){
        console.log(err)
        res.status(500).json({message:"Bir hata oluştu."})
    }
}

exports.getBlog = async (req, res) => {
    try{
        const getMenu = await Blog.find()
        res.status(200).json(getMenu)
    }catch (err){
        console.log(err)
        res.status(500).json({message:"Bir hata oluştu."})
    }
}
exports.singlePost = async (req, res) => {
    const { id } = req.params; // URL'den ID'yi al
    try {
        // `findOne` için doğru sorguyu geç
        const singlePost = await Blog.find({ _id: id });
        if (!singlePost) {
            return res.status(404).json({ message: "Post bulunamadı!" });
        }
        res.status(200).json(singlePost);
    } catch (error) {
        res.status(500).json({ message: "Sunucu hatası!", error: error.message });
    }
};


exports.deleteBlog = async (req, res) => {
    const {id} = req.params;

    try {
        const deleteBlog = await Blog.findByIdAndDelete(id)
        if(!deleteBlog){
             return res.status(404).json({message:"Yazı bulunamadı !"})
        }
        res.status(200).json({message:"Başarıyla silindi."});
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Bir hata oluştu !"})
    }
}

exports.updateBlog = async (req, res) => {
    const {id} = req.params;

    try {
        const updateBlog = await Blog.findByIdAndUpdate(id,req.body)
        if(!updateBlog){
            return res.status(404).json({message:"Yazı bulunamadı !"})
        }
        res.status(200).json({message:"Başarıyla Güncellendi"})
    }catch (err){
        console.log(err)
        res.status(500).json({message:"Bir hata oluştu."})
    }
}