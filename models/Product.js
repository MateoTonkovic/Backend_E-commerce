module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      bestproduct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "product",
      paranoid: true,
    }
  );

  // User.beforeCreate((user, options) => {
  //   user.password = bcrypt.hashSync(user.password, 10);
  // });

  return Product;
};
