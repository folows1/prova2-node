const express = require('express');
const router = express.Router();
const controller = require('../controller/product.controller');

router.post('/', controller.createProduct);
router.delete('/:id', controller.removeProduct);

module.exports = router;