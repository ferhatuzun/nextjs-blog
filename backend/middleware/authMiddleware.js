const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Yetkisiz erişim !" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Kullanıcı bilgisini ekliyoruz
        next(); // Middleware'in başarılı olması durumunda, sonraki işleme geçiş yapıyoruz
    } catch (err) {
        return res.status(403).json({ message: "Token geçersiz yada süresi doldu" });
    }
};
