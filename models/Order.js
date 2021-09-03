module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "sin pagar", // pago, enviado, entregado
      },
      uuid: {
        type: DataTypes.STRING,
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
