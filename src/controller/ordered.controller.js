const service = require('../service/ordered.service');

const createOrdered = async (req, res) => {
    const ordered = req.body;
    if (!ordered.customer_id || !ordered.product_id || !ordered.order_date) {
        return res.status(400).send({
            message: 'Invalid data supplied'
        });
    }

    await service.createOrdered(ordered);
    res.status(201).send('Order created');
}

const removeOrdered = async (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        return res.status(400).send('O id deve ser um número')
    }
    const removido = await service.removeOrdered(id);
    if (removido) {
        return res.status(204).send();
    }
    res.status(404).send('Order not found');
}

module.exports = {
    createOrdered,
    removeOrdered
}