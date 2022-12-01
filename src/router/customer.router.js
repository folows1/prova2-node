const express = require('express');
const router = express.Router();
const controller = require('../controller/customer.controller');

router.post('/', controller.createCustomer);
router.delete('/:id', controller.removeCustomer);

module.exports = router;