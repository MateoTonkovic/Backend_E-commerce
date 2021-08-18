const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

// se crean los modelos, aun no estan vinculados
const Admin = require("./Admin")(sequelize, Model, DataTypes);
const User = require("./User")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const Order = require("./Order")(sequelize, Model, DataTypes);

//vinculamos los modelos
Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Order);
Order.belongsToMany(Product, { through: "Product_Order" });

module.exports = {
  sequelize,
  Admin,
  User,
  Category,
  Product,
  Order,
};
