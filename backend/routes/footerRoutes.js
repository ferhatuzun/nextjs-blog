const express = require('express');
const router = express.Router();
const footerController = require('../controller/footerController');
const {authMiddleware} = require('../middleware/authMiddleware');


router.get("/get-footer",footerController.getFooter);
router.put("/update-footer/:id",authMiddleware,footerController.updateFooter);

module.exports = router;