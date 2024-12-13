const Footer = require("../models/footerModel");


exports.getFooter = async (req, res) => {
    try {
        const footer = await Footer.find()
        res.status(200).json({footer})
    }catch (err){
        console.log(err)
        res.status(500).json({message:"Bir hata oluştu !"})
    }
}

exports.updateFooter = async (req, res) => {
    const {id} = req.params;
    try {
        const updateFooter = await Footer.findByIdAndUpdate(id,req.body)
        if(!updateFooter){
            res.status(404).json({message:"Bulunamadı"})
        }
        res.status(200).json({message:"Başarıyla kaydedildi."})
    }catch (err){
        console.log(err)
        res.status(500).json({message:"Sunucu hatası!"})
    }
}
