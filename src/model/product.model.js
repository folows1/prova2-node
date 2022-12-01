module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        value: DataTypes.FLOAT,
    }, {
        timestamps: false,
        freezeTableName: true
    });
    return Product;
}