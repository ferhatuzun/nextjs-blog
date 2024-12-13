const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema ({
    menuName: {
        required: true,
        type: String,
        trim: true,
    },
    menuLink:{
        type: String,
        required: true,
        trim: true,
    }
})

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;