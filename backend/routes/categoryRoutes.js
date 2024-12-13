const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');
const {authMiddleware} = require('../middleware/authMiddleware');

router.get("/category-list",categoryController.getCategories)
router.post("/new-category",authMiddleware,categoryController.addCategory)
router.put("/update-category/:id",authMiddleware,categoryController.updateCategory)
router.delete("/delete-category/:id",authMiddleware,categoryController.deleteCategory)
module.exports = router;
