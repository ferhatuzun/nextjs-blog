const express = require("express")
const router = express.Router();
const registerController = require("../controller/registerController")
const loginController = require("../controller/loginController")
const jwt = require("jsonwebtoken")

router.post("/register",registerController.register)
router.post("/login",loginController.login)
router.post("/logout",loginController.logout)

router.get("/check-session",(req,res)=>{
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ isAuthenticated: false });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }

        // Token geçerli, oturum başarılı
        res.status(200).json({ isAuthenticated: true });
    });
})

module.exports=router