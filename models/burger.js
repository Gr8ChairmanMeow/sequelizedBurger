module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Burger", {
        name: DataTypes.TEXT,
        devoured: DataTypes.BOOLEAN
    });
};