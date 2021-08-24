const { datatype } = require("faker");
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
const Order_Product = sequelize.define("Order_Product", {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: "id",
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "id",
    },
  },
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unitPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

//vinculamos los modelos
Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Order);
Order.belongsTo(User);

// Product.hasMany(Order);
Order.belongsToMany(Product, { through: "Order_Product" });
Product.belongsToMany(Order, { through: "Order_Product" });

module.exports = {
  sequelize,
  Admin,
  User,
  Category,
  Product,
  Order,
  Order_Product,
};
