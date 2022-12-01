const express = require('express');
const router = express.Router();
const controller = require('../controller/ordered.controller');

router.post('/', controller.createOrdered);
router.delete('/:id', controller.removeOrdered);

module.exports = router;