const { Product } = require("../models");

module.exports = async () => {
  const productos = [
    {
      name: "Adidas A87",
      description: "Championes para correr Adidas con suela de caucho.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/adidas.png",
      price: 50,
      stock: 40,
      bestproduct: true,
      slug: "adidas-a87",
      categoryId: 1,
    },
    {
      name: "Chinelas Adidas",
      description: "Chinelas Adidas rosadas, muy confortables.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/chinelasadidas.png",
      price: 20,
      stock: 100,
      bestproduct: true,
      slug: "chinelas-adidas",
      categoryId: 2,
    },
    {
      name: "Zapatos de futbol Ziptop",
      description:
        "Calzado para football con tapones de metal, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/football2.png",
      price: 80,
      stock: 50,
      bestproduct: true,
      slug: "zapatos-de-futbol-ziptop",
      categoryId: 1,
    },
    {
      name: "Zapatos de futbol Adidas",
      description: "Calzado para football, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/footballadidas.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "zapatos-de-futbol-adidas",
      categoryId: 1,
    },
    {
      name: "Zapatos de Golf",
      description: "Calzado de cuero para jugar al golf.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/golf.png",
      price: 100,
      stock: 20,
      bestproduct: false,
      slug: "zapatos-de-golf",
      categoryId: 1,
    },
    {
      name: "Heel Trainers Nike",
      description: "Trainers Nike con taco alto.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/heels.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "heel-trainers-nike",
      categoryId: 1,
    },
    {
      name: "Heel Trainers Converse",
      description: "Trainers Converse con taco alto.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/heels2.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "heel-trainers-converse",
      categoryId: 3,
    },
    {
      name: "Championes Reebok",
      description: "Calzado reebok confortable.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/reebok.png",
      price: 100,
      stock: 20,
      bestproduct: false,
      slug: "championes-reebok",
      categoryId: 1,
    },
    {
      name: "Running Sneakers",
      description: "Calzado para correr, aerodinámicos y colorido.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/running.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "running-sneakers",
      categoryId: 1,
    },
    {
      name: "Trainer JWT",
      description: "Calzado casual y confortable.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/whitetrainer.png",
      price: 100,
      stock: 20,
      bestproduct: false,
      slug: "trainer-jwt",
      categoryId: 1,
    },
    {
      name: "Zapatos",
      description: "Zapatos de vestir negros.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/zapato.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "zapatos",
      categoryId: 1,
    },
    {
      name: "Zapatos 1",
      description: "Zapatos de vestir marrones.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/zapato1.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "zapatos-1",
      categoryId: 1,
    },
    {
      name: "Zapatos 2",
      description: "Zapatos de vestir marrones.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/zapato2.png",
      price: 100,
      stock: 20,
      bestproduct: false,
      slug: "zapatos-2",
      categoryId: 4,
    },
    {
      name: "Zapatos 3",
      description: "Zapatos de vestir marrones.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/zapato3.png",
      price: 100,
      stock: 20,
      bestproduct: false,
      slug: "zapatos-3",
      categoryId: 1,
    },
    {
      name: "Zapatos 4",
      description: "Zapatos de vestir marrones.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/zapato4.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "zapatos-4",
      categoryId: 2,
    },
    {
      name: "Zapatos Balenciaga",
      description: "Calzado para football, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/balenciaga1.png",
      price: 100,
      stock: 20,
      bestproduct: false,
      slug: "zapatos-balenciaga",
      categoryId: 1,
    },
    {
      name: "Zapatos Balenciaga 2",
      description: "Calzado para football, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/balencia2.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "zapatos-balenciaga-2",
      categoryId: 1,
    },
    {
      name: "Trainers Nike",
      description: "Calzado para football, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/nike1.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "trainers-nike",
      categoryId: 2,
    },
    {
      name: "Trainers Nike 2",
      description: "Calzado para football, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/zapa.png",
      price: 100,
      stock: 20,
      bestproduct: false,
      slug: "trainers-nike-2",
      categoryId: 1,
    },
    {
      name: "Medias Nike",
      description: "Calzado para football, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/mediasNike.png",
      price: 100,
      stock: 20,
      bestproduct: false,
      slug: "medias-nike",
      categoryId: 1,
    },
    {
      name: "Zapatos prada",
      description: "Calzado para football, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/preada.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "zapatos-prada",
      categoryId: 1,
    },
    {
      name: "Zapatos Prada 2",
      description: "Calzado para football, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/prada2.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "zapatos-prada-2",
      categoryId: 1,
    },
    {
      name: "Zapatos Tommy",
      description: "Calzado para football, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/tommyH.png",
      price: 100,
      stock: 20,
      bestproduct: true,
      slug: "zapatos-tommy",
      categoryId: 1,
    },
    {
      name: "Zapatos Tommy 2",
      description: "Calzado para football, aerodinámicos y ergonómicos.",
      photo:
        "https://unyvfpzstnadbdhkxhbb.supabase.in/storage/v1/object/public/papos.photos/tommyH2.png",
      price: 100,
      stock: 20,
      bestproduct: false,
      slug: "zapatos-tommy-2",
      categoryId: 2,
    },
  ];

  await Product.bulkCreate(productos);
  console.log("[Database] Se corrió el seeder de Productos.");
};
