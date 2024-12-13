const express = require("express");
const authRoutes = require("./routes/authRoutes")
const menuRoutes = require("./routes/menuRoutes")
const blogRoutes = require("./routes/blogRoutes")
const footerRoutes = require("./routes/footerRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const connectDB = require("./db/mongodbConnect")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json()); // JSON verilerini okuyabilmek için middleware

connectDB()

app.use(cors({
    origin: "http://localhost:3000", // Bu, sadece Next.js'in çalıştığı domain'i kabul eder
    method: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/setting", menuRoutes)
app.use("/api/setting",footerRoutes)
app.use("/api/setting",categoryRoutes)
app.use("/api/blog", blogRoutes)
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor.`);
});

