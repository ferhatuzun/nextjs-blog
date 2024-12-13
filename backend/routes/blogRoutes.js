const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
const {authMiddleware} = require('../middleware/authMiddleware');


router.post("/new-blog", authMiddleware, blogController.newBlog);
router.get("/get-blog-list",blogController.getBlog)
router.get("/single-post/:id",blogController.singlePost)
router.delete("/delete-blog/:id",authMiddleware,blogController.deleteBlog)
router.put("/update-blog/:id",authMiddleware,blogController.updateBlog)
module.exports = router;
