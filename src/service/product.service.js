const { product } = require('../model/index')
const { ordered } = require('../model/index')

const createProduct = async data => {
    await product.create(data)
}

const removeProduct = async idProduct => {
    await ordered.destroy({
        where: {
            product_id: idProduct
        }
    })
    return await product.destroy({
        where: {
            id: idProduct
        },
    })
}

module.exports = {
    createProduct,
    removeProduct
}
