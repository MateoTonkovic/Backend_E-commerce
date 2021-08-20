const adminRoutes = require("./adminRoutes");
const categoryRoutes = require("./categoryRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use("/admin", adminRoutes);
  app.use("/user", userRoutes);
  app.use("/products", productRoutes);
  app.use("/category", categoryRoutes);
};
