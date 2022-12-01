const service = require('../service/product.service');

const createProduct = async (req, res) => {
    const product = req.body;
    if (!product.value || !product.name) {
        return res.status(400).send({
            message: 'Invalid data supplied'
        });
    }

    await service.createProduct(product);
    res.status(201).send('Product created');
}

const removeProduct = async (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        return res.status(400).send('O id deve ser um número')
    }
    const removido = await service.removeProduct(id);
    if (removido) {
        return res.status(204).send();
    }
    res.status(404).send('Product not found');
}

module.exports = {
    createProduct,
    removeProduct
}