const { customer } = require('../model/index')
const { ordered } = require('../model/index')

const createCustomer = async data => {
    await customer.create(data)
}

const removeCustomer = async idCustomer => {
    await ordered.destroy({
        where: {
            customer_id: idCustomer
        }
    })
    return await customer.destroy({
        where: {
            id: idCustomer
        },
    })
}

module.exports = {
    createCustomer,
    removeCustomer
}
