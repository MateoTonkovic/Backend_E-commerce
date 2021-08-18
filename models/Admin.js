module.exports = (sequelize, Model, DataTypes) => {
  class Admin extends Model {}

  Admin.init(
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        Validite: { isEmail: true },
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "admin",
    }
  );

  return Admin;
};
