module.exports = function(sequelize, DataTypes) {
    var Categories = sequelize.define("Categorie", {
      id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
      categoryName: DataTypes.STRING,
      categoryType: DataTypes.STRING,
      userId: DataTypes.INTEGER
    });
    Categories.associate = function(models) {
        // Associating Catergories with Expense
        //
        Categories.hasMany(models.Expense, {
          onDelete: "cascade"
        });
      };

    return Categories;
  };