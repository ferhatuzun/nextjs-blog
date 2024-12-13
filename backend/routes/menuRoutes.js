const express = require('express');
const menuController = require('../controller/menuController');
const {authMiddleware} = require('../middleware/authMiddleware');

const router = express.Router();



router.post("/newMenu",authMiddleware, menuController.addMenu);
router.get("/getMenu", menuController.getMenu);
router.delete("/delete-menu/:id",authMiddleware, menuController.deleteMenu);
router.put("/update-menu/:id",authMiddleware, menuController.updateMenu);

module.exports = router;

