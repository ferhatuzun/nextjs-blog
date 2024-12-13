const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const validator = require("validator")


exports.register = async (req, res) => {
    const { registerEmail, registerPassword, confirmPassword } = req.body
    const existingUser = await User.findOne({email:registerEmail})
    if(existingUser){
        return res.status(400).json({message:"Bu eposta sistemimize kayıtlı !"})
    }
    if(!registerEmail || !validator.isEmail(registerEmail)){
        return res.status(400).json({message:"Geçersiz email adresi!"})
    }
    if(!registerPassword || registerPassword.length<6){
        return res.status(400).json({message:"Şifre en az 6 karakter olmalıdır!"})
    }
    if(registerPassword !== confirmPassword){
        return res.status(400).json({message:"Şifreler eşleşmiyor !"})
    }

    try {
         const hashedPassword = await bcrypt.hash(registerPassword,10)

         const newUser = new User({
            email:registerEmail,
            password:hashedPassword
         })

         const user = await newUser.save()
         res.status(201).json({
            message:"Kullanıcı başarıyla kaydedildi",
            user:{
                id:user.id,
                email:user.email
            }
         })
    } catch (err) {
        res.status(500).json({message:"Sunucu hatası !"})
    }
}