const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use("/api/admin", adminRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/products", productRoutes);
};
