const { ordered } = require('../model/index')

const createOrdered = async data => {
    await ordered.create(data)
}

const removeOrdered = async idOrdered => {
    return await ordered.destroy({
        where: {
            id: idOrdered
        }
    })
}

module.exports = {
    createOrdered,
    removeOrdered
}
