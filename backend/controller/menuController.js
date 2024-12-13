const Menu = require('../models/menuModel');


exports.addMenu = async (req, res) => {
    const {menuName, menuLink} = req.body;
    if (!menuName || !menuLink) {
        return res.status(400).json({message: "Boş bırakılamaz."})
    }
    try {
        const newMenu = new Menu({
            menuName,
            menuLink,
        })
        const menu = await newMenu.save()
        res.status(201).json({
            message: "Başarıyla kaydedildi",
            menu: {
                menuName: menu.menuName,
                menuLink: menu.menuLink,
            }
        })
    } catch (err) {
        res.status(500).json({message: "Sunucu hatası !"})
    }
}

exports.getMenu = async (req, res) => {
    const getMenu = await Menu.find()
    res.status(200).json(getMenu);
}

exports.deleteMenu = async (req, res) => {
    const {id} = req.params;
    try {
        const deletedMenu = await Menu.findByIdAndDelete(id);
        if (!deletedMenu) {
            return res.status(404).json({message: "Menü bulunamadı!"});
        }
        res.status(200).json({message: "Başarıyla silindi."});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Sunucu hatası!"});
    }
}

exports.updateMenu = async (req, res) => {
    const {id} = req.params;
    try {
        const updateMenu = await Menu.findByIdAndUpdate(id, req.body);
        if (!updateMenu) {
            return res.status(404).json({message: "Menü bulunamadı!"})
        }
        res.status(200).json({message:"Başarıyla güncellendi."});
    } catch (err) {
        console.error(err);
        res.status(500).json({message:"Sunucu hatası!"})
    }
}