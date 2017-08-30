module.exports = function(sequelize, DataTypes) {
    var Eater = sequelize.define("Eater", {
        name: DataTypes.TEXT
    });

    Eater.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Eater.hasMany(models.Burger, {
        	foreignKey: 'eaterId',
            onDelete: "cascade"
        });
    };

    return Eater;
};