module.exports = (sequelize, Model, DataTypes) => {
  class Category extends Model {}

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "category",
      paranoid: true,
    }
  );

  // User.beforeCreate((user, options) => {
  //   user.password = bcrypt.hashSync(user.password, 10);
  // });

  return Category;
};
