const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const validator = require("validator")
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    const {email, password} = req.body;

    try {
        if (!email || !validator.isEmail(email)) {
            return res.status(400).json({message: "Geçerli bir email adresi giriniz !"})
        }
        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({message: "Eposta adresi bulunamadı !"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!password || !isMatch) {
            return res.status(400).json({message: "Eposta veya şifre hatalı !"})
        }

        const token = jwt.sign(
            {userId: user._id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "development",
            sameSite: "strict",
            path: "/",
        });

        res.json({message: "Giriş başarılı.", token})

    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Bir hata oluştu."});
    }
}

exports.logout = async (req, res) => {
    try{

    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development",
        sameSite: "strict",
        path: "/",
    });
    res.status(200).json({ message: "Çıkış yapıldı." });
    }catch (err) {
        console.error(err);

    }
};


