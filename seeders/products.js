const productos = [
  {
    name: "Adidas A87",
    description: "Championes para correr Adidas con suela de caucho.",
    photo: "adidas.png",
    price: 20,
    stock: 40,
    bestproduct: true,
    slug: "adidas-a87",
    categoryId: 3,
  },
  {
    name: "Chinelas Adidas",
    description: "Chinelas Adidas rosadas, muy confortables.",
    photo: "chinelasadidas.png",
    price: 20,
    stock: 100,
    bestproduct: true,
    slug: "chinelas-adidas",
    categoryId: 1,
  },
  {
    name: "Zapatos de futbol Ziptop",
    description:
      "Calzado para football con tapones de metal, aerodinámicos y ergonómicos.",
    photo: "football2.png",
    price: 80,
    stock: 50,
    bestproduct: true,
    slug: "zapatos-de-futbol-ziptop",
    categoryId: 3,
  },
  {
    name: "Zapatos de futbol Adidas",
    description: "Calzado para football, aerodinámicos y ergonómicos.",
    photo: "footballadidas.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "zapatos-de-futbol-adidas",
    categoryId: 3,
  },
  {
    name: "Zapatos de Golf",
    description: "Calzado de cuero para jugar al golf.",
    photo: "golf.png",
    price: 100,
    stock: 20,
    bestproduct: false,
    slug: "zapatos-de-golf",
    categoryId: 3,
  },
  {
    name: "Heel Trainers Nike",
    description: "Trainers Nike con taco alto.",
    photo: "heels.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "heel-trainers-nike",
    categoryId: 1,
  },
  {
    name: "Heel Trainers Converse",
    description: "Trainers Converse con taco alto.",
    photo: "heels2.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "heel-trainers-converse",
    categoryId: 1,
  },
  {
    name: "Championes Reebok",
    description: "Calzado reebok confortable.",
    photo: "reebok.png",
    price: 100,
    stock: 20,
    bestproduct: false,
    slug: "championes-reebok",
    categoryId: 1,
  },
  {
    name: "Running Sneakers",
    description: "Calzado para correr, aerodinámicos y colorido.",
    photo: "running.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "running-sneakers",
    categoryId: 2,
  },
  {
    name: "Trainer JWT",
    description: "Calzado casual y confortable.",
    photo: "whitetrainer.png",
    price: 100,
    stock: 20,
    bestproduct: false,
    slug: "trainer-jwt",
    categoryId: 1,
  },
  {
    name: "Zapatos",
    description: "Zapatos de vestir negros.",
    photo: "zapato.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "zapatos",
    categoryId: 4,
  },
  {
    name: "Zapatos 1",
    description: "Zapatos de vestir marrones.",
    photo: "zapato1.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "zapatos-1",
    categoryId: 4,
  },
  {
    name: "Zapatos 2",
    description: "Zapatos de vestir marrones.",
    photo: "zapato2.png",
    price: 100,
    stock: 20,
    bestproduct: false,
    slug: "zapatos-2",
    categoryId: 4,
  },
  {
    name: "Zapatos 3",
    description: "Zapatos de vestir marrones.",
    photo: "zapato3.png",
    price: 100,
    stock: 20,
    bestproduct: false,
    slug: "zapatos-3",
    categoryId: 4,
  },
  {
    name: "Zapatos 4",
    description: "Zapatos de vestir marrones.",
    photo: "zapato4.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "zapatos-4",
    categoryId: 4,
  },
  {
    name: "Zapatos Balenciaga",
    description: "Calzado para football, aerodinámicos y ergonómicos.",
    photo: "balenciaga1.png",
    price: 100,
    stock: 20,
    bestproduct: false,
    slug: "zapatos-balenciaga",
    categoryId: 2,
  },
  {
    name: "Zapatos Balenciaga 2",
    description: "Calzado para football, aerodinámicos y ergonómicos.",
    photo: "balencia2.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "zapatos-balenciaga-2",
    categoryId: 2,
  },
  {
    name: "Trainers Nike",
    description: "Calzado para football, aerodinámicos y ergonómicos.",
    photo: "nike1.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "trainers-nike",
    categoryId: 3,
  },
  {
    name: "Trainers Nike 2",
    description: "Calzado para football, aerodinámicos y ergonómicos.",
    photo: "zapa.png",
    price: 100,
    stock: 20,
    bestproduct: false,
    slug: "trainers-nike-2",
    categoryId: 3,
  },
  {
    name: "Medias Nike",
    description: "Calzado para football, aerodinámicos y ergonómicos.",
    photo: "mediasNike.png",
    price: 100,
    stock: 20,
    bestproduct: false,
    slug: "medias-nike",
    categoryId: 3,
  },
  {
    name: "Zapatilla prada",
    description: "Calzado para football, aerodinámicos y ergonómicos.",
    photo: "preada.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "zapatos-prada",
    categoryId: 2,
  },
  {
    name: "Zapatilla Prada 2",
    description: "Calzado para football, aerodinámicos y ergonómicos.",
    photo: "prada2.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "zapatos-prada-2",
    categoryId: 2,
  },
  {
    name: "Zapatilla Tommy",
    description: "Calzado para football, aerodinámicos y ergonómicos.",
    photo: "tommyH.png",
    price: 100,
    stock: 20,
    bestproduct: true,
    slug: "zapatos-tommy",
    categoryId: 2,
  },
  {
    name: "Zapatilla Tommy 2",
    description: "Calzado para football, aerodinámicos y ergonómicos.",
    photo: "tommyH2.png",
    price: 100,
    stock: 20,
    bestproduct: false,
    slug: "zapatos-tommy-2",
    categoryId: 2,
  },
];

module.export = { productos };
