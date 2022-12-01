module.exports = (sequelize, DataTypes) => {
    const Ordered = sequelize.define('ordered', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_date: DataTypes.DATE,
        customer_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true
    });
    return Ordered;
}