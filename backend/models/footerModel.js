const mongoose = require('mongoose');

const footerShema = new mongoose.Schema({
    about: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    linkGroup1Title: {
        type: String,
        required: true,
    },
    linkGroup1Text1: {
        type: String,
        required: true,
    },
    linkGroup1Text2: {
        type: String,
        required: true,
    },
    linkGroup1Text3: {
        type: String,
        required: true,
    },
    linkGroup1Text4: {
        type: String,
        required: true,
    },
    linkGroup1Text5: {
        type: String,
        required: true,
    },
    linkGroup1Text6: {
        type: String,
        required: true,
    },
    linkGroup1Link1: {
        type: String,
        required: true,
    },
    linkGroup1Link2: {
        type: String,
        required: true,
    },
    linkGroup1Link3: {
        type: String,
        required: true,
    },
    linkGroup1Link4: {
        type: String,
        required: true,
    },
    linkGroup1Link5: {
        type: String,
        required: true,
    },
    linkGroup1Link6: {
        type: String,
        required: true,
    },
    linkGroup2Title: {
        type: String,
        required: true,
    },
    linkGroup2Text1: {
        type: String,
        required: true,
    },
    linkGroup2Text2: {
        type: String,
        required: true,
    },
    linkGroup2Text3: {
        type: String,
        required: true,
    },
    linkGroup2Text4: {
        type: String,
        required: true,
    },
    linkGroup2Text5: {
        type: String,
        required: true,
    },
    linkGroup2Text6: {
        type: String,
        required: true,
    },
    linkGroup2Link1: {
        type: String,
        required: true,
    },
    linkGroup2Link2: {
        type: String,
        required: true,
    },
    linkGroup2Link3: {
        type: String,
        required: true,
    },
    linkGroup2Link4: {
        type: String,
        required: true,
    },
    linkGroup2Link5: {
        type: String,
        required: true,
    },
    linkGroup2Link6: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    copyright: {
        type: String,
        required: true,
    },
    footerPage1: {
        type: String,
        required: true,
    },
    footerPage2: {
        type: String,
        required: true,
    },
    footerPage3: {
        type: String,
        required: true,
    },
    footerPage1Link: {
        type: String,
        required: true,
    },
    footerPage2Link: {
        type: String,
        required: true,
    },
    footerPage3Link: {
        type: String,
        required: true,
    }

})

const Footer = mongoose.model("Footer", footerShema)
module.exports = Footer;