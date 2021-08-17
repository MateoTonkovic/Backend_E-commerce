module.exports = (sequelize, Model, DataTypes) => {
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return User;
};

class User {
  findAll() {}

  findOne() {}

  save() {}

  delete() {}

  insert() {}

  update() {}
}

//Estas funciones son las mismas para varios models por ejemplo Article, Vendor, etc.
