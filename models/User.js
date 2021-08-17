module.exports = (sequelize, Model, DataTypes) => {
  const bcrypt = require("bcryptjs");
  class User extends Model {
    /* static async hashPassword(password) {
      return await bcrypt.hash(password, 10);
    } */

    async validPassword(plaintextPassword) {
      return await bcrypt.compare(plaintextPassword, this.password);
    }
  }

  User.init(
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      // email: {
      //   type: DataTypes.STRING,
      //   Validite: { isEmail: true },
      //   allowNull: false,
      //   unique: true,
      // },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adresses: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phonenumbers: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // orderlist: [],
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  // User.beforeCreate(async (user, options) => {
  //   user.password = await bcrypt.hash(user.password, 10);
  // });

  return User;
};



//Estas funciones son las mismas para varios models por ejemplo Article, Vendor, etc.
