const service = require('../service/customer.service');

const createCustomer = async (req, res) => {
    const customer = req.body;
    if (!customer.name || !customer.email) {
        return res.status(400).send({
            message: 'Invalid data supplied'
        });
    }

    await service.createCustomer(customer);
    res.status(201).send('Customer created');
}

const removeCustomer = async (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        return res.status(400).send('O id deve ser um número')
    }
    const removido = await service.removeCustomer(id);
    if (removido) {
        return res.status(204).send();
    }
    res.status(404).send('Customer not found');
}

module.exports = {
    createCustomer,
    removeCustomer
}