module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        name: DataTypes.TEXT,
        devoured: DataTypes.BOOLEAN
    });

/*    Burger.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Burger.belongsTo(models.Eater, {
        	onDelete: "CASCADE",
            foreignKey: {
            	name: "eaterId",
                allowNull: false
            }
        });
    };*/

    return Burger;
};