const { Product } = require("../models");

module.exports = async () => {
  const productos = [
    {
      name: "Adidas A87",
      description: "Championes para correr Adidas con suela de caucho.",
      photo: "adidas.png",
      price: 50,
      stock: 40,
      bestproduct: true,
      slug: "adidas-a87",
      categoryId: 1,
    },
    {
      name: "Chinelas Adidas",
      description: "Chinelas Adidas rosadas, muy confortables.",
      photo: "chinelasadidas.png",
      price: 20,
      stock: 100,
      bestproduct: true,
      slug: "chinelas-adidas",
      categoryId: 2,
    },
    {
      name: "Zapatos de futbol Ziptop",
      description:
        "Calzado para football con tapones de metal, aerodinámicos y ergoómicos.",
      photo: "football2.png",
      price: 80,
      stock: 50,
      bestproduct: true,
      slug: "zapatos-de-futbol-ziptop",
      categoryId: 1,
    },
    {
      name: "Zapatos de futbol Adidas",
      description: "Calzado para football, aerodinámicos y ergoómicos.",
      photo: "football.png",
      price: 100,
      stock: 20,
      bestproduct: false,
      slug: "zapatos-de-futbol-adidas",
      categoryId: 1,
    },
  ];

  await Product.bulkCreate(productos);
  console.log("[Database] Se corrió el seeder de Productos.");
};
