const Category = require('../models/categoryModel');

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json(categories);
    } catch (err) {
        return res.status(500).json({message: "Sunucu hatası!"});
    }
}

exports.addCategory = async (req, res) => {
    const {categoryName} = req.body;

    if (!categoryName) {
        res.status(400).json({message: "Boş bırakılamaz!"})
    }
    try {
        const newCategory = new Category({
            categoryName,
            // categoryLink
        });
        const category = await newCategory.save()
        res.status(200).json({message: "Başarıyla kaydedildi."});
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Sunucu hatası!"})
    }
}
exports.updateCategory = async (req, res) => {
    const {id} = req.params;
    try {
        const updateCategory = await Category.findByIdAndUpdate(id, req.body)
        if (!updateCategory) {
            res.status(404).json({message: "Kategori bulunamadı!"})
        }
        res.status(200).json({message: "Başarıyla güncellendi."})
    } catch {
        res.status(500).json({message: "Sunucu hatası!"})
    }
}
exports.deleteCategory = async (req, res) => {
    const {id} = req.params;
    try {
        const deleteCategory = await Category.findByIdAndDelete(id)
        if (!deleteCategory) {
            res.status(404).json({message: "Kategori bulunamadı!"})
        }
        res.status(200).json({message: "Başarıyla silindi."})
    } catch {
        res.status(500).json({message: "Sunucu hatası!"})
    }
}