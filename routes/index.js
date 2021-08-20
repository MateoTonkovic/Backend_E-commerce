const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {
  app.use("/admin", adminRoutes);
  app.use("/user", userRoutes);
  app.use("/products", productRoutes);
  app.use("/orders", orderRoutes);
};
