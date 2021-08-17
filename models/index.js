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
const Role = require("./Role")(sequelize, Model, DataTypes);
const User = require("./User")(sequelize, Model, DataTypes);
const Article = require("./Article")(sequelize, Model, DataTypes);
const Comment = require("./Comment")(sequelize, Model, DataTypes);
const Subscriber = require("./Subscriber")(sequelize, Model, DataTypes);

//vinculamos los modelos
User.hasMany(Article);
Article.belongsTo(User);

Article.hasMany(Comment);
Comment.belongsTo(Article);

Role.hasMany(User);
User.belongsTo(Role);

module.exports = {
  sequelize,
  Role,
  User,
  Comment,
  Article,
  Subscriber,
};
