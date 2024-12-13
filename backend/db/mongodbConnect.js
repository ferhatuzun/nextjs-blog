const mongoose = require("mongoose");
require("dotenv").config()

const connectDB = async () => {
    try {
        // MongoDB'ye bağlantı
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB'ye başarıyla bağlanıldı");
    } catch (err) {
        console.error("MongoDB bağlantı hatası:", err);
        process.exit(1); // Bağlantı hatasında uygulamayı sonlandır
    }
};

module.exports = connectDB