module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "order",
      paranoid: true,
    }
  );

  // User.beforeCreate((user, options) => {
  //   user.password = bcrypt.hashSync(user.password, 10);
  // });

  return Order;
};
